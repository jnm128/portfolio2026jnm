import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import FadeIn from './animations/FadeIn';

interface IntroBlurbProps {
  className?: string;
}

const IntroBlurb: React.FC<IntroBlurbProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-background rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-40 -mt-12', className)}>
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-8">
            <Sparkles className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            <div className="w-px h-12 bg-border/60" />
            <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-xl">
              Crafting thoughtful digital experiences that put people first.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;
