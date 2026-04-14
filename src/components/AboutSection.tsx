import React from 'react';
import FadeIn from './animations/FadeIn';

const services = ["UX/UI Design", "Web Design", "Brand Identity", "UX Audits"];
const skills = ["Figma", "Prototyping", "User Research", "Design Systems", "HTML/CSS", "React"];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="<section id="about" className="pt-12 pb-12 md:pt-20 md:pb-20 bg-[#F8F6F1]"> bg-[#F8F6F1]">
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
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((s) => (
                  <li key={s} className="text-lg font-serif text-foreground border-b border-border pb-3">
                    {s}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={200}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
