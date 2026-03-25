import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface IntroBlurbProps {
  className?: string;
}

const IntroBlurb: React.FC<IntroBlurbProps> = ({ className }) => {
  const logos: { src: string; alt: string; height?: string }[] = [
    { src: "/logos/cvs-health.png?v=2", alt: "CVS Health", height: "h-3 md:h-4" },
    { src: "/logos/viveka.png?v=2", alt: "Viveka Health" },
    { src: "/logos/csl-behring.png", alt: "CSL Behring", height: "h-6 md:h-8" },
    { src: "/logos/synchronyx.png", alt: "Synchronyx", height: "h-4 md:h-5" },
    { src: "/logos/arsht-center.png", alt: "Adrienne Arsht Center" },
  ];

  return (
    <section className={cn('py-12 md:py-16 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div>
            <p className="text-[14px] text-center font-medium mb-6 uppercase tracking-wider text-muted-foreground">
              Trusted by teams building the next frontier.
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-fast md:animate-marquee whitespace-nowrap items-center">
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className={cn(logo.height || "h-6 md:h-8", "w-auto px-6 md:px-12 object-contain grayscale brightness-0 opacity-60")}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroBlurb;
