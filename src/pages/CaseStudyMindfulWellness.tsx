import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import PopIn from '@/components/animations/PopIn';

const CaseStudyMindfulWellness = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 bg-[#F8F6F1]">
        <div className="container mx-auto px-4 md:px-16">
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
            <div className="overflow-hidden rounded-2xl mb-10">
              <img 
                src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
                alt="Mindful Wellness Platform" 
                className="w-full object-cover aspect-[16/9]"
              />
            </div>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight mb-4">
                Mindful Wellness
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-12 max-w-3xl">
                A holistic wellness platform connecting users with mental health resources and mindfulness practices.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Role</h3>
                  <p className="text-base text-foreground font-serif">UX Research, UI Design, Development</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">The Problem</h3>
                  <p className="text-base text-foreground font-serif">Accessible, comprehensive <span className="font-semibold">wellness platforms</span> remain scarce despite rising mental health awareness.</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Team</h3>
                  <p className="text-base text-foreground font-serif">Mindful Wellness Co.</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">Timeline</h3>
                  <p className="text-base text-foreground font-serif">8 weeks</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">The Challenge</h2>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
                Mental health awareness is at an all-time high, but accessible, comprehensive wellness platforms remain scarce. 
                Our client needed a digital solution that could bridge the gap between professional mental health services and 
                everyday mindfulness practices, creating a seamless experience for users at different stages of their wellness journey.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-16">
                The challenge was to design an interface that felt approachable and non-clinical while maintaining the credibility 
                and professionalism required for mental health resources.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-16 text-center">Final Designs</h2>
              
              <div className="space-y-16">
                <div className="text-center">
                  <FadeIn delay={100}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Mobile App Interface</h3>
                  </FadeIn>
                  <PopIn delay={100}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
                        alt="Mindful Wellness Mobile App Interface" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={200}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Web Platform Dashboard</h3>
                  </FadeIn>
                  <PopIn delay={200}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                        alt="Mindful Wellness Web Dashboard" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={300}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">User Journey & Flow</h3>
                  </FadeIn>
                  <PopIn delay={300}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80" 
                        alt="Mindful Wellness User Journey" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-16 text-center">Results</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">150%</div>
                  <p className="text-muted-foreground">Increase in user engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">89%</div>
                  <p className="text-muted-foreground">User satisfaction score</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">3.2k</div>
                  <p className="text-muted-foreground">Active users in first month</p>
                </div>
              </div>

              <div className="bg-background p-8 md:p-12 border border-border">
                <blockquote className="text-xl md:text-2xl font-serif text-center text-muted-foreground mb-6">
                  "The team at brewed completely transformed our vision into reality. The platform has exceeded our 
                  expectations in both design and functionality."
                </blockquote>
                <div className="text-center">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-muted-foreground">Founder, Mindful Wellness Co.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudyMindfulWellness;