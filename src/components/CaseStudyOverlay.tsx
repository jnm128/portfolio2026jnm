import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, Maximize2 } from 'lucide-react';
import CaseStudyArtisanMarketplace from '@/pages/CaseStudyArtisanMarketplace';
import CaseStudyCreativeStudio from '@/pages/CaseStudyCreativeStudio';
import CaseStudyMindfulWellness from '@/pages/CaseStudyMindfulWellness';
import CaseStudyCVS from '@/pages/CaseStudyCVS';

interface CaseStudyOverlayProps {
  slug: string | null;
  onClose: () => void;
}

const slugToComponent: Record<string, React.ComponentType> = {
  'cvs-health': CaseStudyCVS,
  'artisan-marketplace': CaseStudyArtisanMarketplace,
  'creative-studio': CaseStudyCreativeStudio,
  'mindful-wellness': CaseStudyMindfulWellness,
};

const CaseStudyOverlay: React.FC<CaseStudyOverlayProps> = ({ slug, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    // Lock background scroll without layout shift
    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (scrollRef.current) scrollRef.current.scrollTop = 0;

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.paddingRight = originalPaddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [slug, onClose]);

  if (!slug) return null;
  const Component = slugToComponent[slug];
  if (!Component) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[150] bg-foreground/50 backdrop-blur-sm animate-in fade-in duration-200 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={scrollRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[85vh] bg-background rounded-2xl overflow-y-auto overflow-x-hidden overscroll-contain shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
      >
        <div className="sticky top-0 z-10 flex justify-end gap-2 p-3 pointer-events-none">
          <Link
            to={`/case-study/${slug}`}
            onClick={onClose}
            aria-label="Open full case study"
            className="pointer-events-auto w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Maximize2 size={16} className="text-foreground" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="pointer-events-auto w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <X size={18} className="text-foreground" />
          </button>
        </div>
        <div className="-mt-16">
          <Component />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default CaseStudyOverlay;
