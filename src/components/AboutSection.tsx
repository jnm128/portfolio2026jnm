import React from 'react';
import FadeIn from './animations/FadeIn';

const designPhilosophy = [
  { title: "User-Centered", description: "Every design decision starts with understanding the user — through research, empathy, and testing." },
  { title: "Purposeful", description: "Design should solve problems, not just look beautiful. Each element earns its place." },
  { title: "Iterative", description: "Great design emerges through iteration — embracing feedback and refining until it resonates." },
  { title: "Collaborative", description: "The best work happens together, with transparent communication and shared ownership." },
];
const skills = ["User Research", "Information Architecture", "Interaction Design", "Prototyping", "Design Systems", "Usability Testing", "Accessibility (WCAG)", "Workshop Facilitation", "Design Strategy"];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-12 md:pt-20 md:pb-20 bg-background">
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column — Title & Helper Text */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
                Design, Tech & Intention
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-serif">
                Our process is rooted in research — blending user insights, business goals, and thoughtful craft to create digital experiences that feel intuitive and look exceptional.
              </p>
            </FadeIn>
          </div>

          {/* Right Column — Services & Skills */}
          <div className="space-y-12">
            <FadeIn delay={100}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Design Philosophy</h3>
              <ul className="space-y-0">
                {designPhilosophy.map((p, i) => (
                  <li
                    key={p.title}
                    className={`py-5 border-b border-border ${i === 0 ? 'border-t' : ''}`}
                  >
                    <p className="text-lg font-serif text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground font-serif mt-1">{p.description}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={200}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Skills</h3>
              <p className="text-base md:text-lg font-serif text-foreground leading-relaxed">
                {skills.join(' • ')}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
