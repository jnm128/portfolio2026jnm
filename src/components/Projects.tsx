import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
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
      title: "Modernizing medicine adherence from web to native mobile with Tappt Health",
      description: "Led the migration of a web-based medication adherence platform to a native mobile experience for Synchronyx, improving patient engagement and daily active usage by 50%.",
      image: "/lovable-uploads/tappt-health-project.png",
      link: "/case-study/creative-studio",
    }
  ];

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-8 md:px-16 max-w-[1600px]">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Selected Work</p>
        </div>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-4">
            Helping teams ship & build products people love
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
              <div className="bg-white/60 rounded-2xl p-8 md:p-12">
                <div className={cn(
                  "flex flex-col gap-8 md:gap-16",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  <Link to={project.link} className="md:w-2/3">
                    <div className="rounded-2xl overflow-hidden">
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
      </div>
    </section>
  );
};

export default Projects;
