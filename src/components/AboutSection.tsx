import React from 'react';
import FadeIn from './animations/FadeIn';

const steps = [
  {
    number: '01',
    accentWord: 'Discover',
    titleRest: ' & define',
    body:
      "I start by listening — to users, stakeholders, and the data. Research isn't a phase, it's a posture. I map the real problem before touching a frame.",
    tags: ['User interviews', 'Journey mapping', 'Heuristics'],
  },
  {
    number: '02',
    accentWord: 'Design',
    titleRest: ' & validate',
    body:
      'I design iteratively — low-fi to high-fi, always pressure-testing with real users. Decisions earn their place through evidence, not instinct alone.',
    tags: ['Wireframes', 'Prototyping', 'Usability testing'],
  },
  {
    number: '03',
    accentWord: 'Deliver',
    titleRest: ' & measure',
    body:
      "Design doesn't end at handoff. I work closely with engineers, track outcomes post-launch, and iterate until the metrics say it's working.",
    tags: ['Design systems', 'Dev handoff', 'Impact tracking'],
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      data-theme="light"
      className="bg-background py-20 px-5 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <FadeIn>
          {/* Eyebrow */}
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-hint mb-5">
            How I work
          </p>

          {/* Header row */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end pb-8 mb-16 border-b border-border">
            <h2 className="font-sans font-bold text-[40px] leading-[1.1] text-foreground">
              Design rooted in
              <br />
              research &amp; intention
            </h2>
            <p className="text-sm leading-[1.75] text-muted-foreground max-w-[320px] md:justify-self-end">
              Every project starts with understanding — the user, the system, the stakes. I don't just make things look good. I make them work better for the people who depend on them.
            </p>
          </div>
        </FadeIn>

        {/* Step grid */}
        <div className="grid md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 80}>
              <div
                className={[
                  'border-t border-border p-8 h-full',
                  i > 0 ? 'md:border-l md:border-border' : '',
                ].join(' ')}
              >
                {/* Step row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-hint">
                    {step.number}
                  </span>
                  <span className="h-px w-8 bg-border" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-foreground mb-4 leading-snug">
                  <span className="font-normal text-accent">{step.accentWord}</span>
                  {step.titleRest}
                </h3>

                {/* Body */}
                <p className="text-[13px] leading-[1.7] text-muted-foreground mb-6">
                  {step.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex bg-card text-hint text-[10px] font-medium tracking-[0.07em] uppercase rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
