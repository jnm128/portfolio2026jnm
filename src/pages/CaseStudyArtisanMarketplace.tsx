import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';

const CaseStudyArtisanMarketplace = () => {
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
            <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-2">
              Artisan Marketplace
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              E-commerce platform for local artisans to showcase and sell their handcrafted products online.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'Artisan Collective' },
                { label: 'Industry', value: 'Retail & Crafts' },
                { label: 'Category', value: 'E-commerce' },
                { label: 'My Role', value: 'Lead Designer' },
                { label: 'Team', value: '1 PM, 3 Engineers' },
                { label: 'Timeline', value: '12 weeks' },
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
                src="/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png" 
                alt="Artisan Marketplace Platform" 
                className="w-full object-cover aspect-[4/3] md:aspect-[16/10]"
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
              How can local artisans compete in a digital-first marketplace while preserving the story behind their craft?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Local artisans were struggling to reach customers beyond their immediate geographic area. Traditional craft fairs 
              and local markets limited their sales potential, especially during the pandemic when in-person events were restricted.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              They needed a digital marketplace that could showcase the unique story behind each handcrafted item while providing 
              a seamless shopping experience that competed with major e-commerce platforms.
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
                  src="/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png"
                  alt="Artisan Marketplace E-commerce Platform"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80"
                  alt="Artisan Marketplace Product Gallery"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80"
                  alt="Artisan Marketplace Profile Pages"
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
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">400%</div>
                <p className="text-muted-foreground">Increase in artisan sales</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">50+</div>
                <p className="text-muted-foreground">Artisans onboarded</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">$250K</div>
                <p className="text-muted-foreground">Revenue generated in first year</p>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-6">
                "This platform has completely changed how we connect with customers. Our sales have quadrupled, 
                and we're reaching people across the country who truly appreciate handcrafted goods."
              </blockquote>
              <div>
                <p className="font-medium">Maria Rodriguez</p>
                <p className="text-muted-foreground">Ceramic Artist & Collective Co-founder</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="artisan-marketplace" />
      <Footer />
    </main>
  );
};

export default CaseStudyArtisanMarketplace;
