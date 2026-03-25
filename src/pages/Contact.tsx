import React from 'react';
import { ExternalLink } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Contact = () => {
  return (
    <main className="min-h-screen grid md:grid-cols-2">
      {/* Left Panel - Dark */}
      <div className="bg-[#1C1C1C] md:sticky md:top-0 md:h-screen flex items-end p-8 md:p-16">
        <FadeIn>
          <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            Let's create something meaningful together
          </h1>
        </FadeIn>
      </div>

      {/* Right Panel - Cream */}
      <div className="bg-[#F8F6F1] p-8 md:p-16 pt-24 md:pt-32">
        <FadeIn delay={100}>
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
              Get in touch
            </h2>

            <a
              href="mailto:hello@joannaminott.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-foreground/10 py-8 flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <p className="text-lg font-serif text-foreground mt-1 group-hover:opacity-70 transition-opacity">
                  hello@joannaminott.com
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>

            <a
              href="https://linkedin.com/in/joannaminott"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-foreground/10 py-8 flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</span>
                <p className="text-lg font-serif text-foreground mt-1 group-hover:opacity-70 transition-opacity">
                  Connect with me
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>

            <a
              href="https://calendly.com/joannaminott"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-b border-foreground/10 py-8 flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Schedule</span>
                <p className="text-lg font-serif text-foreground mt-1 group-hover:opacity-70 transition-opacity">
                  Book a 30-min call
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>

            <h2 className="text-xl font-serif text-foreground mt-16 mb-8">
              Currently
            </h2>

            <div className="border-t border-foreground/10 py-8">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Location</span>
              <p className="text-lg font-serif text-foreground mt-1">New York, NY</p>
              <p className="text-sm text-muted-foreground mt-1">Open to remote collaboration worldwide</p>
            </div>

            <div className="border-t border-b border-foreground/10 py-8">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Availability</span>
              <p className="text-lg font-serif text-foreground mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open for new projects
              </p>
              <p className="text-sm text-muted-foreground mt-1">Accepting clients for Q1 2025</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
};

export default Contact;
