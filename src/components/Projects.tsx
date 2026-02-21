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
      title: "Building the next night life ecosystem",
      description: "Created the brand identity and mobile app experience for a nightlife platform, launching an MVP that reached 10k+ downloads in its first month.",
      image: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      link: "/case-study/creative-studio",
    }
  ];

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-[#F8F6F1]', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
              <div className="bg-white/60 rounded-2xl p-6 md:p-8">
                <div className={cn(
                  "flex flex-col gap-6 md:gap-12",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  <Link to={project.link} className="md:w-3/5">
                    <div className="rounded-xl overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full aspect-[16/9] object-cover" />
                    </div>
                  </Link>
                  <div className="md:w-2/5 flex flex-col justify-center">
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
