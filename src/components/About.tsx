import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle } from 'lucide-react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-16 md:py-24 bg-surface-2 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-20 -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-serif font-medium mb-12 flex items-center gap-3">
            <span className="relative flex items-center justify-center w-3 h-3">
              <Circle className="w-3 h-3 fill-current relative z-10" />
              <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
            </span>
            About
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Profile Image */}
            <div className="relative w-full max-w-lg aspect-[5/6]">
              <div className="rounded-3xl overflow-hidden h-full">
                <img 
                  alt="Joanna Minott" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg" 
                />
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="flex flex-col justify-center">
              <p className="text-base md:text-xl text-foreground leading-relaxed mb-6">
                Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
              </p>
              <p className="text-base md:text-xl text-foreground leading-relaxed mb-6">
                She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.
              </p>
              <p className="text-base md:text-xl text-foreground leading-relaxed mb-6">
                Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.
              </p>
              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">4+ Years</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">Healthcare</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">B2B & B2C</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">Mobile & Web</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">Enterprise Systems</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">Based in Miami, FL</span>
                <span className="bg-surface-3/60 rounded-full px-3 py-1 text-xs text-foreground/70">Remote</span>
              </div>

              <a 
                href="https://www.linkedin.com/in/joannaminott"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-tag self-start transition-transform active:scale-95"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
