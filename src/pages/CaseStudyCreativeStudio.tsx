import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import PopIn from '@/components/animations/PopIn';

const CaseStudyCreativeStudio = () => {
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
                src="/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png" 
                alt="Creative Studio Brand Identity" 
                className="w-full object-cover aspect-[16/9]"
              />
            </div>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight mb-4">
                Creative Studio
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-12 max-w-3xl">
                Brand identity and web presence for a creative agency specializing in visual storytelling.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Role</h3>
                  <p className="text-base text-foreground font-serif">Brand Identity, Web Design, Strategy</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">The Problem</h3>
                  <p className="text-base text-foreground font-serif">A talented team without a <span className="font-semibold">cohesive brand identity</span> to attract their ideal clients.</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Team</h3>
                  <p className="text-base text-foreground font-serif">Lumina Creative Studio</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">Timeline</h3>
                  <p className="text-base text-foreground font-serif">10 weeks</p>
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
                Lumina Creative Studio was a talented team of visual storytellers without a cohesive brand identity. 
                Their existing online presence didn't reflect the quality of their work or attract their ideal clients - 
                innovative brands seeking cutting-edge creative solutions.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-16">
                They needed a brand that would position them as industry leaders while creating a digital experience 
                that showcased their portfolio in a way that converted visitors into clients.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
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
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Brand Identity System</h3>
                  </FadeIn>
                  <PopIn delay={100}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png" 
                        alt="Creative Studio Brand Identity System" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={200}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Website Design</h3>
                  </FadeIn>
                  <PopIn delay={200}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
                        alt="Creative Studio Website Design" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={300}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Portfolio Showcase</h3>
                  </FadeIn>
                  <PopIn delay={300}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                        alt="Creative Studio Portfolio Showcase" 
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
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">300%</div>
                  <p className="text-muted-foreground">Increase in qualified leads</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">85%</div>
                  <p className="text-muted-foreground">Client retention rate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">40%</div>
                  <p className="text-muted-foreground">Increase in project value</p>
                </div>
              </div>

              <div className="bg-background p-8 md:p-12 border border-border">
                <blockquote className="text-xl md:text-2xl font-serif text-center text-muted-foreground mb-6">
                  "The rebrand has been transformational. We're attracting higher-quality clients and commanding 
                  premium rates. Our new identity perfectly captures who we are and where we're going."
                </blockquote>
                <div className="text-center">
                  <p className="font-medium">David Chen</p>
                  <p className="text-muted-foreground">Creative Director, Lumina Creative Studio</p>
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

export default CaseStudyCreativeStudio;