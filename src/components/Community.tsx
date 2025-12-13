import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="community" className={cn('py-16 md:py-24 bg-surface-5 text-surface-1', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16">
            Building community
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif leading-relaxed">
                She's also building the next big ux design community
              </h3>
              <button className="inline-flex items-center px-4 py-2 bg-surface-1 text-surface-5 text-sm font-medium rounded-full transition-colors hover:bg-surface-1/90">
                Join
              </button>
            </div>
            
            {/* Community Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png"
                alt="UX Design Community"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Community;
