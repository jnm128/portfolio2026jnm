
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin } from 'lucide-react';
import Button from '@/components/ui-custom/Button';
import FadeIn from './animations/FadeIn';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className={cn('py-20 md:py-32 bg-gray-50 relative', className)}>
      {/* Gradient overlay to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="space-y-6">
            <div>
              <span className="text-sm md:text-base font-medium text-orangery-500 mb-2 inline-block">Get in touch</span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">Let's brew something great together</h2>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something exceptional together.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">What I can help with:</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• UX/UI Design & Strategy</li>
                    <li>• Web Development & Optimization</li>
                    <li>• Brand Identity & Visual Design</li>
                    <li>• Design Systems & Guidelines</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Connect with me:</h3>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="mailto:hello@breweddesigns.com" 
                    className="flex items-center text-muted-foreground hover:text-orangery-500 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    hello@breweddesigns.com
                  </a>
                  <a 
                    href="https://linkedin.com/in/breweddesigns" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-orangery-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <Card className="border-transparent shadow-none bg-transparent !border-0 !outline-none !ring-0">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="border-gray-200 focus:border-orangery-500 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="border-gray-200 focus:border-orangery-500 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="border-gray-200 focus:border-orangery-500 focus:outline-none focus:ring-0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Input 
                    id="projectType" 
                    name="projectType" 
                    placeholder="e.g., Website redesign, Brand identity, etc." 
                    className="border-gray-200 focus:border-orangery-500 focus:outline-none focus:ring-0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell me about your project, goals, and timeline..."
                    required 
                    className="border-gray-200 focus:border-orangery-500 focus:outline-none focus:ring-0"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  className="bg-orangery-500 hover:bg-orangery-600"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
