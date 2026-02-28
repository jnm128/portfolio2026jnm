import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      title: "Transforming complex into elegant",
      quote: "Joanna has an incredible ability to translate complex requirements into elegant, user-friendly designs. Her work on our healthcare platform exceeded all expectations.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "HealthTech Solutions",
      initials: "SC"
    },
    {
      title: "Clarity meets vision",
      quote: "Working with Joanna was transformative for our product. She brought clarity to our vision and delivered designs that truly resonate with our users.",
      author: "Michael Torres",
      role: "VP of Product",
      company: "Finova",
      initials: "MT"
    },
    {
      title: "Empathy-driven problem solving",
      quote: "Joanna's user-centered approach and attention to detail made all the difference. She doesn't just design—she solves real problems with empathy and precision.",
      author: "Emily Rodriguez",
      role: "Design Director",
      company: "CreativeWorks",
      initials: "ER"
    },
    {
      title: "A true design partner",
      quote: "Joanna didn't just deliver mockups — she became a strategic partner who shaped how we think about our users and product experience.",
      author: "David Park",
      role: "CTO",
      company: "Synchronyx",
      initials: "DP"
    },
    {
      title: "Speed without compromise",
      quote: "She moves fast without sacrificing quality. Every iteration felt more refined, and she always kept the user at the center of every decision.",
      author: "Laura Kim",
      role: "Head of Design",
      company: "Viveka Health",
      initials: "LK"
    },
    {
      title: "Beyond expectations",
      quote: "Joanna exceeded every expectation we had. Her ability to balance business goals with user needs is rare and invaluable.",
      author: "James Wright",
      role: "Founder",
      company: "NightOwl",
      initials: "JW"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={cn('py-12 md:py-20 transition-colors duration-1000', className)}
      style={{ backgroundColor: isVisible ? '#000' : '#F8F6F1' }}
    >
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <FadeIn>
          <p className={cn("text-xs uppercase tracking-widest text-center mb-3 transition-colors duration-1000", isVisible ? "text-white/60" : "text-muted-foreground")}>Kind Words</p>
          <h2 className={cn("text-2xl md:text-3xl text-center font-serif mb-8 transition-colors duration-1000", isVisible ? "text-white" : "text-foreground")}>
            Bringing people and ideas together at scale
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <FadeIn key={currentIndex + index} delay={index * 80}>
              <div className={cn("rounded-2xl p-6 space-y-4 h-full transition-colors duration-1000", isVisible ? "bg-white/10" : "bg-white/60")}>
                <h3 className={cn("text-base font-serif font-medium transition-colors duration-1000", isVisible ? "text-white" : "text-foreground")}>{testimonial.title}</h3>
                <p className={cn("text-sm leading-relaxed transition-colors duration-1000", isVisible ? "text-white/70" : "text-muted-foreground")}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-1000", isVisible ? "bg-white" : "bg-foreground")}>
                    <span className={cn("text-sm font-medium transition-colors duration-1000", isVisible ? "text-black" : "text-background")}>{testimonial.initials}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={cn("text-sm font-medium transition-colors duration-1000", isVisible ? "text-white" : "text-foreground")}>{testimonial.author}</span>
                    <span className={cn("text-xs transition-colors duration-1000", isVisible ? "text-white/50" : "text-muted-foreground")}>{testimonial.role}, {testimonial.company}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={cn("w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-1000 disabled:opacity-30",
              isVisible
                ? "border-white/30 text-white hover:bg-white hover:text-black"
                : "border-foreground/20 hover:bg-foreground hover:text-background"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={cn("w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-1000 disabled:opacity-30",
              isVisible
                ? "border-white/30 text-white hover:bg-white hover:text-black"
                : "border-foreground/20 hover:bg-foreground hover:text-background"
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
