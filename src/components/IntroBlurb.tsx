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
    <section className={cn('py-4 md:py-6 bg-background', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-fast md:animate-marquee whitespace-nowrap items-center">
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    role="img"
                    aria-label={logo.alt}
                    className={cn(
                      logo.height || "h-6 md:h-8",
                      "w-24 md:w-32 mx-6 md:mx-12 bg-hint opacity-80 shrink-0"
                    )}
                    style={{
                      WebkitMaskImage: `url(${logo.src})`,
                      maskImage: `url(${logo.src})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
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
