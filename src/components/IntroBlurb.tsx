import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
interface IntroBlurbProps {
  className?: string;
}
const IntroBlurb: React.FC<IntroBlurbProps> = ({
  className
}) => {
  return <section className={cn('py-12 md:py-16 bg-background rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-40 -mt-12', className)}>
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="flex items-start gap-6 md:gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 aspect-square rounded-full overflow-hidden flex-shrink-0">
              <img alt="Joanna Minott" className="w-full h-full object-cover object-top scale-[1.3] origin-top" src="/lovable-uploads/d4672c8b-3f01-49ed-87bd-6ff86c784c77.png" />
            </div>
            <div className="w-px h-16 bg-border/60 flex-shrink-0" />
            <div className="flex flex-col gap-3">
              <p className="text-base md:text-lg text-muted-foreground font-serif">
                Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
              </p>
              <span className="bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground w-fit">
                Currently designing for CVS Health
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>;
};
export default IntroBlurb;