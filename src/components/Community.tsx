import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Link } from 'react-router-dom';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="community"
      className={cn('py-12 md:py-20 transition-colors duration-1000', className)}
      style={{ backgroundColor: isVisible ? '#000' : '#F8F6F1' }}
    >
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn delay={100}>
          <p className={cn("text-xs uppercase tracking-widest mb-4 transition-colors duration-1000", isVisible ? "text-white/60" : "text-muted-foreground")}>Community</p>
          <div className={cn("rounded-2xl p-6 md:p-8 transition-colors duration-1000", isVisible ? "bg-white/10" : "bg-white/60")}>
            <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
              <div className="md:w-2/5 flex flex-col justify-center">
                <h3 className={cn("text-lg md:text-xl font-serif font-medium leading-relaxed mb-4 transition-colors duration-1000", isVisible ? "text-white" : "text-foreground")}>
                  She's also building the next big ux design community
                </h3>
                <p className={cn("text-sm md:text-base leading-relaxed mb-6 transition-colors duration-1000", isVisible ? "text-white/70" : "text-muted-foreground")}>
                  A space for designers to connect, share ideas, and grow together through curated conversations and resources.
                </p>
                <Link 
                  to="/book-club"
                  className={cn("text-sm font-medium transition-colors duration-1000 inline-flex items-center gap-1", isVisible ? "text-white hover:text-white/80" : "text-accent-foreground hover:text-foreground")}
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
    </section>
  );
};

export default Community;
