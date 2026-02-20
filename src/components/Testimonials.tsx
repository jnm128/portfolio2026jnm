import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

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
    <section id="testimonials" className={cn('py-16 md:py-24 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <h2 className="text-[14px] text-center font-medium mb-12 uppercase tracking-wider text-muted-foreground">
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
