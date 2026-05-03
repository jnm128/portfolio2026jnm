import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';

const CaseStudyMindfulWellness = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-16">
          <FadeIn>
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-3xl md:text-5xl font-serif text-title leading-tight mb-2">
              Gordon Center's Essential Cardiac Heart Auscultation re-design
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              User testing and UX design enhancements to the Gordon Center's web e-learning platform.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'Gordon Center for Simulation and Innovation' },
                { label: 'Industry', value: 'Healthcare Education' },
                { label: 'Category', value: 'UX Design, User Research' },
                { label: 'My Role', value: 'Product & UX Designer' },
                { label: 'Team', value: 'Team of 2' },
                { label: 'Timeline', value: '14 weeks / 2024' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12">
              <img 
                src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
                alt="Gordon Center Essential Cardiac Auscultation Platform" 
                className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Problem Space */}
        <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              How might we improve the usability of the Gordon Center's Essential Cardiac Auscultation e-learning module for medical students?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              The Gordon Center Essential Cardiac Auscultation module is a web-based educational tool that helps medical students practice using a stethoscope to listen to heartbeat sounds through interactive teaching, audio practice, and video case studies.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Our client at the Gordon Center needed an evaluation of the platform's overall usability and design recommendations to enhance the UI and UX — particularly as students increasingly preferred studying on tablets and phones rather than desktops.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Our Approach">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Usability Testing</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Planned and moderated 90-minute remote usability tests with 6 medical and 3 non-medical students across 3 task-based scenarios, capturing completion time, success rate, and task flow.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">SUS & Interviews</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Participants completed the System Usability Scale (SUS) questionnaire and post-study interviews to gauge content clarity, usefulness, and engagement.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Design Recommendations</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Created 21 mockups addressing identified usability issues — including a progress indicator, clearer practice instructions, video transcript visuals, and a consistent help/contact path.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Hand-off & Brand Alignment</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Aligned the e-learning UI with University of Miami branding and delivered a hand-off document with design specs so the Gordon Center's in-house developers could ship the updates.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-16">
          <FadeIn>
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png"
                  alt="Gordon Center Essential Cardiac Auscultation tablet view"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Gordon Center module redesign — progress indicator and lesson layout"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80"
                  alt="Gordon Center module redesign — transcript visuals and help flow"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Results">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">21</div>
                <p className="text-muted-foreground">Unique usability issues identified</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">21</div>
                <p className="text-muted-foreground">Mockups of design solutions delivered</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">9</div>
                <p className="text-muted-foreground">Moderated usability tests conducted</p>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-6">
                "A progress bar on the top where the nav bar is would be super helpful when going through the entire site."
              </blockquote>
              <div>
                <p className="font-medium">Usability test participant</p>
                <p className="text-muted-foreground">Gordon Center e-learning study</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="mindful-wellness" />
      <Footer />
    </main>
  );
};

export default CaseStudyMindfulWellness;
