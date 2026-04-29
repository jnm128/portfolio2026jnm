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
  { title: 'End-to-end product design', detail: '0→1 features, flows, and shipping-ready UI.' },
  { title: 'UX research & usability testing', detail: 'Interviews, synthesis, and validated decisions.' },
  { title: 'Design systems setup & audits', detail: 'Tokens, components, and documentation.' },
  { title: 'Web & landing page design', detail: 'Conversion-minded marketing pages.' },
  { title: 'UX audits + redesign roadmap', detail: 'Heuristic review with prioritized fixes.' },
];

const fractional = [
  { title: 'Fractional Lead Designer', detail: 'Embedded 1–3 days/week with your team.' },
  { title: 'Design partner for early-stage founders', detail: 'Strategic thought partnership through MVP.' },
  { title: 'Design ops & process setup', detail: 'Rituals, hand-off, and tooling for growing teams.' },
  { title: 'Mentorship & design team coaching', detail: '1:1 coaching and team enablement.' },
];

const Section: React.FC<{ label: string; eyebrow: string; items: typeof freelance }> = ({ label, eyebrow, items }) => (
  <div>
    <h2 className="text-base font-semibold text-foreground mb-1">{label}</h2>
    <p className="text-sm text-muted-foreground font-serif mb-6">{eyebrow}</p>
    <ul className="space-y-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={cn(
            'py-5 border-b border-border',
            i === 0 && 'border-t border-border'
          )}
        >
          <p className="text-base text-foreground font-serif leading-snug">{item.title}</p>
          <p className="text-sm text-muted-foreground font-serif mt-1">{item.detail}</p>
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
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground">Services</h1>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Close services panel"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <p className="text-base text-muted-foreground font-serif mb-12">
            Freelance & fractional design engagements.
          </p>

          <div className="space-y-16">
            <Section label="Freelance" eyebrow="Project-based engagements with clear scope." items={freelance} />
            <Section label="Fractional" eyebrow="Embedded by the month, part of your team." items={fractional} />
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col gap-4">
            <p className="text-base font-serif text-foreground">Have a project in mind?</p>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity self-start"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ServicesPanel;
