import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png", "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png", "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png", "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png"];

const Hero: React.FC<HeroProps> = ({
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <section className={cn('pt-20 pb-8 md:pt-24 md:pb-12 bg-background min-h-[calc(100vh-80px)] flex flex-col', className)}>
      <div className="container mx-auto px-2 md:px-4 max-w-7xl flex-1 flex flex-col">
        {/* Hero Image Slideshow with Overlay Text */}
        <FadeIn className="flex-1 flex flex-col">
          <div className="relative rounded-3xl overflow-hidden flex-1 max-h-[80vh]">
            {heroImages.map((image, index) => <img key={image} src={image} alt={`Hero slide ${index + 1}`} className={cn("w-full h-full object-cover transition-opacity duration-1000 absolute inset-0", index === currentIndex ? "opacity-100" : "opacity-0")} />)}
            <img src={heroImages[0]} alt="Hero placeholder" className="w-full h-full object-cover invisible" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 via-50% to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug max-w-md">
                Health focused Product building grounded in clarity and emotion.
              </h1>
            </div>
            {/* Slide indicators */}
            <div className="absolute bottom-4 right-8 md:right-12 flex gap-2">
              {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={cn("w-2 h-2 rounded-full transition-all", index === currentIndex ? "bg-white" : "bg-white/40")} />)}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-6">
            <button onClick={() => window.scrollTo({
            top: window.innerHeight - 80,
            behavior: 'smooth'
          })} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        {/* About Section with Profile */}
        <FadeIn delay={200} className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Flippable Profile Image */}
            <div className="relative">
              <div 
                className={cn(
                  "relative w-full max-w-md aspect-[5/6] cursor-pointer group",
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
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-serif">Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people first experience. 


She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.

Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.</p>
              
              {/* Expertise Cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                  <span className="text-2xl md:text-3xl font-serif text-foreground">4+</span>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                  <span className="text-sm md:text-base font-medium text-foreground">Healthcare</span>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Industry Focus</p>
                </div>
                <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                  <span className="text-sm md:text-base font-medium text-foreground">B2B & B2C</span>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Mobile & Web</p>
                </div>
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
    </section>;
};
export default Hero;