import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import CaseStudyNav from '@/components/CaseStudyNav';
import Footer from '@/components/Footer';
import cvsHeroVideo from '@/assets/cvs-hero.mp4';

const CaseStudyCVS: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 bg-background">
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
            <h1 className="text-4xl md:text-6xl font-serif text-title leading-tight mb-10">
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
            <div className="overflow-hidden rounded-2xl mt-10 md:mt-12">
              <video
                src={cvsHeroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="CVS Health case study"
                className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-10 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
              I'm tied to an NDA so I can't share visuals from my work at CVS Health — but I'd be happy to chat about it.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm md:text-base text-muted-foreground">
              <span>Here's what I can tell you</span>
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Specialty Central */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-16">
          <SplitSection label="Project One">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-title mb-4">
                Improving Specialty Central
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Led design efforts to reimagine the Specialty Central platform — streamlining complex pharmacy workflows, reducing friction for pharmacists and care teams, and improving the overall experience for patients managing specialty medications.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">40%</p>
                  <p className="text-sm text-hint">Reduction in task completion time</p>
                </div>
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">3x</p>
                  <p className="text-sm text-hint">Faster onboarding for new team members</p>
                </div>
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">12+</p>
                  <p className="text-sm text-hint">Workflows redesigned end-to-end</p>
                </div>
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Benefits Verification */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-[1600px] px-5 md:px-16">
          <SplitSection label="Project Two">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-title mb-4">
                Supporting Benefits Verification
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Designed tools and interfaces to support the benefits verification process — helping teams quickly validate patient coverage, reduce manual data entry, and surface critical insurance information at the right moments in the workflow.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">60%</p>
                  <p className="text-sm text-hint">Less time spent on manual verification</p>
                </div>
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">2x</p>
                  <p className="text-sm text-hint">Increase in verification accuracy</p>
                </div>
                <div className="bg-section rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-serif font-medium text-title mb-2">8</p>
                  <p className="text-sm text-hint">Key workflows streamlined</p>
                </div>
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Curious to learn more CTA — matches Collab style */}
      <section data-theme="dark" className="pt-16 md:pt-24 pb-16 md:pb-24 bg-foreground">
        <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">
          <FadeIn>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-background">
                Curious to learn more?
              </h2>
              <p className="mt-6 text-lg md:text-xl text-background/60 font-serif leading-relaxed">
                Happy to walk you through the work, decisions, and outcomes in more detail.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Let's Chat
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CaseStudyNav currentSlug="cvs-health" variant="light" />
      <Footer />
    </main>
  );
};

export default CaseStudyCVS;
