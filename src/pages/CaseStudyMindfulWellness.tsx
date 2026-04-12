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
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-[#F8F6F1]">
        <div className="mx-auto max-w-[1600px] px-8 md:px-16">
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
            <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-2">
              Mindful Wellness
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              A holistic wellness platform connecting users with mental health resources and mindfulness practices.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12">
              <img 
                src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
                alt="Mindful Wellness Platform" 
                className="w-full object-cover aspect-[16/10]"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* TLDR */}
      <section className="py-12 md:py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="TLDR">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
                <p className="text-base font-medium">Mindful Wellness</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Category</p>
                <p className="text-base font-medium">Product Design</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Industry</p>
                <p className="text-base font-medium">Health & Wellness</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Responsibilities</p>
                <p className="text-base font-medium">UX/UI Design, Research</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">My Role</p>
                <p className="text-base font-medium">Lead Designer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Timeline</p>
                <p className="text-base font-medium">8 weeks</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
        <section className="py-12 md:py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              How might we create an accessible wellness platform that feels approachable yet credible?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Mental health awareness is at an all-time high, but accessible, comprehensive wellness platforms remain scarce. 
              Our client needed a digital solution that could bridge the gap between professional mental health services and 
              everyday mindfulness practices, creating a seamless experience for users at different stages of their wellness journey.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The challenge was to design an interface that felt approachable and non-clinical while maintaining the credibility 
              and professionalism required for mental health resources.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 bg-[#F8F6F1]">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Our Approach">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">User Research</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  We conducted in-depth interviews with 24 users across different demographics to understand their mental 
                  health journey, pain points, and preferred digital interactions.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Design System</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Created a comprehensive design system focusing on calming colors, accessible typography, and intuitive 
                  navigation patterns that reduce cognitive load.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Prototyping</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Developed interactive prototypes to test user flows and validate design decisions before moving to 
                  development phase.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Development</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Built a responsive web application with React and integrated third-party APIs for content delivery 
                  and user progress tracking.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20 md:py-32 bg-[#F8F6F1]">
        <div className="mx-auto max-w-[1600px] px-8 md:px-16">
          <FadeIn>
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png"
                  alt="Mindful Wellness Mobile App Interface"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Mindful Wellness Web Dashboard"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80"
                  alt="Mindful Wellness User Journey"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-[#F8F6F1]">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Results">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">150%</div>
                <p className="text-muted-foreground">Increase in user engagement</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">89%</div>
                <p className="text-muted-foreground">User satisfaction score</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">3.2k</div>
                <p className="text-muted-foreground">Active users in first month</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-6">
                "The team at brewed completely transformed our vision into reality. The platform has exceeded our 
                expectations in both design and functionality."
              </blockquote>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-muted-foreground">Founder, Mindful Wellness Co.</p>
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
