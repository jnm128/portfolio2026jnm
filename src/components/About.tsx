import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const [isHeadshotFlipped, setIsHeadshotFlipped] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  // Auto-wiggle headshot on load to signal interactivity
  useEffect(() => {
    const wiggleTimer = setTimeout(() => {
      setIsWiggling(true);
    }, 1000);

    const stopWiggleTimer = setTimeout(() => {
      setIsWiggling(false);
    }, 2000);

    return () => {
      clearTimeout(wiggleTimer);
      clearTimeout(stopWiggleTimer);
    };
  }, []);

  return (
    <section id="about" className={cn('py-16 md:py-24 bg-surface-2 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-20 -mt-12', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-serif font-medium mb-4">
            About
          </h2>
          <div 
            className="border-b border-foreground mb-12" 
            data-section-divider
            aria-hidden="true"
            role="presentation"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Flippable Profile Image */}
            <div className="relative">
              <div 
                className={cn(
                  "relative w-full max-w-lg aspect-[5/6] cursor-pointer group",
                  isWiggling && "animate-wiggle"
                )}
                onClick={() => setIsHeadshotFlipped(!isHeadshotFlipped)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isHeadshotFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front - Work */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img 
                      alt="Joanna Minott - Work" 
                      className="w-full h-full object-cover" 
                      src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full font-medium">
                        Work Mode
                      </span>
                      <span className="bg-background/90 backdrop-blur-sm text-muted-foreground text-xs px-3 py-1.5 rounded-full">
                        Click to flip →
                      </span>
                    </div>
                  </div>
                  
                  {/* Back - Fun */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <img 
                      alt="Joanna Minott - Fun" 
                      className="w-full h-full object-cover" 
                      src="/lovable-uploads/5a9395ab-beb1-4008-81f7-f0981a3ef0bd.png" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full font-medium">
                        Fun Mode
                      </span>
                      <span className="bg-background/90 backdrop-blur-sm text-muted-foreground text-xs px-3 py-1.5 rounded-full">
                        ← Click to flip
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.
              </p>
              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-secondary/50 rounded-full px-4 py-2 text-sm text-foreground">4+ Years</span>
                <span className="bg-secondary/50 rounded-full px-4 py-2 text-sm text-foreground">Healthcare</span>
                <span className="bg-secondary/50 rounded-full px-4 py-2 text-sm text-foreground">B2B & B2C</span>
                <span className="bg-secondary/50 rounded-full px-4 py-2 text-sm text-foreground">Mobile & Web</span>
                <span className="bg-secondary/50 rounded-full px-4 py-2 text-sm text-foreground">Enterprise Systems</span>
              </div>

              <button onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  window.scrollTo({
                    top: contact.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }} className="pill-tag self-start">
                Connect
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
