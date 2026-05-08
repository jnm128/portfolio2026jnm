import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import cvsHeroVideo from '@/assets/cvs-hero.mp4';
import tapptHeroVideo from '@/assets/tappt-hero.mp4';
import gordonHeroVideo from '@/assets/gordon-center-hero.mp4';
import vivekaHeroVideo from '@/assets/viveka-hero.mp4';
import emberHeroVideo from '@/assets/ember-hero.mp4';
import emberHeroPoster from '@/assets/ember-hero-poster.jpg';
import errorSafeHeroVideo from '@/assets/error-safe-hero.mp4';
import errorSafeHeroPoster from '@/assets/error-safe-hero-poster.jpg';

type Category = 'modernization' | 'zero-to-one';

const projects: Array<{
  brand: string;
  year: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  id?: string;
  category: Category;
}> = [
  {
    brand: "CVS Health",
    year: "2024",
    description: "Shipping colleague-facing design experience to reduce user errors and improve task completion across key workflows.",
    image: "/lovable-uploads/cvs-health-card.png",
    video: cvsHeroVideo,
    link: "/case-study/cvs-health",
    id: "project-cvs-health",
    category: "modernization",
  },
  {
    brand: "Viveka Health",
    year: "2023",
    description: "Building cost transparency between families, insurance, and businesses — improving cost clarity and reducing support tickets.",
    image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
    video: vivekaHeroVideo,
    link: "/case-study/artisan-marketplace",
    category: "modernization",
  },
  {
    brand: "Tappt Health",
    year: "2022",
    description: "Modernizing medicine adherence from web to native mobile, improving patient engagement and daily active usage.",
    image: "/lovable-uploads/tappt-health-project.png",
    video: tapptHeroVideo,
    link: "/case-study/creative-studio",
    category: "modernization",
  },
  {
    brand: "Gordon Center",
    year: "2024",
    description: "User testing and UX design enhancements to the Gordon Center's Essential Cardiac Auscultation web e-learning platform for medical students.",
    image: "/lovable-uploads/mindful-wellness-card.png",
    video: gordonHeroVideo,
    link: "/case-study/mindful-wellness",
    category: "modernization",
  },
  {
    brand: "Ember",
    year: "2024",
    description: "MFA capstone — a self-development mobile app helping lost adults build consistent journaling, habit, and goal-setting practices.",
    image: emberHeroPoster,
    video: emberHeroVideo,
    link: "/case-study/ember",
    category: "zero-to-one",
  },
  {
    brand: "Error Safe",
    year: "2024",
    description: "Streamlining work-related injury reporting and employee management for nurse administrators in elder-care organizations.",
    image: errorSafeHeroPoster,
    video: errorSafeHeroVideo,
    link: "/case-study/error-safe",
    category: "zero-to-one",
  }
];

const TABS: { id: Category; label: string }[] = [
  { id: 'modernization', label: 'Modernizations' },
  { id: 'zero-to-one', label: '0 to 1' },
];

const Work: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Category>('modernization');
  const visibleProjects = projects.filter(p => p.category === activeTab);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      if (window.__lenis) {
        window.__lenis.scrollTo(top, { immediate: false });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
      return true;
    };
    const t = setTimeout(() => { if (!tryScroll()) setTimeout(tryScroll, 200); }, 100);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="pt-32 pb-0 md:pt-40 md:pb-0">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif text-title mb-6">
              Tiny fraction of my work
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              A collection of projects spanning product design, brand identity, and digital experiences — each crafted with intention and care.
            </p>
          </FadeIn>

          {/* Tabs */}
          <div role="tablist" aria-label="Filter projects" className="mt-12 flex flex-wrap gap-x-5 gap-y-2">
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors',
                    isActive
                      ? 'text-foreground border-foreground'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:opacity-70'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16 pt-8 md:pt-10 pb-16 md:pb-24">
          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
              {visibleProjects.map((project, index) => (
                <FadeIn key={project.brand} delay={index * 50} duration={500} threshold={0.05}>
                  <Link to={project.link} id={project.id} className="group block scroll-mt-24">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                      {project.video ? (
                        <video
                          src={project.video}
                          poster={project.image || undefined}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          aria-label={`${project.brand} case study`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.brand} case study`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                      {project.brand !== 'Ember' && project.brand !== 'Error Safe' && (
                        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                          <span className="text-sm font-medium text-foreground">{project.brand}</span>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-base text-hint leading-relaxed">
                      {project.description}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-xs uppercase tracking-widest text-muted-foreground text-center py-16">More coming soon…</p>
          )}
          {visibleProjects.length > 0 && (
            <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mt-16">More coming soon...</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
