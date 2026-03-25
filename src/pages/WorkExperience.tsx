import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';

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

const WorkExperience: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 max-w-2xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-1">Joanna Minott</h1>
            <p className="text-muted-foreground font-serif text-base mb-0.5">UX Designer, Miami, FL</p>
            <p className="text-muted-foreground font-serif text-base mb-12">joannaminott.com</p>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-base font-semibold text-foreground mb-6">Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((item, i) => (
                <div key={i} className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-sm text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                  <div>
                    <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                    <p className="text-sm text-muted-foreground font-serif">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="text-base font-semibold text-foreground mt-16 mb-6">Education</h2>
            <div className="space-y-8">
              {education.map((item, i) => (
                <div key={i} className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-sm text-muted-foreground font-serif whitespace-nowrap">{item.period}</span>
                  <div>
                    <p className="text-sm text-foreground font-serif leading-relaxed">{item.title}</p>
                    <p className="text-sm text-muted-foreground font-serif">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkExperience;
