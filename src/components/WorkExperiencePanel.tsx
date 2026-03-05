import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkExperiencePanelProps {
  open: boolean;
  onClose: () => void;
}

const workExperience = [
  { period: '2024 — Now', title: 'UX Designer at CVS Health', location: 'Remote' },
  { period: '2024 — Now', title: 'Freelance UX Designer', location: 'Remote' },
  { period: '2023 — 2024', title: 'Product Designer at Viveka Health', location: 'Miami, FL' },
  { period: '2023 — 2023', title: 'Product Designer at Adriene Arsht Center', location: 'Miami, FL' },
  { period: '2022 — 2022', title: 'Web Designer at CSL Behring', location: 'Remote' },
  { period: '2021 — 2021', title: 'UX Designer at The Gordon Center for Simulation and Innovation in Medical Education', location: 'Miami, FL' },
];

const education = [
  { period: '2022 — 2024', title: 'Masters in Fine Arts Interactive Media at The University of Miami', location: 'Miami, FL' },
  { period: '2018 — 2022', title: 'Bachelors in Arts Computer Science at The University of Miami', location: 'Miami, FL' },
];

const WorkExperiencePanel: React.FC<WorkExperiencePanelProps> = ({ open, onClose }) => {
  return createPortal(
    <>
      {/* Backdrop for click-outside-to-close */}
      <div
        className={cn(
          'fixed inset-0 z-[199] transition-opacity duration-500',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full z-[200] bg-[#F8F6F1] shadow-[-4px_0_24px_rgba(0,0,0,0.08)] overflow-y-auto transition-transform duration-500 ease-out w-full md:w-1/2',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-8 md:px-12 pt-8 pb-24">
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-1">Joanna Minott</h1>
          <p className="text-muted-foreground font-serif text-base mb-0.5">UX Designer, Miami, FL</p>
          <p className="text-muted-foreground font-serif text-base mb-12">joannaminott.com</p>

          <h2 className="text-base font-semibold text-foreground mb-6">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((item, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-sm text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                <div>
                  <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                  <p className="text-sm text-muted-foreground font-serif">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-base font-semibold text-foreground mt-16 mb-6">Education</h2>
          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-sm text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                <div>
                  <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                  <p className="text-sm text-muted-foreground font-serif">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default WorkExperiencePanel;
