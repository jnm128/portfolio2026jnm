import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <div data-theme="dark" className={cn('py-16 md:py-24 bg-foreground', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col gap-6 items-center text-center py-12 md:py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background">
              Got a problem worth designing through?
            </h2>
            <p className="text-lg md:text-xl text-background/60 font-serif leading-relaxed">
              Let's build something that makes tech more human.
            </p>
            <div className="mt-4">
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
