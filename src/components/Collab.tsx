import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const topPills = [
  { text: 'Invaluable liaison between technical and non-technical teams.', author: 'Rynita J.' },
  { text: 'Kind, empathetic, relentless problem-solver.', author: 'Jacob R.' },
  { text: 'Simplifies complex systems with clarity.', author: 'Rynita J.' },
];

const bottomPills = [
  { text: 'A complete vision for streamlining.', author: 'Rynita J.' },
  { text: 'Consistent, reliable, perseverant.', author: 'Jacob R.' },
];

const Pill: React.FC<{ text: string; author: string }> = ({ text, author }) => (
  <div className="rounded-full border border-background/20 bg-background/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-background/85 font-sans max-w-[260px] sm:max-w-[280px]">
    <span>"{text}"</span>
    <span className="ml-2 text-background/50">— {author}</span>
  </div>
);

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <div data-theme="dark" className={cn('py-16 md:py-24 bg-foreground', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            {/* Top pills row */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
              {topPills.map((p) => (
                <Pill key={p.text} text={p.text} author={p.author} />
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background max-w-3xl">
              Got a problem worth designing through?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-background/60 font-serif leading-relaxed">
              Let's build something that makes tech more human.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>

            {/* Bottom pills row */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-14">
              {bottomPills.map((p) => (
                <Pill key={p.text} text={p.text} author={p.author} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Collab;
