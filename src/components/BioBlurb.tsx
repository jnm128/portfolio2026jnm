import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BioBlurbProps {
  className?: string;
}

const BioBlurb: React.FC<BioBlurbProps> = ({ className }) => {
  return (
    <section className={cn('pt-20 pb-8 md:pt-24 md:pb-12 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start gap-8">
            <div className="w-24 h-24 aspect-square rounded-full overflow-hidden flex-shrink-0">
              <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/eb1b0dd0-17c0-45f1-9ebe-cc16e594b15b.png" />
            </div>
            <div className="w-px h-16 bg-border/60 flex-shrink-0" />
            <div className="flex flex-col gap-4 text-left">
              <p className="text-xl text-foreground leading-relaxed font-serif">Joanna Minott is a user experience designer at CVS Health who transforms complex systems into intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.</p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 aspect-square rounded-full overflow-hidden flex-shrink-0">
                <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/a16192bc-fdaf-45c8-9788-1f5e9a9b973d.png" />
              </div>
              <div className="w-px h-10 bg-border/60 flex-shrink-0" />
            </div>
            <p className="text-base text-foreground leading-relaxed">
              Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BioBlurb;
