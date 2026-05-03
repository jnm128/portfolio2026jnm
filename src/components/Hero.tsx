import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import PopIn from './animations/PopIn';
import FadeIn from './animations/FadeIn';
import WorkExperiencePanel from './WorkExperiencePanel';
import ServicesPanel from './ServicesPanel';
import CommunityPanel from './CommunityPanel';

interface HeroProps {
  className?: string;
}

const heroImages = ["/lovable-uploads/354aef4d-0714-40c3-9ba3-cc875ac0bc73.png"];

type Audience = 'recruiters' | 'founders' | 'designers';

const audienceTabs: { id: Audience; label: string }[] = [
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'founders', label: 'Founders' },
  { id: 'designers', label: 'Designers' },
];

const taglines: Record<Audience, string> = {
  recruiters:
    'UX designer crafting calm, intuitive experiences for complex systems — with a track record of measurable impact at scale.',
  founders:
    'Your design partner for turning early product ideas into clear, user-loved experiences that ship and scale.',
  designers:
    'Product designer and community builder sharing process, mentorship, and honest notes from the craft.',
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [audience, setAudience] = useState<Audience>('recruiters');
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 300, 1);
        const container = containerRef.current;
        const wrapper = imageWrapperRef.current;
        if (container) {
          const isMd = window.innerWidth >= 768;
          const maxPad = isMd ? 64 : 32;
          const pad = maxPad * (1 - progress);
          container.style.paddingLeft = `${pad}px`;
          container.style.paddingRight = `${pad}px`;
        }
        if (wrapper) {
          const radius = 24 * (1 - progress);
          wrapper.style.borderRadius = `${radius}px`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={cn('pt-32 md:pt-40 pb-6 md:pb-8 bg-hero-gradient', className)}>
      <div className="mx-auto max-w-[1600px] px-5 md:px-16">
        <FadeIn>
          <div role="tablist" aria-label="Choose audience" className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
            {audienceTabs.map((tab) => {
              const active = audience === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setAudience(tab.id)}
                  className={cn(
                    'text-xs uppercase tracking-widest pb-1 border-b transition-colors',
                    active
                      ? 'text-foreground border-foreground'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:opacity-70'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-2">Joanna Minott, <span className="text-muted-foreground">UX Designer</span></h1>
          <p
            key={audience}
            className="text-base md:text-lg text-hint font-serif mb-4 max-w-2xl animate-fade-in"
          >
            {taglines[audience]}
          </p>
          {audience === 'founders' ? (
            <button
              key="services-cta"
              onClick={() => setServicesOpen(true)}
              className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity mb-6 animate-fade-in"
            >
              View Services
            </button>
          ) : audience === 'designers' ? (
            <button
              key="community-cta"
              onClick={() => setCommunityOpen(true)}
              className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity mb-6 animate-fade-in"
            >
              View Community
            </button>
          ) : (
            <button
              key="resume-cta"
              onClick={() => setPanelOpen(true)}
              className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity mb-6 animate-fade-in"
            >
              View Resume
            </button>
          )}
        </FadeIn>
        <WorkExperiencePanel open={panelOpen} onClose={() => setPanelOpen(false)} />
        <ServicesPanel open={servicesOpen} onClose={() => setServicesOpen(false)} />
        <CommunityPanel open={communityOpen} onClose={() => setCommunityOpen(false)} />
      </div>
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-5 md:px-16">
        <PopIn>
          <div ref={imageWrapperRef} className="relative rounded-3xl overflow-hidden h-[50vh] md:h-[60vh] lg:h-[90vh]">
            {heroImages.map((image, index) => (
              <img 
                key={image} 
                src={image} 
                alt={`Hero slide ${index + 1}`} 
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-1000 absolute inset-0", 
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )} 
              />
            ))}
            <img src={heroImages[0]} alt="Hero placeholder" className="w-full h-full object-cover invisible" />
            <div className="absolute bottom-4 right-8 md:right-12 flex gap-2">
              {heroImages.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-all", 
                    index === currentIndex ? "bg-background" : "bg-background/40"
                  )} 
                />
              ))}
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
};

export default Hero;
