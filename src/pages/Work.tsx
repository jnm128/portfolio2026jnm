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
    image: "/lovable-uploads/cvs-health-card.png",
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
  },
  {
    brand: "Mindful Wellness",
    year: "2021",
    description: "Designing a calming meditation experience that helps users build sustainable mindfulness habits through guided sessions.",
    image: "/lovable-uploads/mindful-wellness-card.png",
    link: "/case-study/mindful-wellness",
  }
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="pt-32 pb-0 md:pt-40 md:pb-0">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif text-title mb-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {projects.map((project, index) => (
              <FadeIn key={project.brand} delay={index * 50} duration={500} threshold={0.05}>
                <Link to={project.link} className="group block">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.brand} case study`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm">
                      <span className="text-sm font-medium text-foreground">{project.brand}</span>
                      <span className="text-sm text-hint">·</span>
                      <span className="text-sm text-hint">{project.year}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-hint leading-relaxed">
                    {project.description}
                  </p>
                </Link>
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
