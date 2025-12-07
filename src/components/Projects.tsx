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
    <section id="projects" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12">
            Recent work
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <Link
                to={project.link}
                className="group block relative"
              >
                {/* Image Card */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Text Card Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg">
                      <h3 className="text-xs md:text-sm font-serif leading-relaxed group-hover:text-muted-foreground transition-colors mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="pill-tag text-[10px] px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
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
