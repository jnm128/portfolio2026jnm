import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Footer from '@/components/Footer';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@joannaminott.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Left Panel - Dark */}
        <div className="bg-[#1C1C1C] md:sticky md:top-0 md:h-screen flex flex-col justify-between p-8 md:p-16 pt-24 md:pt-32 pb-8 md:pb-32">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-3">
                Get in touch
              </h2>
              <p className="text-base md:text-lg text-white/60 font-serif mb-12">
                Interested in my expertise in UX or product? Here's how we can connect.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                <button
                  onClick={copyEmail}
                  className="group py-6 flex items-center justify-between w-full text-left"
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/60">Email</span>
                    <p className="text-lg font-serif text-white mt-1 group-hover:opacity-70 transition-opacity">
                      hello@joannaminott.com
                    </p>
                  </div>
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
                  )}
                </button>

                <a
                  href="https://linkedin.com/in/joannaminott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-t border-white/15 py-6 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/60">LinkedIn</span>
                    <p className="text-lg font-serif text-white mt-1 group-hover:opacity-70 transition-opacity">
                      Connect with me
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
                </a>

                <a
                  href="https://calendly.com/joannaminott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-t border-white/15 py-6 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/60">Schedule</span>
                    <p className="text-lg font-serif text-white mt-1 group-hover:opacity-70 transition-opacity">
                      Book a 30-min call
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="border-t border-white/15 pt-8">
              <span className="text-xs uppercase tracking-widest text-white/60">Availability</span>
              <p className="text-lg font-serif text-white mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open for new projects
              </p>
              <p className="text-sm text-white/60 mt-1">Open for projects starting Q3 2026</p>
            </div>
          </FadeIn>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Contact;
