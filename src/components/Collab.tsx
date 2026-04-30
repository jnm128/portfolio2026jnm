import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <div className={cn('py-16 md:py-24', className)}>
      {/* rebuild trigger */}
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col gap-6 items-center text-center py-12 md:py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background">
              Interested in collaborating?
            </h2>
            <p className="text-lg md:text-xl text-background/70 font-serif leading-relaxed">
              I'm always open to new projects and partnerships. Let's create something meaningful together.
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
