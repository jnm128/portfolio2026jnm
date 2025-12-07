
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface PortfolioCTAProps {
  className?: string;
}

const PortfolioCTA: React.FC<PortfolioCTAProps> = ({ className }) => {
  const handleViewPortfolio = () => {
    // Replace with your actual portfolio URL
    window.open('https://your-portfolio-url.com', '_blank');
  };

  return (
    <section className={cn('relative min-h-[60vh] flex items-center overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png" 
          alt="Portfolio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-24 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
              Ready to hire a UX designer who delivers results?
            </h2>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Explore my personal portfolio showcasing full-scale UX projects, design process, and the impact I've created for leading companies.
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <button 
              onClick={handleViewPortfolio}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My UX Portfolio
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
