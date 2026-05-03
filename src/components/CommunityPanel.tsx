import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommunityPanelProps {
  open: boolean;
  onClose: () => void;
}

const involvement = [
  {
    numeral: 'I',
    title: 'Thought leadership & creator on LinkedIn',
    detail: 'Sharing perspectives on UX, craft, and career growth with a community of designers.',
  },
  {
    numeral: 'II',
    title: 'Mentorship to junior designers',
    detail: '1:1 guidance, portfolio reviews, and career coaching for designers early in their journey.',
  },
  {
    numeral: 'III',
    title: 'UX book club co-founder',
    detail: 'Co-founded Fresh Perspectives — a community of designers reading and reflecting together.',
  },
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
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-title">Community</h1>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Close community panel"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div>
            <h2 className="text-base font-semibold text-title mb-1">How I'm active</h2>
            <p className="text-sm text-muted-foreground font-serif mb-6">
              Ways I show up in the design community.
            </p>
            <ul className="space-y-8">
              {involvement.map((item) => (
                <li key={item.title} className="flex items-baseline gap-6">
                  <span className="text-base font-serif italic text-muted-foreground tracking-[0.15em] w-6 shrink-0 leading-snug tabular-nums">
                    {item.numeral}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-foreground font-serif leading-snug">{item.title}</p>
                    <p className="text-sm text-muted-foreground font-serif mt-1.5 leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <p className="text-base font-serif text-foreground">
              Want to read with us?{' '}
              <Link
                to="/book-club"
                onClick={onClose}
                className="underline underline-offset-4 text-foreground hover:opacity-70 transition-opacity"
              >
                Visit the book club
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default CommunityPanel;
