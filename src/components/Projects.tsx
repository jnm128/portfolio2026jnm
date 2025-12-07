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
      image: "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png",
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
    }
  ];

  return (
    <section id="projects" className={cn('py-20 md:py-28 bg-background', className)}>
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-16">
            Recent work
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <Link
                to={project.link}
                className="group grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                {/* Project Image */}
                <div className={cn(
                  "relative rounded-2xl overflow-hidden",
                  index % 2 === 1 && "md:order-2"
                )}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Project Details */}
                <div className={cn(
                  "space-y-6",
                  index % 2 === 1 && "md:order-1"
                )}>
                  <h3 className="text-xl md:text-2xl font-serif leading-relaxed group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill-tag text-xs">
                        {tag}
                      </span>
                    ))}
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
