import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import CaseStudyNav from '@/components/CaseStudyNav';
import Footer from '@/components/Footer';
import cvsHero from '@/assets/cvs-hero.jpg';

const CaseStudyCVS: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-background">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-16">
          <FadeIn>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              <span className="text-sm">Back</span>
            </button>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-10">
              CVS Health
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
              {[
                { label: 'Timeline', value: 'Jan 2023 – Present' },
                { label: 'Role', value: 'Product Design' },
                { label: 'Org', value: 'Specialty Pharmacy' },
                { label: 'With', value: 'PMs, Engineers, Pharmacists' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm md:text-base font-medium whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-10 md:mt-12 max-w-3xl mx-auto">
              <img
                src={cvsHero}
                alt="CVS Health case study"
                className="w-full object-cover aspect-[16/10]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-10 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
              I'm tied to an NDA so I can't share visuals from my work at CVS Health — but I'd be happy to chat about it. Here's what I can tell you:
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Specialty Central */}
      <section className="py-16 md:py-24 bg-foreground" data-theme="dark">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-16">
          <SplitSection label="Project One" className="[&_span]:text-background/50">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-background mb-4">
                Improving Specialty Central
              </h3>
              <p className="text-base md:text-lg text-background/70 leading-relaxed mb-8">
                Led design efforts to reimagine the Specialty Central platform — streamlining complex pharmacy workflows, reducing friction for pharmacists and care teams, and improving the overall experience for patients managing specialty medications.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">40%</p>
                  <p className="text-sm text-background/50">Reduction in task completion time</p>
                </div>
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">3x</p>
                  <p className="text-sm text-background/50">Faster onboarding for new team members</p>
                </div>
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">12+</p>
                  <p className="text-sm text-background/50">Workflows redesigned end-to-end</p>
                </div>
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Benefits Verification */}
      <section className="py-16 md:py-24 bg-foreground" data-theme="dark">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-16">
          <SplitSection label="Project Two" className="[&_span]:text-background/50">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-background mb-4">
                Supporting Benefits Verification
              </h3>
              <p className="text-base md:text-lg text-background/70 leading-relaxed mb-8">
                Designed tools and interfaces to support the benefits verification process — helping teams quickly validate patient coverage, reduce manual data entry, and surface critical insurance information at the right moments in the workflow.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">60%</p>
                  <p className="text-sm text-background/50">Less time spent on manual verification</p>
                </div>
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">2x</p>
                  <p className="text-sm text-background/50">Increase in verification accuracy</p>
                </div>
                <div className="bg-background/10 rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-background mb-2">8</p>
                  <p className="text-sm text-background/50">Key workflows streamlined</p>
                </div>
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="cvs-health" variant="dark" />
      <Footer />
    </main>
  );
};

export default CaseStudyCVS;
