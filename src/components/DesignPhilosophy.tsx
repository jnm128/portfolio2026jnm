import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle, GripVertical } from 'lucide-react';

interface DesignPhilosophyProps {
  className?: string;
}

const PulsingCircle = () => (
  <span className="relative flex items-center justify-center w-3 h-3">
    <Circle className="w-3 h-3 fill-current relative z-10" />
    <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
  </span>
);

const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({ className }) => {
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const philosophies = [
    {
      title: "User-Centered",
      description: "Every design decision starts with understanding the user. Through research, empathy, and testing, we create experiences that truly resonate with the people who matter most.",
      icon: "✦"
    },
    {
      title: "Purposeful",
      description: "Design should solve problems, not just look beautiful. Each element serves a purpose, guiding users toward meaningful outcomes while eliminating unnecessary friction.",
      icon: "◇"
    },
    {
      title: "Iterative",
      description: "Great design emerges through iteration. We embrace feedback, test assumptions, and continuously refine until we achieve solutions that exceed expectations.",
      icon: "○"
    },
    {
      title: "Collaborative",
      description: "The best work happens together. We believe in transparent communication, shared ownership, and building lasting relationships with our clients and their teams.",
      icon: "△"
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCard(prev => prev === index ? null : index);
  };

  const calculateProgress = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const progress = Math.max(0, Math.min(100, (x / rect.width) * 100));
    return progress;
  }, []);

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    const progress = calculateProgress(clientX);
    setDragProgress(progress);
  }, [calculateProgress]);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const progress = calculateProgress(clientX);
    setDragProgress(progress);
  }, [isDragging, calculateProgress]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    // Snap to revealed if dragged past 40%
    if (dragProgress > 40) {
      setDragProgress(100);
      setIsRevealed(true);
    } else {
      setDragProgress(0);
      setIsRevealed(false);
    }
  }, [dragProgress]);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => { if (isDragging) handleDragEnd(); };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  // Reset to closed state
  const handleReset = () => {
    setDragProgress(0);
    setIsRevealed(false);
    setFlippedCard(null);
  };

  const revealProgress = isRevealed ? 100 : dragProgress;

  return (
    <section id="philosophy" className={cn('py-16 md:py-24 bg-surface-4 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-[5] -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-serif font-medium flex items-center gap-3">
              <PulsingCircle />
              Design Philosophy
            </h2>
            {isRevealed && (
              <button 
                onClick={handleReset}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Hide
              </button>
            )}
          </div>

          {/* Drag Track */}
          <div 
            ref={trackRef}
            className={cn(
              "relative h-12 rounded-full bg-secondary/50 cursor-grab select-none overflow-hidden",
              isDragging && "cursor-grabbing"
            )}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Progress Fill */}
            <div 
              className="absolute inset-y-0 left-0 bg-primary/20 transition-all duration-150 ease-out"
              style={{ 
                width: `${revealProgress}%`,
                transitionDuration: isDragging ? '0ms' : '300ms'
              }}
            />
            
            {/* Track Label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className={cn(
                "text-sm text-muted-foreground transition-opacity duration-300",
                revealProgress > 20 && "opacity-0"
              )}>
                Drag to reveal →
              </span>
            </div>

            {/* Draggable Thumb */}
            <div 
              className={cn(
                "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary shadow-lg flex items-center justify-center transition-all",
                isDragging ? "scale-110" : "scale-100"
              )}
              style={{ 
                left: `calc(${revealProgress}% - 20px)`,
                transitionDuration: isDragging ? '0ms' : '300ms',
                transitionProperty: 'left, transform'
              }}
            >
              <GripVertical className="w-4 h-4 text-primary" />
            </div>
          </div>
        </FadeIn>

        {/* Revealed Content */}
        <div 
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: revealProgress > 40 ? '600px' : '0px',
            opacity: revealProgress > 40 ? 1 : 0,
            transform: `translateY(${revealProgress > 40 ? 0 : -20}px)`
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {philosophies.map((philosophy, index) => (
              <FadeIn key={philosophy.title} delay={index * 100}>
                <div
                  className="relative h-[220px] md:h-[240px] cursor-pointer perspective-1000"
                  onClick={() => toggleFlip(index)}
                >
                  <div
                    className={cn(
                      "relative w-full h-full transition-transform duration-500 transform-style-3d",
                      flippedCard === index && "rotate-y-180"
                    )}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front of card */}
                    <div
                      className="absolute inset-0 p-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center backface-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <span className="text-3xl md:text-4xl mb-4">{philosophy.icon}</span>
                      <h3 className="text-lg font-serif font-medium">{philosophy.title}</h3>
                      <span className="text-xs text-muted-foreground mt-3">Click to flip</span>
                    </div>
                    
                    {/* Back of card */}
                    <div
                      className="absolute inset-0 p-5 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col justify-center backface-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <h4 className="text-sm font-medium text-primary mb-2">{philosophy.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {philosophy.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
