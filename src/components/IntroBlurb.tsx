import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface IntroBlurbProps {
  className?: string;
}

const IntroBlurb: React.FC<IntroBlurbProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [credentialsExpanded, setCredentialsExpanded] = useState(false);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (chipsRef.current) {
      observer.observe(chipsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    "CVS Health",
    "Viveka Health",
    "Nitelyfe",
    "Synchronyx",
    "The Adrianne Arsht Center"
  ];

  return (
    <section className={cn('py-8 md:py-16 bg-background rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-40 -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <FadeIn>
          {/* Observer marker - always visible */}
          <div ref={chipsRef} className="h-0 w-0" aria-hidden="true" />
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start gap-8">
            <div className="w-24 h-24 aspect-square rounded-full overflow-hidden flex-shrink-0">
              <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/d4672c8b-3f01-49ed-87bd-6ff86c784c77.png" />
            </div>
            <div className="w-px h-16 bg-border/60 flex-shrink-0" />
            <div className="flex flex-col gap-4 text-left">
              <p className="text-xl text-foreground font-serif leading-relaxed">
                Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '0ms' }}>
                  Currently designing for CVS Health
                </span>
                <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '100ms' }}>
                  4+ Years Experience
                </span>
                <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '200ms' }}>
                  Healthcare & Enterprise
                </span>
                <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '300ms' }}>
                  B2B & B2C
                </span>
                <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '400ms' }}>
                  Mobile & Web
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Profile + Credentials Row - Above Text */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 aspect-square rounded-full overflow-hidden flex-shrink-0">
                  <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/d4672c8b-3f01-49ed-87bd-6ff86c784c77.png" />
                </div>
                <div className="w-px h-10 bg-border/60 flex-shrink-0" />
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={cn("bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground", !isVisible && "opacity-0", isVisible && "animate-slide-in-left")} style={{ animationDelay: '0ms' }}>
                    Currently designing for CVS Health
                  </span>
                  <button 
                    onClick={() => setCredentialsExpanded(!credentialsExpanded)}
                    className={cn(
                      "bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground transition-colors",
                      !isVisible && "opacity-0",
                      isVisible && "animate-slide-in-left",
                      credentialsExpanded && "bg-secondary/80"
                    )}
                    style={{ animationDelay: '100ms' }}
                  >
                    {credentialsExpanded ? 'View less' : 'View more'}
                  </button>
                </div>
              </div>
              
              {/* Expandable Credentials */}
              {credentialsExpanded && (
                <div className="flex flex-wrap gap-2 pl-[76px] animate-fade-in">
                  <span className="bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground">
                    4+ Years Experience
                  </span>
                  <span className="bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground">
                    Healthcare & Enterprise
                  </span>
                  <span className="bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground">
                    B2B & B2C
                  </span>
                  <span className="bg-secondary/60 rounded-full px-3 py-1 text-xs text-foreground">
                    Mobile & Web
                  </span>
                </div>
              )}
            </div>
            
            {/* Bio Text - Below */}
            <p className="text-base text-foreground font-serif leading-relaxed">
              Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences. With a focus on healthcare and enterprise solutions, she crafts designs that balance business goals with genuine user needs.
            </p>
          </div>
        </FadeIn>

        {/* Trusted By Marquee */}
        <FadeIn delay={100}>
          <div className="mt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Trusted by</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                  <span 
                    key={index} 
                    className="text-lg md:text-xl font-serif text-foreground/70 px-8"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;