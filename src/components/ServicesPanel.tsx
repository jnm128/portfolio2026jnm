import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicesPanelProps {
  open: boolean;
  onClose: () => void;
}

const freelance = [
  { numeral: 'I', title: 'End-to-end product design', detail: '0→1 features, flows, and shipping-ready UI.' },
  { numeral: 'II', title: 'Web & landing page design', detail: 'Conversion-minded marketing pages.' },
  { numeral: 'III', title: 'UX audits + redesign roadmap', detail: 'Heuristic review with prioritized fixes.' },
];

const Section: React.FC<{ label: string; eyebrow: string; items: typeof freelance }> = ({ label, eyebrow, items }) => (
  <div>
    <h2 className="text-base font-semibold text-foreground mb-1">{label}</h2>
    <p className="text-sm text-muted-foreground font-serif mb-6">{eyebrow}</p>
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.title} className="flex items-baseline gap-4">
          <span className="text-sm font-serif italic text-muted-foreground tracking-wider w-8 shrink-0">
            {item.numeral}
          </span>
          <div>
            <p className="text-base text-foreground font-serif leading-snug">{item.title}</p>
            <p className="text-sm text-muted-foreground font-serif mt-1">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesPanel: React.FC<ServicesPanelProps> = ({ open, onClose }) => {
  return createPortal(
    <>
      <div
        className={cn(
          'fixed inset-0 z-[199] transition-opacity duration-500',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full z-[200] bg-background shadow-[-4px_0_24px_rgba(0,0,0,0.08)] overflow-y-auto transition-transform duration-500 ease-out w-full md:w-[40%]',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-8 md:px-12 pt-6 pb-24">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground">Services</h1>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Close services panel"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <Section label="Freelance" eyebrow="Project-based engagements with clear scope." items={freelance} />

          <div className="mt-16">
            <p className="text-base font-serif text-foreground">
              Have a project in mind?{' '}
              <Link
                to="/contact"
                onClick={onClose}
                className="underline underline-offset-4 text-foreground hover:opacity-70 transition-opacity"
              >
                Let's talk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ServicesPanel;
