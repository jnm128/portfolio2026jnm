import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudies = [
  { slug: 'mindful-wellness', title: 'Mindful Wellness', path: '/case-study/mindful-wellness' },
  { slug: 'artisan-marketplace', title: 'Artisan Marketplace', path: '/case-study/artisan-marketplace' },
  { slug: 'creative-studio', title: 'Creative Studio', path: '/case-study/creative-studio' },
  { slug: 'cvs-health', title: 'CVS Health', path: '/case-study/cvs-health' },
];

interface CaseStudyNavProps {
  currentSlug: string;
  variant?: 'light' | 'dark';
}

const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ currentSlug, variant = 'light' }) => {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const isDark = variant === 'dark';

  return (
    <section 
      className={`py-12 md:py-16 ${isDark ? 'bg-[#1C1C1C] border-white/10' : 'bg-[#F8F6F1] border-border'} border-t`}
      {...(isDark ? { 'data-theme': 'dark' } : {})}
    >
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between">
          <Link
            to={prevStudy.path}
            className={`group flex items-center gap-3 ${isDark ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-muted-foreground/60'} mb-1`}>Previous</p>
              <p className={`text-base md:text-lg font-serif font-medium ${isDark ? 'text-white' : ''}`}>{prevStudy.title}</p>
            </div>
          </Link>
          <Link
            to={nextStudy.path}
            className={`group flex items-center gap-3 ${isDark ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground'} transition-colors text-right`}
          >
            <div>
              <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-muted-foreground/60'} mb-1`}>Next</p>
              <p className={`text-base md:text-lg font-serif font-medium ${isDark ? 'text-white' : ''}`}>{nextStudy.title}</p>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
