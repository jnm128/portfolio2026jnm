import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PopIn from './animations/PopIn';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/luffu-hero.png"];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn('pt-20 md:pt-24 pb-6 md:pb-8 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-2">Joanna Minott, <span className="text-muted-foreground">UX Designer</span></h1>
        <p className="text-base md:text-lg text-muted-foreground font-serif mb-4 max-w-2xl">
          Product designer by day, community builder by night. I build software and digital experiences that connect people and spark meaningful change.
        </p>
        <a
          href="/joanna-minott-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mb-6"
        >
          View Resume →
        </a>
        <PopIn>
          <div className="relative rounded-3xl overflow-hidden h-[50vh] md:h-[70vh] lg:h-[80vh]">
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
            {/* Slide indicators */}
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
