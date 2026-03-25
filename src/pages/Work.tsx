import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: "Shipping colleague facing design experience with CVS Health",
    description: "Led end-to-end product design for an internal tools platform, reducing user errors by 40% and increasing task completion rates across key workflows.",
    image: "/lovable-uploads/cvs-health-project.png",
    link: "/case-study/mindful-wellness",
  },
  {
    title: "Building cost transparency between families, insurance and businesses with Viveka Health",
    description: "Designed a transparent pricing experience that bridges families, insurers, and providers — improving cost clarity by 60% and reducing support tickets by 35%.",
    image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
    link: "/case-study/artisan-marketplace",
  },
  {
    title: "Building the next night life ecosystem",
    description: "Created the brand identity and mobile app experience for a nightlife platform, launching an MVP that reached 10k+ downloads in its first month.",
    image: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
    link: "/case-study/creative-studio",
  },
  {
    title: "Modernizing medicine adherence from web to native mobile with Tappt Health",
    description: "Led the migration of a web-based medication adherence platform to a native mobile experience for Synchronyx, improving patient engagement and daily active usage by 50%.",
    image: "/lovable-uploads/tappt-health-project.png",
    link: "/case-study/creative-studio",
  }
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="pt-32 pb-0 md:pt-40 md:pb-0">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
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
      <section className="bg-[#F8F6F1]">
        <div className="<div className="max-w-4xl mx-auto px-8 md:px-16 py-16 md:py-24"> md:py-24">
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
                <div className="bg-white/60 rounded-2xl p-8 md:p-12">
                  <div className={cn(
                    "flex flex-col gap-8 md:gap-16",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}>
                    <Link to={project.link} className="md:w-2/3">
                      <div className="rounded-xl overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-cover" />
                      </div>
                    </Link>
                    <div className="md:w-1/3 flex flex-col justify-center">
                      <Link to={project.link}>
                        <h3 className="text-lg md:text-xl font-serif font-medium leading-relaxed mb-4 hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
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

      {/* Dark CTA */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white">
                Interested in collaborating?
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                I'm always open to new projects and partnerships. Let's create something meaningful together.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
