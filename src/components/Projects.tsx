import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';
import { Circle, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ProjectsProps {
  className?: string;
}

const PulsingCircle = () => (
  <span className="relative flex items-center justify-center w-3 h-3">
    <Circle className="w-3 h-3 fill-current relative z-10" />
    <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
  </span>
);

interface ArchiveProject {
  year: string;
  name: string;
  role: string;
  client: string;
  organization: string;
}

const archiveProjects: ArchiveProject[] = [
  { year: "2024", name: "Digital Health Platform", role: "Lead Designer", client: "CVS Health", organization: "Healthcare" },
  { year: "2024", name: "Cost Transparency Tool", role: "UX Researcher", client: "Viveka Health", organization: "Healthcare" },
  { year: "2023", name: "Nightlife Ecosystem App", role: "Product Designer", client: "Synchronyx", organization: "Entertainment" },
  { year: "2023", name: "Patient Portal Redesign", role: "UX Designer", client: "CSL Behring", organization: "Biotech" },
  { year: "2023", name: "Event Management System", role: "Design Lead", client: "Arsht Center", organization: "Arts & Culture" },
  { year: "2022", name: "Insurance Dashboard", role: "Product Designer", client: "Viveka Health", organization: "Healthcare" },
  { year: "2022", name: "Mobile Banking App", role: "UX Designer", client: "FinTech Startup", organization: "Finance" },
  { year: "2021", name: "E-commerce Platform", role: "Design Consultant", client: "Retail Brand", organization: "Retail" },
  { year: "2021", name: "Learning Management System", role: "UX Researcher", client: "EdTech Company", organization: "Education" },
  { year: "2020", name: "Telehealth Application", role: "Product Designer", client: "Health Startup", organization: "Healthcare" },
];

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

  // Group archive projects by year
  const groupedByYear = archiveProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, ArchiveProject[]>);

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="projects" className={cn('py-16 md:py-24 bg-muted rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-30 -mt-8 md:-mt-16', className)}>
      <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl md:text-2xl font-serif font-medium flex items-center gap-3">
            <PulsingCircle />
            Work
          </h2>
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="mb-8 bg-transparent border-b border-border rounded-none w-full justify-start h-auto p-0">
            <TabsTrigger 
              value="recent" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 py-2 text-sm font-medium"
            >
              Recent Work
            </TabsTrigger>
            <TabsTrigger 
              value="archive" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 py-2 text-sm font-medium"
            >
              Archive
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="mt-0">
            <div className="flex flex-col gap-24">
              {projects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 50} duration={500} threshold={0.05}>
                  <div className="group block">
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
          </TabsContent>

          <TabsContent value="archive" className="mt-0">
            <div className="space-y-8">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b border-border pb-3">
                <span>Year</span>
                <span>Project</span>
                <span>Role</span>
                <span>Client</span>
                <span>Organization</span>
              </div>

              {/* Archive List */}
              <div className="space-y-0">
                {sortedYears.map((year) => (
                  <div key={year}>
                    {groupedByYear[year].map((project, index) => (
                      <FadeIn key={`${year}-${index}`} delay={index * 30} duration={400} threshold={0.05}>
                        <div className="group grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 py-4 border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer px-2 -mx-2 rounded">
                          {/* Mobile: Year as badge */}
                          <div className="md:hidden flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <span className="bg-secondary px-2 py-0.5 rounded">{project.year}</span>
                            <span>•</span>
                            <span>{project.organization}</span>
                          </div>
                          
                          {/* Desktop: Year column */}
                          <span className="hidden md:block text-sm text-muted-foreground">{project.year}</span>
                          
                          {/* Project Name */}
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {project.name}
                          </span>
                          
                          {/* Role */}
                          <span className="text-sm text-muted-foreground">{project.role}</span>
                          
                          {/* Client */}
                          <span className="text-sm text-muted-foreground">{project.client}</span>
                          
                          {/* Organization - hidden on mobile, shown in badge above */}
                          <span className="hidden md:block text-sm text-muted-foreground">{project.organization}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
