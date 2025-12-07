import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const heroImages = [
  "/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png",
  "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png",
  "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
  "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn('pt-28 pb-16 md:pt-36 md:pb-24 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Hero Image Slideshow with Overlay Text */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden mb-16">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Hero slide ${index + 1}`}
                className={cn(
                  "w-full aspect-[4/3] object-cover transition-opacity duration-1000 absolute inset-0",
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
            <img
              src={heroImages[0]}
              alt="Hero placeholder"
              className="w-full aspect-[4/3] object-cover invisible"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug max-w-md">
                Health focused Product building grounded in clarity and emotion.
              </h1>
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
        </FadeIn>

        {/* About Section with Profile */}
        <FadeIn delay={200}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/386cbd65-beb9-499d-b28b-fbc8f39e12ba.png"
                alt="Joanna Minott"
                className="w-full max-w-sm rounded-3xl object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Bio Text */}
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-serif">
                Joanna Minott is a creative director specializing in brand identity and visual storytelling. Her work emerges intuitively with emotional depth to create meaningful connections between brands and audiences.
              </p>
              <button 
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    window.scrollTo({ top: contact.offsetTop - 80, behavior: 'smooth' });
                  }
                }}
                className="pill-tag self-start"
              >
                Connect
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
