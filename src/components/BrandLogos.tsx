import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BrandLogosProps {
  className?: string;
}

const brands = [
  { name: 'CVS Health', logo: '/lovable-uploads/cvs-health-project.png' },
  { name: 'Brand 2', placeholder: true },
  { name: 'Brand 3', placeholder: true },
  { name: 'Brand 4', placeholder: true },
  { name: 'Brand 5', placeholder: true },
];

const BrandLogos: React.FC<BrandLogosProps> = ({ className }) => {
  return (
    <section className={cn('py-12 md:py-16 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by leading brands
          </p>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="h-8 md:h-10 flex items-center justify-center"
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <div className="bg-muted rounded px-6 py-2 text-muted-foreground text-sm font-medium">
                    {brand.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BrandLogos;
