
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-white relative', className)}>
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start max-w-6xl mx-auto">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">About the studio</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">Designing with purpose since day one</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                At brewed designs, every pixel has a purpose and every interaction tells a story.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm a freelance UX/UI designer and web developer passionate about creating digital experiences that not only look beautiful but solve real problems. From initial concept to final launch, I work closely with clients to bring their vision to life.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png"
                alt="Design workspace with creative elements"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Gradient overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default About;
