import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface TestimonialsProps {
  className?: string;
}

const heroTestimonial = {
  quote: "Joanna is an invaluable liaison between technical teams and non-technical stakeholders.",
  author: "Rynita Julien",
  role: "Senior Director IT",
  company: "CSL Behring",
  initials: "RJ",
};

const cardTestimonials = [
  {
    quote: "Joanna's ability to simplify complex systems using intricately detailed maps, flows, and artifacts assisted our team in laying out a complete vision for how we would streamline benefit administration.",
    author: "Rynita Julien",
    role: "Senior Director IT",
    company: "CSL Behring",
    initials: "RJ",
  },
  {
    quote: "Joanna's consistency, reliability, and perseverance in the face of complex problem solving is bolstered by her kind and empathetic nature. I would happily recommend her for any role.",
    author: "Jacob Rosmarin",
    role: "Product, Viveka Health",
    company: "Viveka Health",
    initials: "JP",
  },
  {
    quote: "Joanna is a genuine asset to any organization. Her blend of expertise, dedication, and collaborative spirit is rare, and I am confident she will continue to achieve great success.",
    author: "Collaborator",
    role: "Add name + role",
    company: "CVS Health",
    initials: "—",
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {

  return (
    <div id="testimonials" className={cn('pt-12 pb-12 md:pt-20 md:pb-20', className)}>
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        {/* Section Label */}
        <FadeIn>
          <h2 className="text-xs uppercase tracking-widest text-white/60 mb-10">In Their Words</h2>
        </FadeIn>

        {/* Hero Pull Quote */}
        <FadeIn delay={100}>
          <div className="mb-16 md:mb-20">
            <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-[#F8F6F1] mb-8">
              "{heroTestimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm text-white/80 font-medium">
                  {heroTestimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{heroTestimonial.author}</p>
                  <p className="text-xs text-white/60">{heroTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Subheading + Arrows */}
        <FadeIn delay={200}>
          <div className="mb-8">
            <h3 className="text-base text-white/80">More from collaborators</h3>
          </div>
        </FadeIn>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cardTestimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 150} duration={500}>
              <div className="rounded-2xl p-6 h-full flex flex-col justify-between gap-6 bg-[#F8F6F1]">
                <p className="text-sm leading-relaxed text-foreground/80 font-serif">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground/70">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
