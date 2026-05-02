import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const projects = [
  {
    brand: "CVS Health",
    year: "2024",
    description: "Shipping colleague-facing design experience to reduce user errors and improve task completion across key workflows.",
    image: "/lovable-uploads/a7d983f9-a76f-43f1-9194-818eb65ae31f.jpg",
    link: "/case-study/mindful-wellness",
  },
  {
    brand: "Viveka Health",
    year: "2023",
    description: "Building cost transparency between families, insurance, and businesses — improving cost clarity and reducing support tickets.",
    image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
    link: "/case-study/artisan-marketplace",
  },
  {
    brand: "Tappt Health",
    year: "2022",
    description: "Modernizing medicine adherence from web to native mobile, improving patient engagement and daily active usage.",
    image: "/lovable-uploads/tappt-health-project.png",
    link: "/case-study/creative-studio",
  }
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="pt-32 pb-0 md:pt-40 md:pb-0">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Tiny fraction of my work
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              A collection of projects spanning product design, brand identity, and digital experiences — each crafted with intention and care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Cards */}
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16 py-16 md:py-24">
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
                <div className="bg-card-gradient rounded-2xl p-4 md:p-6 md:min-h-[calc(100vh-8rem)] flex items-center">
                  <div className={cn(
                    "flex flex-col gap-6 md:gap-8 w-full",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}>
                    <Link to={project.link} className="md:w-3/4">
                      <div className="rounded-2xl overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
                      </div>
                    </Link>
                    <div className="md:w-1/4 flex flex-col justify-center">
                      <Link to={project.link}>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium leading-snug mb-6 hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <Link to={project.link} className="text-sm font-medium text-accent-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                        View case study →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mt-16">More coming soon...</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
