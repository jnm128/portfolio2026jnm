import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

type Tab = 'recent' | 'archives';

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<Tab>('recent');

  const archives = [
    { name: 'Design System Overhaul', company: 'CSL Behring', focusArea: 'Design Systems', industry: 'Biotech', role: 'Lead Designer', year: '2023', link: '/case-study/mindful-wellness' },
    { name: 'Patient Portal Redesign', company: 'Adrienne Arsht Center', focusArea: 'UX Research', industry: 'Arts & Culture', role: 'UX Designer', year: '2022', link: '/case-study/artisan-marketplace' },
    { name: 'Mobile App MVP', company: 'Synchronyx', focusArea: 'Product Strategy', industry: 'Health Tech', role: 'Product Designer', year: '2021', link: '/case-study/creative-studio' },
    { name: 'E-Commerce Platform', company: 'Freelance', focusArea: 'UI Design', industry: 'Retail', role: 'UI/UX Designer', year: '2020', link: '/case-study/creative-studio' },
    { name: 'Internal Dashboard', company: 'CVS Health', focusArea: 'Enterprise UX', industry: 'Healthcare', role: 'Senior Designer', year: '2019', link: '/case-study/mindful-wellness' },
  ];

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

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-[#F8F6F1]', className)}>
      <div className="<div className="container mx-auto px-8 md:px-16 max-w-[1600px]"> className="container mx-auto px-8 md:px-16 max-w-[1600px]">">
        {/* Section label */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Selected Work</p>
          <div className="flex items-center gap-3">
            <span className={cn("text-sm transition-colors duration-300", activeTab === 'recent' ? 'text-foreground font-medium' : 'text-muted-foreground')}>Recent</span>
            <button
              onClick={() => setActiveTab(activeTab === 'recent' ? 'archives' : 'recent')}
              className="relative w-14 h-6 flex items-center cursor-pointer"
              aria-label="Toggle between recent and past"
            >
              <div className={cn("absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] transition-colors duration-400", activeTab === 'archives' ? 'bg-foreground' : 'bg-foreground/20')} />
              <div
                className={cn(
                  'absolute w-5 h-5 rounded-full bg-foreground transition-all duration-400 ease-out',
                  activeTab === 'archives'
                    ? 'left-[calc(100%-1.25rem)]'
                    : 'left-0'
                )}
              />
            </button>
            <span className={cn("text-sm transition-colors duration-300", activeTab === 'archives' ? 'text-foreground font-medium' : 'text-muted-foreground')}>Past</span>
          </div>
        </div>

        {activeTab === 'recent' ? (
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
        ) : (
        <div className="flex flex-col">
          {/* Header */}
          <div className="hidden md:flex items-center py-3 border-b border-foreground/20 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="w-[28%]">Project Name</span>
            <span className="w-[18%]">Company / Org</span>
            <span className="w-[16%]">Focus Area</span>
            <span className="w-[14%]">Industry</span>
            <span className="w-[14%]">Role</span>
            <span className="w-[10%] text-right">Year</span>
          </div>
          {archives.map((item, index) => (
            <FadeIn key={item.name} delay={index * 50} duration={400} threshold={0.05}>
              <div className={cn("flex flex-col md:flex-row md:items-center py-4 px-4 border-b border-foreground/10 gap-1 md:gap-0", index % 2 === 1 && "bg-foreground/[0.03]")}>
                <Link to={item.link} className="md:w-[28%] font-medium text-sm hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1.5">
                  {item.name}
                  <ExternalLink size={14} className="text-muted-foreground" />
                </Link>
                <span className="text-sm text-muted-foreground md:w-[18%]">{item.company}</span>
                <span className="text-sm text-muted-foreground md:w-[16%]">{item.focusArea}</span>
                <span className="text-sm text-muted-foreground md:w-[14%]">{item.industry}</span>
                <span className="text-sm text-muted-foreground md:w-[14%]">{item.role}</span>
                <span className="text-sm text-muted-foreground md:w-[10%] md:text-right">{item.year}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
