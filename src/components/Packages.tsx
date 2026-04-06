
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface PackagesProps {
  className?: string;
}

const Packages: React.FC<PackagesProps> = ({ className }) => {
  const [showRetainer, setShowRetainer] = useState(true);

  const projectPackages = [
    {
      name: "Espresso",
      price: "$2,500",
      duration: "2-3 weeks",
      description: "Perfect for small businesses and startups needing a professional web presence.",
      features: [
        "Custom 5-page website",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions"
      ]
    },
    {
      name: "Americano",
      price: "$5,000",
      duration: "4-6 weeks",
      description: "Ideal for growing businesses that need comprehensive digital solutions.",
      features: [
        "Custom 10-page website",
        "Advanced UX/UI design",
        "Content management system",
        "E-commerce integration",
        "Performance optimization",
        "3 rounds of revisions"
      ],
      popular: true
    },
    {
      name: "French Press",
      price: "$8,500",
      duration: "8-12 weeks",
      description: "For established businesses requiring premium design and functionality.",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced animations",
        "Third-party integrations",
        "Design system creation",
        "Ongoing support included"
      ]
    }
  ];

  const retainerPackages = [
    {
      name: "UX Starter",
      price: "$3,500",
      duration: "per month",
      description: "Essential UX services for continuous product improvement and user research.",
      features: [
        "20 hours of UX work monthly",
        "User research & analysis",
        "Wireframing & prototyping",
        "Usability testing",
        "Design recommendations",
        "Monthly strategy sessions"
      ]
    },
    {
      name: "Design Partner",
      price: "$6,500",
      duration: "per month",
      description: "Comprehensive design partnership for growing teams and evolving products.",
      features: [
        "40 hours of design work monthly",
        "UX/UI design & research",
        "Web development support",
        "Brand consistency guidance",
        "Design system maintenance",
        "Bi-weekly progress reviews",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Full Stack Design",
      price: "$10,000",
      duration: "per month",
      description: "Complete design and development partnership for ambitious projects.",
      features: [
        "60+ hours of work monthly",
        "Full UX/UI design services",
        "Web development & coding",
        "Product strategy consulting",
        "Team collaboration & training",
        "Weekly strategy calls",
        "Dedicated project management"
      ]
    }
  ];

  const currentPackages = showRetainer ? retainerPackages : projectPackages;

  return (
    <section 
      id="packages" 
      className={cn('py-20 md:py-32 bg-gray-50 overflow-hidden', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Packages</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">Choose your blend</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing options to suit different project needs and budgets. Each option delivers exceptional quality.
          </p>
          
          {/* Custom Linear Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={cn("text-sm font-medium transition-colors", !showRetainer && "text-orangery-600")}>
              One-Time Projects
            </span>
            
            {/* Custom Line & Circle Toggle */}
            <button 
              className="relative w-14 h-6 flex items-center cursor-pointer"
              onClick={() => setShowRetainer(!showRetainer)}
              aria-label="Toggle between project and retainer packages"
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-foreground/20" />
              <div 
                className={cn(
                  "absolute w-5 h-5 rounded-full border-2 border-foreground bg-background transition-all duration-400 ease-out",
                  showRetainer 
                    ? "left-[calc(100%-1.25rem)]" 
                    : "left-0"
                )}
              />
            </button>

            <span className={cn("text-sm font-medium transition-colors", showRetainer && "text-orangery-600")}>
              Ongoing Retainer
            </span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {currentPackages.map((pkg, index) => (
            <div
              key={pkg.name}
              data-package-card
              className={cn(
                "relative bg-white rounded-2xl p-8 border h-full shadow-sm hover:shadow-lg transition-shadow duration-300",
                pkg.popular && "border-orangery-500"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orangery-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-medium mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-orangery-600 mb-1">{pkg.price}</div>
                <div className="text-sm text-muted-foreground">{pkg.duration}</div>
              </div>

              <p className="text-muted-foreground mb-6 text-center">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orangery-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-3 px-6 font-medium transition-colors",
                pkg.popular 
                  ? "bg-orangery-500 text-white hover:bg-orangery-600" 
                  : "border border-orangery-500 text-orangery-500 hover:bg-orangery-50"
              )}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <FadeIn delay={500}>
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm border">
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">Need a custom plan?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project is unique. If none of our packages fit your specific needs, let's create a custom solution tailored just for you.
            </p>
            <button className="bg-orangery-500 text-white px-8 py-3 font-medium hover:bg-orangery-600 transition-colors">
              Let's Talk
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Packages;
