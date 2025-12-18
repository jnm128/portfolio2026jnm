import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

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
  const [isOpen, setIsOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

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

  return (
    <section id="philosophy" className={cn('py-16 md:py-24 bg-surface-4 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-[5] -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <FadeIn>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between cursor-pointer group">
                <h2 className="text-xl md:text-2xl font-serif font-medium flex items-center gap-3">
                  <PulsingCircle />
                  Design Philosophy
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-sm">{isOpen ? 'Click to hide' : 'Click to reveal'}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )} />
                </div>
              </div>
            </CollapsibleTrigger>
          </FadeIn>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
