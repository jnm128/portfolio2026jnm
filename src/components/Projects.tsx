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
      image: "/lovable-uploads/cvs-health-project.png",
      tags: ["Product Design", "Healthcare"],
      link: "/case-study/mindful-wellness"
    },
    {
      title: "Building cost transparency between families, insurance and businesses with Viveka Health",
      image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
      tags: ["UX Research", "Strategy"],
      link: "/case-study/artisan-marketplace"
    },
    {
      title: "Building the next night life ecosystem",
      image: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      tags: ["Brand Identity", "Mobile App"],
      link: "/case-study/creative-studio"
    },
    {
      title: "Reimagining digital banking for the next generation",
      image: "/lovable-uploads/62126c48-0026-4214-b2f5-0221d25a88f4.png",
      tags: ["Fintech", "Product Design"],
      link: "/case-study/digital-banking"
    }
  ];

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-surface-1', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12">
            Recent work
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <Link
                to={project.link}
                className="group block"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  {/* Text Content - Left */}
                  <div className="md:w-1/3 order-2 md:order-1">
                    <h3 className="text-lg md:text-xl font-serif leading-relaxed group-hover:text-muted-foreground transition-colors mb-3">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill-tag text-xs px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Image - Right */}
                  <div className="md:w-2/3 order-1 md:order-2">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
