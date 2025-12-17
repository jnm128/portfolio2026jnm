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
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/joanna-profile.jpg" 
                alt="Joanna Minott"
                className="w-full h-full object-cover object-top scale-[2.2] translate-y-[35%]"
              />
            </div>
            <div className="w-px h-12 bg-border/60" />
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-serif max-w-4xl">
              Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;
