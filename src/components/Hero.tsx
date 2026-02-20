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
    <section className={cn('py-8 md:py-12 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        {/* Hero Image Slideshow with Overlay Text */}
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
