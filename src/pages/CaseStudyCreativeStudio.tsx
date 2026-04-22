import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';

const CaseStudyCreativeStudio = () => {
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
            <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight mb-2">
              Creative Studio
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              Brand identity and web presence for a creative agency specializing in visual storytelling.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12">
              <img 
                src="/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png" 
                alt="Creative Studio Brand Identity" 
                className="w-full object-cover aspect-[4/3] md:aspect-[16/10]"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* TLDR */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="TLDR">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
                <p className="text-base font-medium">Lumina Creative Studio</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Category</p>
                <p className="text-base font-medium">Brand Identity</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Industry</p>
                <p className="text-base font-medium">Creative Services</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Responsibilities</p>
                <p className="text-base font-medium">Brand Strategy, Web Design</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">My Role</p>
                <p className="text-base font-medium">Lead Designer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Timeline</p>
                <p className="text-base font-medium">6 weeks</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
        <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              How do you position a creative studio as an industry leader when their work speaks louder than their brand?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Lumina Creative Studio was a talented team of visual storytellers without a cohesive brand identity. 
              Their existing online presence didn't reflect the quality of their work or attract their ideal clients - 
              innovative brands seeking cutting-edge creative solutions.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              They needed a brand that would position them as industry leaders while creating a digital experience 
              that showcased their portfolio in a way that converted visitors into clients.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Our Approach">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Brand Strategy</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Developed a comprehensive brand strategy that positioned Lumina as the go-to studio for brands 
                  seeking innovative visual storytelling.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Visual Identity</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Created a bold, modern visual identity system including logo, color palette, typography, 
                  and brand guidelines that reflected their creative excellence.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Portfolio Showcase</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Designed an immersive portfolio experience that tells the story behind each project while 
                  highlighting the studio's unique approach and results.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-4">Content Strategy</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Developed messaging and content strategy that speaks directly to decision-makers at innovative 
                  brands and startups.
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
                  src="/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png"
                  alt="Creative Studio Brand Identity System"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative Studio Website Design"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative Studio Portfolio Showcase"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-8 md:px-16">
          <SplitSection label="Results">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">300%</div>
                <p className="text-muted-foreground">Increase in qualified leads</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">85%</div>
                <p className="text-muted-foreground">Client retention rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">40%</div>
                <p className="text-muted-foreground">Increase in project value</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-6">
                "The rebrand has been transformational. We're attracting higher-quality clients and commanding 
                premium rates. Our new identity perfectly captures who we are and where we're going."
              </blockquote>
              <div>
                <p className="font-medium">David Chen</p>
                <p className="text-muted-foreground">Creative Director, Lumina Creative Studio</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="creative-studio" />
      <Footer />
    </main>
  );
};

export default CaseStudyCreativeStudio;
