
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  const services = [
    {
      title: "UX/UI Design",
      description: "User-centered design that prioritizes functionality and aesthetics. From wireframes to high-fidelity prototypes."
    },
    {
      title: "Web Design",
      description: "Beautiful, responsive websites designed with modern aesthetics. Clean layouts that enhance user experience."
    },
    {
      title: "Brand Identity",
      description: "Cohesive visual identities that capture your brand's essence and resonate with your target audience."
    },
    {
      title: "UX Audits",
      description: "Comprehensive analysis of your existing digital products to identify usability issues and optimization opportunities."
    }
  ];

  return (
    <section id="services" className={cn('py-20 md:py-32 bg-gray-50 relative', className)}>
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Services</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">What I craft for you</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final implementation, I provide comprehensive design and development services tailored to your needs.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg h-full">
                <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Gradient overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Services;
