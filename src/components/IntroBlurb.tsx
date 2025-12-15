import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import FadeIn from './animations/FadeIn';

interface IntroBlurbProps {
  className?: string;
}

const IntroBlurb: React.FC<IntroBlurbProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <div className="flex items-center justify-end gap-4">
            <Sparkles className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-lg md:text-xl text-muted-foreground font-serif text-right max-w-xl">
              Crafting thoughtful digital experiences that put people first.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;
