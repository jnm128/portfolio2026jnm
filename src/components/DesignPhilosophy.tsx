import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle, Plus } from 'lucide-react';

interface DesignPhilosophyProps {
  className?: string;
}

const PulsingCircle = () => (
  <span className="relative flex items-center justify-center w-3 h-3">
    <Circle className="w-3 h-3 fill-current relative z-10" />
    <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring opacity-50" />
  </span>
);

const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({ className }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

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

  const activePhilosophy = philosophies[activeCard];

  const handleReveal = () => setIsRevealed(true);
  const handleReset = () => {
    setIsRevealed(false);
    setActiveCard(0);
  };

  return (
    <section id="philosophy" className={cn(
      'bg-surface-4 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-[5] -mt-8 md:-mt-16 transition-all duration-500',
      isRevealed ? 'py-16 md:py-24' : 'pt-14 md:pt-20 pb-8 md:pb-12',
      className
    )}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <FadeIn>
          <div className={cn("flex items-center justify-between", isRevealed && "mb-6")}>
            <h2 className="text-xl md:text-2xl font-serif font-medium flex items-center gap-3">
              <PulsingCircle />
              Design Philosophy
            </h2>
            <button 
              onClick={isRevealed ? handleReset : handleReveal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/40 hover:bg-secondary/60 transition-all"
            >
              <span className="text-xs text-muted-foreground">
                {isRevealed ? 'Close' : 'Open'}
              </span>
              <Plus className={cn(
                "w-4 h-4 text-muted-foreground transition-transform duration-300",
                isRevealed && "rotate-45"
              )} />
            </button>
          </div>
        </FadeIn>

        {/* Revealed Content */}
        <div 
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: isRevealed ? '800px' : '0px',
            opacity: isRevealed ? 1 : 0,
            transform: `translateY(${isRevealed ? 0 : -20}px)`
          }}
        >
          <div className="mt-8 space-y-6">
            {/* Expanded Card - Active Philosophy */}
            <div 
              className="relative p-8 md:p-10 rounded-2xl bg-primary/5 border border-primary/20 animate-card-slide-up"
              key={activeCard}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-4xl md:text-5xl transition-transform duration-300">{activePhilosophy.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-primary">
                    {activePhilosophy.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {activePhilosophy.description}
                  </p>
                </div>
              </div>
              
              {/* Card indicator */}
              <div className="absolute bottom-4 right-6 text-xs text-muted-foreground/60">
                {activeCard + 1} / {philosophies.length}
              </div>
            </div>

            {/* Collapsed Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {philosophies.map((philosophy, index) => (
                <button
                  key={philosophy.title}
                  onClick={() => setActiveCard(index)}
                  className={cn(
                    "p-4 md:p-5 rounded-2xl text-left transition-all duration-300 group",
                    activeCard === index
                      ? "bg-primary/10 border border-primary/30 animate-card-pop"
                      : "bg-card border border-border hover:bg-secondary/50 hover:border-border/80 hover:scale-[1.02]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "text-xl md:text-2xl transition-transform duration-300",
                      activeCard === index && "scale-110"
                    )}>
                      {philosophy.icon}
                    </span>
                    <span className={cn(
                      "text-sm md:text-base font-medium transition-colors duration-300",
                      activeCard === index ? "text-primary" : "text-foreground/80 group-hover:text-foreground"
                    )}>
                      {philosophy.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
