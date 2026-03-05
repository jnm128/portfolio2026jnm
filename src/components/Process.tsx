
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ProcessProps {
  className?: string;
}

const Process: React.FC<ProcessProps> = ({ className }) => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and unique challenges. Through collaborative workshops and research, we define the project scope and create a strategic roadmap for success."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our design process focuses on user experience and visual storytelling. We create wireframes, prototypes, and high-fidelity designs that align with your brand and resonate with your audience."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We bring designs to life with clean, efficient code and rigorous testing. Our development approach ensures your website is fast, accessible, and optimized for all devices and browsers."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "After thorough testing and client approval, we launch your project and monitor its performance. We provide ongoing support and optimization to ensure continued success and growth."
    }
  ];

  return (
    <section id="process" className={cn('py-12 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start max-w-6xl mx-auto">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Our Process</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">How we brew success</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Every great project starts with understanding. Our proven process ensures we deliver exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-muted-foreground">
                From initial discovery to final launch, we work closely with you every step of the way to bring your vision to life.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="border-l-2 border-gray-200 pl-8 pb-8 last:pb-0">
                  <div className="flex items-start space-x-4">
                    <span className="text-xs font-medium text-orangery-500 bg-orangery-50 px-3 py-1 rounded-full uppercase tracking-wide">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-medium mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Process;
