import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="community" className={cn('py-16 md:py-24 bg-surface-6 text-surface-1 relative z-[1] -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-serif font-medium mb-12 flex items-center gap-3">
            <span className="relative flex items-center justify-center w-3 h-3">
              <Circle className="w-3 h-3 fill-current relative z-10" />
              <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
            </span>
            Building community
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Community Image - appears on top on mobile */}
            <div className="relative rounded-3xl overflow-hidden order-first md:order-last">
              <img 
                src="/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png"
                alt="UX Design Community"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif leading-relaxed">
                She's also building the next big ux design community
              </h3>
              <Link 
                to="/book-club"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-surface-1 text-surface-6 text-sm font-medium rounded-full transition-all hover:bg-surface-1/90 active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Community;
