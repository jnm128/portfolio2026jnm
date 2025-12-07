import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-28 bg-background', className)}>
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16">
            What's like working with Joanna?
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium">Thoughtful Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project begins with deep understanding. I take time to truly comprehend your vision, your audience, and the problems we're solving together.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium">Collaborative Spirit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Design is a conversation. I believe in working alongside my clients, ensuring every decision reflects both strategic thinking and creative intuition.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium">Emotional Depth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Great design moves people. I focus on creating experiences that resonate emotionally and build lasting connections with audiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium">Results Driven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful design should also perform. I measure success not just by aesthetics, but by the tangible outcomes we achieve together.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
