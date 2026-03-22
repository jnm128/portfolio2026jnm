import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

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

const archives = [
  { name: 'Design System Overhaul', company: 'CSL Behring', focusArea: 'Design Systems', industry: 'Biotech', role: 'Lead Designer', year: '2023', link: '/case-study/mindful-wellness' },
  { name: 'Patient Portal Redesign', company: 'Adrienne Arsht Center', focusArea: 'UX Research', industry: 'Arts & Culture', role: 'UX Designer', year: '2022', link: '/case-study/artisan-marketplace' },
  { name: 'Mobile App MVP', company: 'Synchronyx', focusArea: 'Product Strategy', industry: 'Health Tech', role: 'Product Designer', year: '2021', link: '/case-study/creative-studio' },
  { name: 'E-Commerce Platform', company: 'Freelance', focusArea: 'UI Design', industry: 'Retail', role: 'UI/UX Designer', year: '2020', link: '/case-study/creative-studio' },
  { name: 'Internal Dashboard', company: 'CVS Health', focusArea: 'Enterprise UX', industry: 'Healthcare', role: 'Senior Designer', year: '2019', link: '/case-study/mindful-wellness' },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Selected Work</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6">
              Tiny fraction of my work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A collection of projects spanning product design, brand identity, and digital experiences — each crafted with intention and care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Cards */}
      <section className="pb-16 md:pb-24 bg-[#F8F6F1]">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px] py-16 md:py-24">
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

          {/* Archives Table */}
          <div className="mt-24">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Past Work</p>
            <div className="flex flex-col">
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
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white">
                Interested in collaborating?
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                I'm always open to new projects and partnerships. Let's create something meaningful together.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
