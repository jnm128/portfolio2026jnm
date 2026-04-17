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
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="bg-[#F8F6F1] rounded-2xl px-8 py-16 md:py-20 w-full">
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                Interested in collaborating?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                I'm always open to new projects and partnerships. Let's create something meaningful together.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Collab;
