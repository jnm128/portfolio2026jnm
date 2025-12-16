import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface DesignPhilosophyProps {
  className?: string;
}

const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({ className }) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

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
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="philosophy" className={cn('py-16 md:py-24 bg-surface-4 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-40', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Design Philosophy
          </h2>
          <div className="border-b border-border/40 mb-4" />
          <p className="text-muted-foreground max-w-2xl mb-12">
            Click to flip and discover the principles that guide every project
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {philosophies.map((philosophy, index) => (
            <FadeIn key={philosophy.title} delay={index * 100}>
              <div
                className="relative h-[280px] md:h-[320px] cursor-pointer perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={cn(
                    "relative w-full h-full transition-transform duration-500 transform-style-3d",
                    flippedCards.has(index) && "rotate-y-180"
                  )}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 p-8 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-5xl md:text-6xl mb-6">{philosophy.icon}</span>
                    <h3 className="text-2xl font-serif font-medium">{philosophy.title}</h3>
                    <span className="text-xs text-muted-foreground mt-4">Click to flip</span>
                  </div>
                  
                  {/* Back of card */}
                  <div
                    className="absolute inset-0 p-8 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col justify-center backface-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h4 className="text-base font-medium text-primary mb-4">{philosophy.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {philosophy.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
