import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Link } from 'react-router-dom';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="community" className={cn('py-16 md:py-24 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <h2 className="text-[14px] text-center font-medium mb-12 uppercase tracking-wider text-muted-foreground">
            Building community
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden order-first md:order-last">
              <img 
                src="/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png"
                alt="UX Design Community"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif leading-relaxed">
                She's also building the next big ux design community
              </h3>
              <Link 
                to="/book-club"
                className="inline-flex items-center justify-center px-5 py-2 bg-foreground text-background text-sm font-medium rounded-full transition-all hover:opacity-90 active:scale-95"
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
