import React from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Content */}
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              Let's create something meaningful together
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-16">
              Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Methods */}
            <FadeIn delay={100}>
              <div className="space-y-8">
                <h2 className="text-xl font-serif font-medium mb-6">Get in touch</h2>
                
                <a 
                  href="mailto:hello@joannaminott.com" 
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Email</span>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      hello@joannaminott.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/joannaminott" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">LinkedIn</span>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      Connect with me
                    </p>
                  </div>
                </a>

                <a 
                  href="https://calendly.com/joannaminott" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Schedule</span>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      Book a 30-min call
                    </p>
                  </div>
                </a>
              </div>
            </FadeIn>

            {/* Location & Availability */}
            <FadeIn delay={200}>
              <div className="space-y-8">
                <h2 className="text-xl font-serif font-medium mb-6">Currently</h2>
                
                <div className="p-6 rounded-2xl bg-secondary/30">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="text-lg font-medium mt-1">New York, NY</p>
                  <p className="text-muted-foreground text-sm mt-1">Open to remote collaboration worldwide</p>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/30">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <p className="text-lg font-medium mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open for new projects
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Accepting clients for Q1 2025</p>
                </div>

                <div className="p-6 rounded-2xl border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24-48 hours. For urgent inquiries, please mention it in your message.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
