import React from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <div className="pt-24 md:pt-28 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight">
              Let's create something meaningful together
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl mb-16">
              Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Methods */}
            <FadeIn delay={100}>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</p>
                
                <a 
                  href="mailto:hello@joannaminott.com" 
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-foreground/10 hover:border-foreground/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F8F6F1] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Email</span>
                    <p className="text-sm text-foreground font-medium">
                      hello@joannaminott.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/joannaminott" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-foreground/10 hover:border-foreground/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F8F6F1] flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">LinkedIn</span>
                    <p className="text-sm text-foreground font-medium">
                      Connect with me
                    </p>
                  </div>
                </a>

                <a 
                  href="https://calendly.com/joannaminott" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-foreground/10 hover:border-foreground/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F8F6F1] flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Schedule</span>
                    <p className="text-sm text-foreground font-medium">
                      Book a 30-min call
                    </p>
                  </div>
                </a>
              </div>
            </FadeIn>

            {/* Location & Availability */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Currently</p>
                
                <div className="p-5 rounded-2xl bg-white border border-foreground/10">
                  <span className="text-xs text-muted-foreground">Location</span>
                  <p className="text-sm font-medium text-foreground mt-1">New York, NY</p>
                  <p className="text-xs text-muted-foreground mt-1">Open to remote collaboration worldwide</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-foreground/10">
                  <span className="text-xs text-muted-foreground">Availability</span>
                  <p className="text-sm font-medium text-foreground mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open for new projects
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Accepting clients for Q1 2025</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-foreground/10">
                  <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                    I typically respond within 24-48 hours. For urgent inquiries, please mention it in your message.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
