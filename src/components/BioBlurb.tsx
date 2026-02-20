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
            <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
              Joanna Minott, Product designer
            </p>
            <p className="text-base md:text-xl text-foreground leading-relaxed font-serif">
              I build software and digital experiences that feel more human.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BioBlurb;
