import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';

const CaseStudyMindfulWellness = () => {
  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
            alt="Mindful Wellness Platform" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
          <FadeIn>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </FadeIn>
          
          <div className="max-w-4xl">
            <FadeIn delay={100}>
              <span className="text-sm md:text-base font-medium text-white/80 mb-4 inline-block uppercase tracking-wide">
                UX/UI Design & Development
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
                Mindful Wellness
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
                A holistic wellness platform connecting users with mental health resources and mindfulness practices.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wide text-gray-500 mb-2">Client</h3>
                  <p className="text-lg">Mindful Wellness Co.</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wide text-gray-500 mb-2">Timeline</h3>
                  <p className="text-lg">8 weeks</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wide text-gray-500 mb-2">Services</h3>
                  <p className="text-lg">UX Research, UI Design, Development</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mental health awareness is at an all-time high, but accessible, comprehensive wellness platforms remain scarce. 
                Our client needed a digital solution that could bridge the gap between professional mental health services and 
                everyday mindfulness practices, creating a seamless experience for users at different stages of their wellness journey.
              </p>
              <p className="text-lg text-gray-600 mb-16 leading-relaxed">
                The challenge was to design an interface that felt approachable and non-clinical while maintaining the credibility 
                and professionalism required for mental health resources.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-medium mb-4">User Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We conducted in-depth interviews with 24 users across different demographics to understand their mental 
                    health journey, pain points, and preferred digital interactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Design System</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Created a comprehensive design system focusing on calming colors, accessible typography, and intuitive 
                    navigation patterns that reduce cognitive load.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Prototyping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developed interactive prototypes to test user flows and validate design decisions before moving to 
                    development phase.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Development</h3>
                  <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-16 text-center">Final Designs</h2>
              
              <div className="space-y-16">
                {/* Mobile App Interface */}
                <div className="text-center">
                  <FadeIn delay={100}>
                    <h3 className="text-xl font-medium mb-6 text-gray-800">Mobile App Interface</h3>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png" 
                        alt="Mindful Wellness Mobile App Interface" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Web Platform Dashboard */}
                <div className="text-center">
                  <FadeIn delay={200}>
                    <h3 className="text-xl font-medium mb-6 text-gray-800">Web Platform Dashboard</h3>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                        alt="Mindful Wellness Web Dashboard" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* User Journey Flow */}
                <div className="text-center">
                  <FadeIn delay={300}>
                    <h3 className="text-xl font-medium mb-6 text-gray-800">User Journey & Flow</h3>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80" 
                        alt="Mindful Wellness User Journey" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-16 text-center">Results</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">150%</div>
                  <p className="text-gray-600">Increase in user engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">89%</div>
                  <p className="text-gray-600">User satisfaction score</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">3.2k</div>
                  <p className="text-gray-600">Active users in first month</p>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 border border-gray-200">
                <blockquote className="text-xl md:text-2xl font-serif text-center text-gray-700 mb-6">
                  "The team at brewed completely transformed our vision into reality. The platform has exceeded our 
                  expectations in both design and functionality."
                </blockquote>
                <div className="text-center">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-gray-600">Founder, Mindful Wellness Co.</p>
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
