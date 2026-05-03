import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

const caseStudies = [
  {
    slug: 'mindful-wellness',
    title: 'Mindful Wellness',
    path: '/case-study/mindful-wellness',
    brand: 'Mindful Wellness',
    year: '2021',
    image: '/lovable-uploads/mindful-wellness-card.png',
    description:
      'Designing a calming meditation experience that helps users build sustainable mindfulness habits through guided sessions.',
  },
  {
    slug: 'artisan-marketplace',
    title: 'Artisan Marketplace',
    path: '/case-study/artisan-marketplace',
    brand: 'Viveka Health',
    year: '2023',
    image: '/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png',
    description:
      'Building cost transparency between families, insurance, and businesses — improving cost clarity and reducing support tickets.',
  },
  {
    slug: 'creative-studio',
    title: 'Creative Studio',
    path: '/case-study/creative-studio',
    brand: 'Tappt Health',
    year: '2022',
    image: '/lovable-uploads/tappt-health-project.png',
    description:
      'Modernizing medicine adherence from web to native mobile, improving patient engagement and daily active usage.',
  },
  {
    slug: 'cvs-health',
    title: 'CVS Health',
    path: '/case-study/cvs-health',
    brand: 'CVS Health',
    year: '2024',
    image: '/lovable-uploads/cvs-health-card.png',
    description:
      'Shipping colleague-facing design experience to reduce user errors and improve task completion across key workflows.',
  },
];

interface CaseStudyNavProps {
  currentSlug: string;
  variant?: 'light' | 'dark';
}

const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ currentSlug, variant = 'light' }) => {
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === currentSlug);
  const next1 = caseStudies[(currentIndex + 1) % caseStudies.length];
  const next2 = caseStudies[(currentIndex + 2) % caseStudies.length];
  const more = [next1, next2];

  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 md:py-24 border-t ${
        isDark ? 'bg-foreground border-white/10' : 'bg-background border-border'
      }`}
      {...(isDark ? { 'data-theme': 'dark' } : {})}
    >
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
        <FadeIn>
          <p
            className={`text-xs uppercase tracking-widest mb-10 md:mb-14 ${
              isDark ? 'text-background/50' : 'text-muted-foreground'
            }`}
          >
            Check out more case studies
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {more.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 50} duration={500} threshold={0.05}>
              <Link to={project.path} className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={`${project.brand} case study`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                    <span className="text-sm font-medium text-foreground">{project.brand}</span>
                    <span className="text-sm text-hint">·</span>
                    <span className="text-sm text-hint">{project.year}</span>
                  </div>
                </div>
                <p
                  className={`mt-4 text-base leading-relaxed transition-opacity group-hover:opacity-70 ${
                    isDark ? 'text-background/70' : 'text-hint'
                  }`}
                >
                  {project.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
