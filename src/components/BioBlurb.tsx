import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BioBlurbProps {
  className?: string;
}

const BioBlurb: React.FC<BioBlurbProps> = ({ className }) => {
  return (
    <section className={cn('pt-20 pb-0 md:pt-24 md:pb-0 bg-background', className)}>
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="flex items-start gap-4 text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full overflow-hidden flex-shrink-0">
              <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/eb1b0dd0-17c0-45f1-9ebe-cc16e594b15b.png" />
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
                Product designer by day, community builder by night
              </p>
              <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
                I build software and digital experiences that feel more human.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BioBlurb;
