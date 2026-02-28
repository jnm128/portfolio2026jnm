import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Link } from 'react-router-dom';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <div id="community" className={cn('py-12 md:py-20', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn delay={100}>
          <p className="text-xs uppercase tracking-widest mb-4 text-white/60">Community</p>
          <div className="rounded-2xl p-6 md:p-8 bg-[#F8F6F1]">
            <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
              <div className="md:w-2/5 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-serif font-medium leading-relaxed mb-4 text-foreground">
                  She's also building the next big ux design community
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6 text-muted-foreground">
                  A space for designers to connect, share ideas, and grow together through curated conversations and resources.
                </p>
                <Link 
                  to="/book-club"
                  className="text-sm font-medium text-accent-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  Learn More →
                </Link>
              </div>
              <div className="md:w-3/5">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png"
                    alt="UX Design Community"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Community;
