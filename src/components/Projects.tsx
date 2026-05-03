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
      brand: "CVS Health",
      year: "2024",
      description: "Shipping colleague-facing design experience to reduce user errors and improve task completion across key workflows.",
      image: "/lovable-uploads/cvs-health-card.png",
      link: "/case-study/cvs-health",
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

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-5 md:px-16 max-w-[1600px]">

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
      </div>
    </section>
  );
};

export default Projects;
