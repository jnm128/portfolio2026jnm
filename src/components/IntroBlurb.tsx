import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface IntroBlurbProps {
  className?: string;
}

const IntroBlurb: React.FC<IntroBlurbProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-background rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-40 -mt-12', className)}>
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-6 md:gap-8">
            <img 
              src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg" 
              alt="Joanna Minott"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="w-px h-12 bg-border/60" />
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-serif max-w-2xl">
              Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;
