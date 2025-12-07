import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('pt-28 pb-16 md:pt-36 md:pb-24 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Hero Image with Overlay Text */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden mb-16">
            <img 
              src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png"
              alt="Sunset over mountains"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug max-w-md">
                Health focused Product building grounded in clarity and emotion.
              </h1>
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
