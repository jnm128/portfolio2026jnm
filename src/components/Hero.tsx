import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import PopIn from './animations/PopIn';
import WorkExperiencePanel from './WorkExperiencePanel';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/354aef4d-0714-40c3-9ba3-cc875ac0bc73.png"];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 300, 1);
        const container = containerRef.current;
        const wrapper = imageWrapperRef.current;
        if (container) {
          const isMd = window.innerWidth >= 768;
          const maxPad = isMd ? 64 : 32;
          const pad = maxPad * (1 - progress);
          container.style.paddingLeft = `${pad}px`;
          container.style.paddingRight = `${pad}px`;
        }
        if (wrapper) {
          const radius = 24 * (1 - progress);
          wrapper.style.borderRadius = `${radius}px`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={cn('pt-20 md:pt-24 pb-6 md:pb-8 bg-[#F8F6F1]', className)}>
      <div className="mx-auto max-w-[1600px] px-8 md:px-16">
        <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-2">Joanna Minott, <span className="text-muted-foreground">UX Designer</span></h1>
        <p className="text-base md:text-lg text-muted-foreground font-serif mb-4 max-w-2xl">
          Product designer by day, community builder by night. I build software and digital experiences that connect people and spark meaningful change.
        </p>
        <button
          onClick={() => setPanelOpen(true)}
          className="inline-flex items-center bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mb-6"
        >
          View Resume
        </button>
        <WorkExperiencePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
      </div>
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-8 md:px-16">
        <PopIn>
          <div ref={imageWrapperRef} className="relative rounded-3xl overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
            {heroImages.map((image, index) => (
              <img 
                key={image} 
                src={image} 
                alt={`Hero slide ${index + 1}`} 
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-1000 absolute inset-0", 
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )} 
              />
            ))}
            <img src={heroImages[0]} alt="Hero placeholder" className="w-full h-full object-cover invisible" />
            <div className="absolute bottom-4 right-8 md:right-12 flex gap-2">
              {heroImages.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-all", 
                    index === currentIndex ? "bg-white" : "bg-white/40"
                  )} 
                />
              ))}
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
};

export default Hero;
