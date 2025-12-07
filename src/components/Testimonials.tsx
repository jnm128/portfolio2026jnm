
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials = [
    {
      quote: "Working with brewed designs was an absolute game-changer for our startup. They didn't just build us a website – they crafted a digital experience that perfectly captures our brand essence. The attention to detail and user experience is unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "Y Combinator Startup"
    },
    {
      quote: "The team at brewed designs transformed our outdated e-commerce platform into a conversion machine. Our sales increased by 180% within the first month of launch. Their strategic approach to UX design is phenomenal.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "Artisan Coffee Co."
    },
    {
      quote: "Professional, creative, and incredibly responsive. They took our complex requirements and turned them into an elegant, intuitive web application. The entire process was smooth and collaborative from start to finish.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "FinanceForward"
    }
  ];

  return (
    <section id="testimonials" className={cn('py-20 md:py-32 bg-gray-50 relative', className)}>
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start max-w-6xl mx-auto">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Social Proof</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">What clients say</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. Here's what our clients have to say about their experience working with us.
              </p>
              <p className="text-lg text-muted-foreground">
                Every testimonial represents a successful partnership and a project we're proud to have delivered.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-8 pb-8 last:pb-0">
                  <blockquote className="text-lg mb-6 font-serif leading-relaxed text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-6">
                    <div className="text-gray-900 mb-1 font-serif">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground font-sans">{testimonial.role}</div>
                    <div className="text-sm text-orangery-600 font-medium font-sans">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Gradient overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Testimonials;
