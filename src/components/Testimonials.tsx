import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials = [
    {
      quote: "Joanna Minott is a creative director specializing in brand identity and visual storytelling. Her work emerges intuitively with emotional depth to create meaningful connections between brands and audiences.",
      author: "Joanna Minott",
    },
    {
      quote: "Joanna Minott is a creative director specializing in brand identity and visual storytelling. Her work emerges intuitively with emotional depth to create meaningful connections between brands and audiences.",
      author: "Joanna Minott",
    },
    {
      quote: "Joanna Minott is a creative director specializing in brand identity and visual storytelling. Her work emerges intuitively with emotional depth to create meaningful connections between brands and audiences.",
      author: "Joanna Minott",
    }
  ];

  return (
    <section id="testimonials" className={cn('py-16 md:py-24 bg-surface-3 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-10 -mt-12', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            What's it like working with Joanna?
          </h2>
          <div className="border-b border-border/40 mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <span className="text-sm font-medium">{testimonial.author}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
