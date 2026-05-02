import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';

interface CollabProps {
  className?: string;
}

const quotes = [
  {
    quote: "Joanna is an invaluable liaison between technical teams and non-technical stakeholders.",
    author: "Rynita Julien",
    role: "Senior Director IT, CSL Behring",
  },
  {
    quote: "Joanna's ability to simplify complex systems using detailed maps and flows helped lay out a complete vision for streamlining benefit administration.",
    author: "Rynita Julien",
    role: "Senior Director IT, CSL Behring",
  },
  {
    quote: "Joanna's consistency, reliability, and perseverance in complex problem solving is bolstered by her kind and empathetic nature.",
    author: "Jacob Rosmarin",
    role: "Product, Viveka Health",
  },
];

const Collab: React.FC<CollabProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = quotes[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + quotes.length) % quotes.length);
  const next = () => setActiveIndex((i) => (i + 1) % quotes.length);

  return (
    <div className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <div className="flex flex-col gap-6 items-center text-center py-12 md:py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
              Interested in collaborating?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              I'm always open to new projects and partnerships. Let's create something meaningful together.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Testimonials — 3-across grid on desktop, carousel on mobile */}
        <FadeIn delay={100}>
          <div className="mt-8 md:mt-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 text-center">
              What others say
            </p>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {quotes.map((q) => (
                <div
                  key={q.quote}
                  className="rounded-2xl bg-card p-8 border border-border flex flex-col text-left"
                >
                  <blockquote className="font-serif italic text-base lg:text-lg text-foreground leading-relaxed flex-1">
                    "{q.quote}"
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground">{q.author}</p>
                    <p className="text-xs text-hint mt-1">{q.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden">
              <div
                key={activeIndex}
                className="rounded-2xl bg-card p-6 border border-border text-left animate-fade-in"
              >
                <blockquote className="font-serif italic text-base text-foreground leading-relaxed">
                  "{current.quote}"
                </blockquote>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{current.author}</p>
                  <p className="text-xs text-hint mt-1">{current.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prev}
                  aria-label="Previous quote"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors"
                >
                  <ChevronLeft size={14} className="text-foreground/80" />
                </button>
                <div className="flex items-center gap-2">
                  {quotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to quote ${i + 1}`}
                      className={cn(
                        'w-1.5 h-1.5 rounded-full transition-colors',
                        i === activeIndex ? 'bg-foreground' : 'bg-foreground/20 hover:bg-foreground/40'
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Next quote"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors"
                >
                  <ChevronRight size={14} className="text-foreground/80" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Collab;
