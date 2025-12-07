
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects = [
    {
      title: "Mindful Wellness",
      description: "A holistic wellness platform connecting users with mental health resources and mindfulness practices.",
      image: "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png",
      category: "UX/UI Design & Development",
      link: "/case-study/mindful-wellness"
    },
    {
      title: "Artisan Marketplace",
      description: "E-commerce platform for local artisans to showcase and sell their handcrafted products online.",
      image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
      category: "Web Development",
      link: "/case-study/artisan-marketplace"
    },
    {
      title: "Creative Studio",
      description: "Brand identity and web presence for a creative agency specializing in visual storytelling.",
      image: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      category: "Brand Identity & Design",
      link: "/case-study/creative-studio"
    }
  ];

  return (
    <section id="projects" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">Recent work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase our approach to thoughtful design and development.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={project.link}
              data-project-card
              className="block relative bg-white border transition-all duration-300 hover:shadow-lg aspect-[4/3] md:aspect-[3/2] overflow-hidden group"
            >
              {/* Background Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* White Rectangle Overlay with Text */}
              <div className="absolute bottom-8 left-8 bg-white p-6 md:p-8 shadow-lg max-w-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-xs font-medium text-orangery-500 mb-3 inline-block uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-3">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="mt-4 text-sm font-medium text-gray-600 group-hover:text-orangery-500 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
