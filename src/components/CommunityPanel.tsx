import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, BookOpen, MessageCircle, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import freshPerspectivesLogo from '@/assets/fresh-perspectives-logo.png';

interface CommunityPanelProps {
  open: boolean;
  onClose: () => void;
}

const stats = [
  { value: '2023', label: 'Est.' },
  { value: '486+', label: 'Members' },
  { value: '8+', label: 'Books' },
  { value: 'Monthly', label: 'Sessions' },
];

const howItWorks = [
  { icon: BookOpen, title: 'Read Together', desc: 'One book per cycle — paced for busy design professionals.' },
  { icon: MessageCircle, title: 'Discuss & Reflect', desc: 'Monthly virtual sessions to connect ideas to real work.' },
  { icon: Globe, title: 'Stay Connected', desc: 'An active LinkedIn community for resources and conversations.' },
];

const CommunityPanel: React.FC<CommunityPanelProps> = ({ open, onClose }) => {
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
          <div className="flex items-start justify-between mb-6">
            <img src={freshPerspectivesLogo} alt="Fresh Perspectives" className="w-10 h-10 rounded-lg" />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Close community panel"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Fresh Perspectives</h1>
          <p className="text-base text-muted-foreground font-serif mb-8">
            A UX book club for designers who think beyond the screen.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border py-6 mb-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-serif font-medium text-foreground">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Who We Are</h2>
          <p className="text-base text-foreground font-serif leading-relaxed mb-12">
            I founded Fresh Perspectives as a space for like-minded UX professionals to slow down and think deeply — not just ship faster. What started as a book club has grown, alongside my co-host Bhavna, into a hub where designers connect, challenge assumptions, and bring sharper thinking back to their work.
          </p>

          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">How it Works</h2>
          <ul className="space-y-0">
            {howItWorks.map((item, i) => (
              <li
                key={item.title}
                className={cn(
                  'py-5 border-b border-border flex items-start gap-4',
                  i === 0 && 'border-t border-border'
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-base text-foreground font-serif leading-snug">{item.title}</p>
                  <p className="text-sm text-muted-foreground font-serif mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 pt-8 border-t border-border flex flex-col gap-4">
            <p className="text-base font-serif text-foreground">Want to read with us?</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/joannaminott"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                Join the Club
              </a>
              <Link
                to="/book-club"
                onClick={onClose}
                className="inline-flex items-center justify-center bg-background text-foreground border border-border px-6 py-3 rounded-full text-base font-medium hover:bg-foreground/5 transition-colors"
              >
                Visit Community Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default CommunityPanel;
