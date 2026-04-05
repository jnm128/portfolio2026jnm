import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import PopIn from '@/components/animations/PopIn';

const CaseStudyArtisanMarketplace = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 bg-[#F8F6F1]">
        <div className="container mx-auto px-8 md:px-16">
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
                src="/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png" 
                alt="Artisan Marketplace Platform" 
                className="w-full object-cover aspect-[16/9]"
              />
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight mb-4">
                Artisan Marketplace
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-12 max-w-3xl">
                E-commerce platform for local artisans to showcase and sell their handcrafted products online.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Role</h3>
                  <p className="text-base text-foreground font-serif">E-commerce Development, UX Design</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">The Problem</h3>
                  <p className="text-base text-foreground font-serif">Local artisans struggling to <span className="font-semibold">reach customers</span> beyond their immediate geographic area.</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">My Team</h3>
                  <p className="text-base text-foreground font-serif">Local Artisan Collective</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">Timeline</h3>
                  <p className="text-base text-foreground font-serif">12 weeks</p>
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
                Local artisans were struggling to reach customers beyond their immediate geographic area. Traditional craft fairs 
                and local markets limited their sales potential, especially during the pandemic when in-person events were restricted.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-16">
                They needed a digital marketplace that could showcase the unique story behind each handcrafted item while providing 
                a seamless shopping experience that competed with major e-commerce platforms.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4">Market Analysis</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                    Analyzed successful artisan marketplaces and identified gaps in storytelling and community building 
                    that we could address.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4">User Experience</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                    Designed intuitive product discovery flows that highlight the artisan's story and craftsmanship process 
                    alongside traditional product details.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4">Technical Architecture</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                    Built a scalable e-commerce platform with integrated payment processing, inventory management, 
                    and shipping calculation systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4">Mobile Optimization</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                    Ensured seamless mobile shopping experience with touch-optimized product galleries and streamlined 
                    checkout process.
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
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">E-commerce Platform</h3>
                  </FadeIn>
                  <PopIn delay={100}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png" 
                        alt="Artisan Marketplace E-commerce Platform" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={200}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Product Gallery & Details</h3>
                  </FadeIn>
                  <PopIn delay={200}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80" 
                        alt="Artisan Marketplace Product Gallery" 
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </PopIn>
                </div>

                <div className="text-center">
                  <FadeIn delay={300}>
                    <h3 className="text-lg md:text-xl font-medium mb-6 text-foreground">Artisan Profile Pages</h3>
                  </FadeIn>
                  <PopIn delay={300}>
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80" 
                        alt="Artisan Marketplace Profile Pages" 
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
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">400%</div>
                  <p className="text-muted-foreground">Increase in artisan sales</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">50+</div>
                  <p className="text-muted-foreground">Artisans onboarded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-orangery-500 mb-2">$250K</div>
                  <p className="text-muted-foreground">Revenue generated in first year</p>
                </div>
              </div>

              <div className="bg-background p-8 md:p-12 border border-border">
                <blockquote className="text-xl md:text-2xl font-serif text-center text-muted-foreground mb-6">
                  "This platform has completely changed how we connect with customers. Our sales have quadrupled, 
                  and we're reaching people across the country who truly appreciate handcrafted goods."
                </blockquote>
                <div className="text-center">
                  <p className="font-medium">Maria Rodriguez</p>
                  <p className="text-muted-foreground">Ceramic Artist & Collective Co-founder</p>
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

export default CaseStudyArtisanMarketplace;