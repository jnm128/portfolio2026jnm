
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Link } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const images = [
    {
      src: "/lovable-uploads/d420d81a-29f7-443d-a5d4-41738981faf0.png",
      alt: "Benefits & Work Mobile App"
    },
    {
      src: "/lovable-uploads/a2893621-b3fe-4c05-8536-a4dc33d5c068.png", 
      alt: "Hiking Dashboard Mobile App"
    },
    {
      src: "/lovable-uploads/c87f6fc1-f6b9-4455-9286-430a9a6c7c48.png",
      alt: "Trail Discovery Mobile App"
    },
    {
      src: "/lovable-uploads/d2e22d48-0d10-4fcf-8c79-f62cf08b5e87.png",
      alt: "Trail Details Mobile App"
    }
  ];

  const handleViewWork = () => {
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleGetQuote = () => {
    // Open freelance website in new tab
    window.open('https://www.yourfreelancewebsite.com', '_blank');
  };

  return (
    <section className={cn('relative min-h-screen flex items-center bg-gray-50 overflow-hidden', className)}>
      {/* Left Scrolling Column */}
      <div className="absolute left-8 top-0 bottom-0 z-10 pointer-events-none w-[200px]">
        <div className="flex flex-col gap-8 animate-[scroll-up_20s_linear_infinite]">
          {/* First set of images */}
          {images.slice(0, 2).map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {images.slice(0, 2).map((image, index) => (
            <img 
              key={`duplicate-${index}`}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Right Scrolling Column */}
      <div className="absolute right-8 top-0 bottom-0 z-10 pointer-events-none w-[200px]">
        <div className="flex flex-col gap-8 animate-[scroll-down_20s_linear_infinite]">
          {/* First set of images */}
          {images.slice(2, 4).map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {images.slice(2, 4).map((image, index) => (
            <img 
              key={`duplicate-${index}`}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-20 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-gray-900 leading-tight mb-6">
              <div className="flex flex-col">
                <span>Human-Centered</span>
                <span>Health-Focused</span>
                <span>Research-Backed</span>
                <span><em>Results-Driven</em></span>
              </div>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex justify-center">
              <button 
                onClick={handleViewWork}
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Work
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
