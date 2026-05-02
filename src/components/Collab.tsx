import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const Collab: React.FC<CollabProps> = ({ className }) => {
  return (
    <section
      data-theme="dark"
      className={cn(
        'dark relative overflow-hidden py-20 px-5 md:px-12',
        'bg-[linear-gradient(135deg,#1F1813_0%,#141C24_50%,#130F0C_100%)]',
        className,
      )}
    >
      {/* Decorative circles */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[60px] -top-[60px] w-[280px] h-[280px] rounded-full border border-border opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20px] -top-[20px] w-[180px] h-[180px] rounded-full border border-border opacity-40"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left column */}
        <FadeIn>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-border mb-4">
            Let's collaborate
          </p>
          <h2 className="font-sans font-bold text-[40px] leading-[1.1] text-foreground">
            Got a problem worth
            <br />
            <span className="font-normal text-accent">designing through?</span>
          </h2>
          <p className="text-sm leading-[1.7] text-muted-foreground max-w-[420px] mt-6">
            I'm open to healthcare UX, product design, and community-driven projects. Let's build something that actually helps people.
          </p>
        </FadeIn>

        {/* Right column */}
        <FadeIn delay={100}>
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[13px] font-semibold text-foreground bg-[hsl(209_24%_41%)] hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Collab;
