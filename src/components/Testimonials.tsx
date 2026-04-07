import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    quote: "Joanna is an invaluable liaison between technical teams and non-technical stakeholders.",
    author: "Rynita Julien",
    role: "Senior Director IT",
    company: "CSL Behring",
    initials: "RJ",
  },
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
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  return (
    <div id="testimonials" className={cn('pt-12 pb-12 md:pt-20 md:pb-20', className)}>
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        {/* Section Label + Arrows */}
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xs uppercase tracking-widest text-white/60">In Their Words</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={16} className="text-white/80" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={16} className="text-white/80" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Rotating Quote */}
        <FadeIn delay={100}>
          <div className="mb-16 md:mb-20">
            <blockquote
              key={activeIndex}
              className="font-serif text-3xl md:text-5xl leading-tight text-[#F8F6F1] mb-8 animate-fade-in"
            >
              "{current.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm text-white/80 font-medium">
                  {current.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{current.author}</p>
                  <p className="text-xs text-white/60">{current.role}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Testimonials;
