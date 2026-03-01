import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import PopIn from './animations/PopIn';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/luffu-hero.png"];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
          const maxPad = isMd ? 40 : 24;
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
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-2">Joanna Minott, <span className="text-muted-foreground">UX Designer</span></h1>
        <p className="text-base md:text-lg text-muted-foreground font-serif mb-4 max-w-2xl">
          Product designer by day, community builder by night. I build software and digital experiences that connect people and spark meaningful change.
        </p>
        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mb-6">
              View Work Experience →
            </button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg bg-[#F8F6F1] overflow-y-auto">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-2xl font-serif text-foreground">Joanna Minott</SheetTitle>
              <p className="text-muted-foreground font-serif text-sm">UX Designer, Miami, FL</p>
              <p className="text-muted-foreground font-serif text-sm">joannaminott.com</p>
            </SheetHeader>

            <div className="space-y-12 px-1">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-5">Work Experience</h3>
                <div className="space-y-6">
                  {[
                    { period: '2024 — Now', title: 'UX Designer at CVS Health', location: 'Remote' },
                    { period: '2024 — Now', title: 'Freelance UX Designer', location: 'Remote' },
                    { period: '2023 — 2024', title: 'Product Designer at Viveka Health', location: 'Miami, FL' },
                    { period: '2023 — 2023', title: 'Product Designer at Adriene Arsht Center', location: 'Miami, FL' },
                    { period: '2022 — 2022', title: 'Web Designer at CSL Behring', location: 'Remote' },
                    { period: '2021 — 2021', title: 'UX Designer at The Gordon Center for Simulation and Innovation in Medical Education', location: 'Miami, FL' },
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-[120px_1fr] gap-3">
                      <span className="text-xs text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                      <div>
                        <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                        <p className="text-xs text-muted-foreground font-serif">{item.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-5">Education</h3>
                <div className="space-y-6">
                  {[
                    { period: '2022 — 2024', title: 'Masters in Fine Arts Interactive Media at The University of Miami', location: 'Miami, FL' },
                    { period: '2018 — 2022', title: 'Bachelors in Arts Computer Science at The University of Miami', location: 'Miami, FL' },
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-[120px_1fr] gap-3">
                      <span className="text-xs text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                      <div>
                        <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                        <p className="text-xs text-muted-foreground font-serif">{item.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <PopIn>
          <div ref={imageWrapperRef} className="relative rounded-3xl overflow-hidden h-[50vh] md:h-[70vh] lg:h-[80vh]">
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
