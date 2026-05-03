import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const topPill = { text: 'Kind, empathetic, relentless problem-solver.', author: 'Jacob R.' };

const sidePills = {
  left: { text: 'A complete vision for streamlining.', author: 'Rynita J.' },
  right: { text: 'Consistent, reliable, perseverant.', author: 'Jacob R.' },
};

const Pill: React.FC<{ text: string; author: string; floatClass?: string; floatDelay?: string }> = ({
  text,
  author,
  floatClass,
  floatDelay,
}) => (
  <div
    className={cn(
      'rounded-full bg-background/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-background/85 font-sans max-w-[260px] sm:max-w-[280px]',
      floatClass
    )}
    style={floatDelay ? { animationDelay: floatDelay } : undefined}
  >
    <span>"{text}"</span>
    <span className="ml-2 text-background/50">— {author}</span>
  </div>
);

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <div data-theme="dark" className={cn('pt-8 md:pt-12 pb-6 md:pb-8 bg-foreground', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          {/* Single top pill */}
          <FadeIn delay={0}>
            <div className="flex justify-center mb-16 md:mb-20">
              <Pill
                text={topPill.text}
                author={topPill.author}
                floatClass="animate-drift-3"
                floatDelay="0s"
              />
            </div>
          </FadeIn>

          {/* Headline + side pills row */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <FadeIn delay={150} className="hidden md:block flex-shrink-0">
              <Pill
                text={sidePills.left.text}
                author={sidePills.left.author}
                floatClass="animate-drift-1"
                floatDelay="0.4s"
              />
            </FadeIn>

            <FadeIn delay={200} className="flex-1 max-w-3xl">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background">
                  Got a problem worth designing through?
                </h2>
                <p className="mt-6 text-lg md:text-xl text-background/60 font-serif leading-relaxed">
                  Let's build something that makes tech more human.
                </p>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={250} className="hidden md:block flex-shrink-0">
              <Pill
                text={sidePills.right.text}
                author={sidePills.right.author}
                floatClass="animate-drift-2"
                floatDelay="0.8s"
              />
            </FadeIn>
          </div>

          {/* Mobile: side pills stack below */}
          <FadeIn delay={300} className="md:hidden mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              <Pill
                text={sidePills.left.text}
                author={sidePills.left.author}
                floatClass="animate-drift-1"
              />
              <Pill
                text={sidePills.right.text}
                author={sidePills.right.author}
                floatClass="animate-drift-2"
                floatDelay="0.6s"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Collab;
