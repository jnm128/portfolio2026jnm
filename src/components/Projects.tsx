import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';
import { Circle, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface ProjectsProps {
  className?: string;
}

const PulsingCircle = () => (
  <span className="relative flex items-center justify-center w-3 h-3">
    <Circle className="w-3 h-3 fill-current relative z-10" />
    <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
  </span>
);

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects = [
    {
      title: "Shipping colleague facing design experience with CVS Health",
      image: "/lovable-uploads/cvs-health-project.png",
      tags: ["Product Design", "Healthcare"],
      link: "/case-study/mindful-wellness",
      tldr: ["6 month engagement", "Reduced user errors by 40%", "Increased task completion rate by 25%"]
    },
    {
      title: "Building cost transparency between families, insurance and businesses with Viveka Health",
      image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
      tags: ["UX Research", "Strategy"],
      link: "/case-study/artisan-marketplace",
      tldr: ["4 month engagement", "Improved cost transparency by 60%", "Reduced customer support tickets by 35%"]
    },
    {
      title: "Building the next night life ecosystem",
      image: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      tags: ["Brand Identity", "Mobile App"],
      link: "/case-study/creative-studio",
      tldr: ["3 month engagement", "Launched MVP with 10k+ downloads in first month"]
    }
  ];

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-muted rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-30 -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <h2 className="text-xl md:text-2xl font-serif font-medium mb-12 flex items-center gap-3">
          <PulsingCircle />
          Recent Work
        </h2>
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
              <div className="group block transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col-reverse md:flex-row md:items-center gap-6 md:gap-12">
                  {/* Text Content */}
                  <div className="md:w-1/5">
                    <Link to={project.link}>
                      <h3 className="text-lg md:text-xl font-serif leading-relaxed group-hover:text-muted-foreground transition-colors mb-4">
                        {project.title}
                      </h3>
                    </Link>
                    
                    {/* TLDR Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full border-b border-muted-foreground/30 pb-2 mb-2">
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        <span>TLDR</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-6 text-sm text-foreground mb-4">
                        <ul className="list-disc list-inside space-y-1">
                          {project.tldr.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Tags - moved below collapsibles */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill-tag text-xs px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Image - Larger */}
                  <Link to={project.link} className="md:w-4/5">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                  </Link>
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
