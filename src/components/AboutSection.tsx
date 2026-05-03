import React, { useEffect, useState } from 'react';
import FadeIn from './animations/FadeIn';

const rotatingWords = ['Intention', 'Research', 'Focus'];

const designPhilosophy = [
  { numeral: "I", title: "User-Centered", description: "Every design decision starts with understanding the user — through research, empathy, and testing." },
  { numeral: "II", title: "Purposeful", description: "Design should solve problems, not just look beautiful. Each element earns its place." },
  { numeral: "III", title: "Iterative", description: "Great design emerges through iteration — embracing feedback and refining until it resonates." },
];

const AboutSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" data-theme="dark" className="min-h-screen flex items-center pt-24 md:pt-40 pb-12 md:pb-16 bg-foreground">
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column — Title & Helper Text */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-background mb-4">
                Design, Tech &amp;{' '}
                <span
                  key={rotatingWords[wordIndex]}
                  className="inline-block animate-fade-in italic text-background/90"
                >
                  {rotatingWords[wordIndex]}
                </span>
              </h2>
              <p className="text-base md:text-lg text-background/70 font-serif">
                Our process is rooted in research — blending user insights, business goals, and thoughtful craft to create digital experiences that feel intuitive and look exceptional.
              </p>
            </FadeIn>
          </div>

          {/* Right Column — Design Philosophy */}
          <div className="space-y-12">
            <FadeIn delay={100}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-background/50 mb-6">Design Philosophy</h3>
              <ul className="space-y-0">
                {designPhilosophy.map((p, i) => (
                  <li
                    key={p.title}
                    className={`py-10 md:py-12 ${i === 0 ? 'border-t border-background/15' : ''} ${i !== designPhilosophy.length - 1 ? 'border-b border-background/15' : ''}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-serif italic text-background/50 tracking-wider w-8 shrink-0">{p.numeral}</span>
                      <div>
                        <p className="text-lg font-serif text-background">{p.title}</p>
                        <p className="text-sm text-background/70 font-serif mt-1">{p.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

