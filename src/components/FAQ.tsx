
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import FadeIn from './animations/FadeIn';

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in a typical web design project?",
      answer: "Every project includes UX research, wireframing, visual design, responsive layouts, and a complete style guide. I also provide design handoff documentation and collaborate closely with developers during implementation."
    },
    {
      question: "How long does a project usually take?",
      answer: "Timeline varies based on project scope. A simple website redesign typically takes 2-3 weeks, while a complete brand and web experience can take 4-6 weeks. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with existing development teams?",
      answer: "Absolutely! I have extensive experience collaborating with development teams. I provide detailed design specifications, assets, and ongoing support throughout the development process to ensure pixel-perfect implementation."
    },
    {
      question: "What's the difference between one-time projects and retainers?",
      answer: "One-time projects are perfect for complete redesigns or new websites. Monthly retainers work best for ongoing design needs, regular updates, A/B testing, and continuous optimization of your digital presence."
    },
    {
      question: "Can you help with UX audits of existing websites?",
      answer: "Yes! UX audits are one of my core services. I'll analyze your current site's user experience, identify pain points, and provide actionable recommendations to improve conversion rates and user satisfaction."
    },
    {
      question: "Do you provide design systems?",
      answer: "I create comprehensive design systems as part of larger projects. This includes component libraries, typography scales, color palettes, and usage guidelines to ensure consistency across all touchpoints."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={cn('py-20 md:py-32 bg-white relative', className)}>
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about working together and the design process
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={100 + index * 50}>
              <div className="bg-white border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                      openIndex === index ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div 
                  className={cn(
                    "transition-all duration-200 ease-in-out overflow-hidden",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Gradient overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default FAQ;
