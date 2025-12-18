import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Circle } from 'lucide-react';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials = [
    {
      quote: "Joanna has an incredible ability to translate complex requirements into elegant, user-friendly designs. Her work on our healthcare platform exceeded all expectations.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "HealthTech Solutions",
      initials: "SC"
    },
    {
      quote: "Working with Joanna was transformative for our product. She brought clarity to our vision and delivered designs that truly resonate with our users.",
      author: "Michael Torres",
      role: "VP of Product",
      company: "Finova",
      initials: "MT"
    },
    {
      quote: "Joanna's user-centered approach and attention to detail made all the difference. She doesn't just design—she solves real problems with empathy and precision.",
      author: "Emily Rodriguez",
      role: "Design Director",
      company: "CreativeWorks",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className={cn('py-16 md:py-24 bg-surface-3 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-10 -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-serif font-medium mb-12 flex items-center gap-3">
            <span className="relative flex items-center justify-center w-3 h-3">
              <Circle className="w-3 h-3 fill-current relative z-10" />
              <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
            </span>
            What's it like working with Joanna?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-6 space-y-4 h-full">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">{testimonial.initials}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{testimonial.author}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</span>
                  </div>
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
