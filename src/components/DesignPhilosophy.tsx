import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface DesignPhilosophyProps {
  className?: string;
}

const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({ className }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const philosophies = [
    {
      title: "User-Centered",
      subtitle: "People First",
      description: "Every design decision starts with understanding the user. Through research, empathy, and testing, we create experiences that truly resonate with the people who matter most.",
      icon: "✦"
    },
    {
      title: "Purposeful",
      subtitle: "Intent Over Decoration",
      description: "Design should solve problems, not just look beautiful. Each element serves a purpose, guiding users toward meaningful outcomes while eliminating unnecessary friction.",
      icon: "◇"
    },
    {
      title: "Iterative",
      subtitle: "Continuous Refinement",
      description: "Great design emerges through iteration. We embrace feedback, test assumptions, and continuously refine until we achieve solutions that exceed expectations.",
      icon: "○"
    },
    {
      title: "Collaborative",
      subtitle: "Partnership Driven",
      description: "The best work happens together. We believe in transparent communication, shared ownership, and building lasting relationships with our clients and their teams.",
      icon: "△"
    }
  ];

  return (
    <section id="philosophy" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4">
            Design Philosophy
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            The principles that guide every project and decision
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {philosophies.map((philosophy, index) => (
            <FadeIn key={philosophy.title} delay={index * 100}>
              <div
                className={cn(
                  "group relative p-6 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300",
                  "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
                  activeCard === index && "border-primary/50 shadow-xl -translate-y-2 bg-primary/5"
                )}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex flex-col h-full min-h-[200px]">
                  <span className={cn(
                    "text-2xl mb-4 transition-transform duration-300",
                    activeCard === index && "scale-125"
                  )}>
                    {philosophy.icon}
                  </span>
                  
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {philosophy.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-serif font-medium mb-3">
                    {philosophy.title}
                  </h3>
                  
                  <p className={cn(
                    "text-sm text-muted-foreground leading-relaxed transition-all duration-300",
                    activeCard === index ? "opacity-100" : "opacity-70"
                  )}>
                    {philosophy.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className={cn(
                  "absolute bottom-4 right-4 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300",
                  activeCard === index && "bg-primary border-primary"
                )}>
                  <span className={cn(
                    "text-xs transition-colors duration-300",
                    activeCard === index ? "text-primary-foreground" : "text-muted-foreground"
                  )}>
                    →
                  </span>
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
