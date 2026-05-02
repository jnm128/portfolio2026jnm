import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const pills = [
  // Top row (3)
  {
    text: 'Invaluable liaison between technical and non-technical teams.',
    author: 'Rynita J.',
    position: 'top-[4%] left-[4%]',
    hoverAnim: 'hover:animate-drift-1',
  },
  {
    text: 'Kind, empathetic, relentless problem-solver.',
    author: 'Jacob R.',
    position: 'top-[2%] left-1/2 -translate-x-1/2',
    hoverAnim: 'hover:animate-drift-3',
  },
  {
    text: 'Simplifies complex systems with clarity.',
    author: 'Rynita J.',
    position: 'top-[4%] right-[4%]',
    hoverAnim: 'hover:animate-drift-2',
  },
  // Bottom row (2)
  {
    text: 'A complete vision for streamlining.',
    author: 'Rynita J.',
    position: 'bottom-[4%] left-[10%]',
    hoverAnim: 'hover:animate-drift-2',
  },
  {
    text: 'Consistent, reliable, perseverant.',
    author: 'Jacob R.',
    position: 'bottom-[4%] right-[10%]',
    hoverAnim: 'hover:animate-drift-1',
  },
];

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <div data-theme="dark" className={cn('py-16 md:py-24 bg-foreground', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="relative flex flex-col gap-6 items-center text-center py-12 md:py-20">
            {/* Floating testimonial pills */}
            <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
              {pills.map((p) => (
                <div
                  key={p.text}
                  className={cn('absolute pointer-events-auto', p.position, p.hoverAnim)}
                >
                  <div className="rounded-full border border-background bg-background px-4 py-2 text-xs text-foreground font-serif italic shadow-sm hover:shadow-md transition-shadow duration-300 max-w-[260px]">
                    "{p.text}"
                    <span className="not-italic ml-2 text-muted-foreground">— {p.author}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background">
              Got a problem worth designing through?
            </h2>
            <p className="relative text-lg md:text-xl text-background/60 font-serif leading-relaxed">
              Let's build something that makes tech more human.
            </p>
            <div className="relative mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Collab;
