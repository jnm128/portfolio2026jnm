import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BioBlurbProps {
  className?: string;
}

const BioBlurb: React.FC<BioBlurbProps> = ({ className }) => {
  return (
    <section className={cn('pt-20 pb-0 md:pt-24 md:pb-0 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col gap-4 text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 aspect-square rounded-full overflow-hidden">
              <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/eb1b0dd0-17c0-45f1-9ebe-cc16e594b15b.png" />
            </div>
            <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
              Joanna Minott is a user experience designer at CVS Health who transforms complex systems into intuitive, people-first experiences.
            </p>
            <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
              With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BioBlurb;
