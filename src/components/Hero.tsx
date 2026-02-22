import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PopIn from './animations/PopIn';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png", "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png", "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png", "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png"];

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
        <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Joanna Minott, <span className="text-muted-foreground">UX Designer</span></h1>
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
            {/* Bio overlay card */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#F8F6F1]/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 aspect-square rounded-full overflow-hidden flex-shrink-0">
                  <img alt="Joanna Minott" className="w-full h-full object-contain" src="/lovable-uploads/eb1b0dd0-17c0-45f1-9ebe-cc16e594b15b.png" />
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed font-serif">
                  Product designer by day, community builder by night
                </p>
              </div>
            </div>
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
