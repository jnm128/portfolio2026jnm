import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
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
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = original;
    };
  }, [slug, onClose]);

  if (!slug) return null;
  const Component = slugToComponent[slug];
  if (!Component) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[150] bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={scrollRef}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-x-2 top-2 bottom-2 md:inset-x-8 md:top-8 md:bottom-8 bg-background rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <X size={18} className="text-foreground" />
        </button>
        <Component />
      </div>
    </div>,
    document.body,
  );
};

export default CaseStudyOverlay;
