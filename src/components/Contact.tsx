import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FadeIn from './animations/FadeIn';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  className="bg-card border-border focus:border-foreground focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  className="bg-card border-border focus:border-foreground focus:ring-0"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="bg-card border-border focus:border-foreground focus:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Tell me about your project..."
                required 
                className="bg-card border-border focus:border-foreground focus:ring-0 resize-none"
              />
            </div>
            
            <button 
              type="submit" 
              className="pill-tag w-full justify-center"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
