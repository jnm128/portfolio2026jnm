import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const pills = [
  {
    text: 'Invaluable liaison between technical and non-technical teams.',
    author: 'Rynita J.',
    position: 'top-[6%] left-[4%]',
    anim: 'animate-drift-1',
    delay: '0s',
  },
  {
    text: 'Simplifies complex systems with clarity.',
    author: 'Rynita J.',
    position: 'top-[12%] right-[5%]',
    anim: 'animate-drift-2',
    delay: '0.8s',
  },
  {
    text: 'Kind, empathetic, relentless problem-solver.',
    author: 'Jacob R.',
    position: 'top-[55%] left-[2%]',
    anim: 'animate-drift-3',
    delay: '1.6s',
  },
  {
    text: 'A complete vision for streamlining.',
    author: 'Rynita J.',
    position: 'top-[60%] right-[3%]',
    anim: 'animate-drift-1',
    delay: '2.4s',
  },
  {
    text: 'Consistent, reliable, perseverant.',
    author: 'Jacob R.',
    position: 'bottom-[4%] left-[42%]',
    anim: 'animate-drift-2',
    delay: '3.2s',
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
                  className={cn(
                    'absolute pointer-events-auto',
                    p.position,
                    p.anim
                  )}
                  style={{ animationDelay: p.delay }}
                >
                  <div className="rounded-full border border-background/20 bg-background/10 backdrop-blur-sm px-4 py-2 text-xs text-background/80 font-serif italic shadow-sm hover:bg-background/20 hover:scale-105 transition-all duration-300 max-w-[240px]">
                    "{p.text}"
                    <span className="not-italic ml-2 text-background/50">— {p.author}</span>
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
