import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const caseStudies = [
  { slug: 'mindful-wellness', title: 'Mindful Wellness', path: '/case-study/mindful-wellness' },
  { slug: 'artisan-marketplace', title: 'Artisan Marketplace', path: '/case-study/artisan-marketplace' },
  { slug: 'creative-studio', title: 'Creative Studio', path: '/case-study/creative-studio' },
];

interface CaseStudyNavProps {
  currentSlug: string;
}

const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ currentSlug }) => {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <section className="py-12 md:py-16 bg-[#F8F6F1] border-t border-border">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between">
          <Link
            to={prevStudy.path}
            className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-1">Previous</p>
              <p className="text-base md:text-lg font-serif font-medium">{prevStudy.title}</p>
            </div>
          </Link>
          <Link
            to={nextStudy.path}
            className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-1">Next</p>
              <p className="text-base md:text-lg font-serif font-medium">{nextStudy.title}</p>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
