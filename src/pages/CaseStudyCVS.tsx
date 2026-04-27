import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShieldOff } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import CaseStudyNav from '@/components/CaseStudyNav';
import Footer from '@/components/Footer';

const CaseStudyCVS: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-background">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-16">
          <FadeIn>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              <span className="text-sm">Back</span>
            </button>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col items-center justify-center py-20 md:py-28 text-center">
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                <ShieldOff size={28} className="text-muted-foreground" />
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-medium text-foreground mb-4">
                Oops! This one's under wraps
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
                I'm tied to an NDA so I can't share visuals from my work at CVS Health — but I'd be happy to chat about it. Here's what I can tell you:
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                Let's Chat
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Specialty Central */}
      <section className="py-16 md:py-24 bg-foreground" data-theme="dark">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-16">
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
        <div className="container mx-auto max-w-[1600px] px-8 md:px-16">
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
