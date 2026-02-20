import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <section className={cn('py-24 md:py-32 bg-surface-6 text-surface-1', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              Interested in collaborating?
            </h2>
            <p className="text-lg md:text-xl text-surface-1/70 leading-relaxed">
              I'm always open to new projects and partnerships. Let's create something meaningful together.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-surface-1 text-surface-6 font-medium hover:bg-surface-1/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Collab;
