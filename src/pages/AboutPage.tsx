import React from 'react';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink } from 'lucide-react';
import speakingMiami from '@/assets/speaking-miami.jpg';
import speakingUF from '@/assets/speaking-uf.jpg';
import arirangCover from '@/assets/arirang-cover.png';

const songOnRepeat = { title: "Arirang", artist: "BTS", url: "https://www.youtube.com/results?search_query=BTS+Arirang", cover: arirangCover };

const currentRead = {
  title: "The Artist's Way",
  author: "Julia Cameron",
  cover: "/lovable-uploads/artists-way-cover.jpg",
  note: "A transformative course in discovering and recovering your creative self — helping me reconnect with creativity as a daily practice.",
};

const linkedinPosts = [
  {
    category: "UX Strategy",
    title: "Why simplicity is the hardest design problem to solve",
    excerpt: "Most teams confuse simplicity with removing features. Real simplicity means making complex workflows feel effortless.",
    url: "https://www.linkedin.com/in/joannaminott",
  },
  {
    category: "Design Leadership",
    title: "The gap between user research and product decisions",
    excerpt: "We collect insights but rarely close the loop. Here's a framework I use to turn research into actionable design direction.",
    url: "https://www.linkedin.com/in/joannaminott",
  },
  {
    category: "Healthcare UX",
    title: "Designing for trust in digital health experiences",
    excerpt: "In healthcare, every interaction carries emotional weight. How we handle uncertainty in UI can make or break patient confidence.",
    url: "https://www.linkedin.com/in/joannaminott",
  },
];

const AboutPage = () => {

  return (
    <main className="relative bg-[#F8F6F1]">
      <ScrollAnimations />
      <div className="pt-24 md:pt-28">
        {/* Hero / Intro */}
        <section className="pt-0 pb-24 md:pb-32 bg-[#F8F6F1]">
            <div className="max-w-4xl mx-auto px-8 md:px-16">
          <FadeIn delay={200}>
              {/* Mobile-only title */}
              <h1 className="text-3xl font-serif text-foreground mb-4 md:hidden">
                About
              </h1>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Profile Image — first in DOM, appears on right on desktop */}
                <div className="relative w-full max-w-sm aspect-[5/6] mx-auto md:ml-auto md:order-last md:rotate-2 md:hover:-rotate-1 md:transition-transform md:duration-500 md:translate-y-4">
                  <div className="rounded-3xl overflow-hidden h-full">
                    <img
                      alt="Joanna Minott"
                      className="w-full h-full object-cover animate-fade-in"
                      src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex flex-col justify-center">
                  <h1 className="hidden md:block text-3xl md:text-5xl font-serif text-foreground mb-4">
                    About
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                    Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                    She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                    Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/joannaminott"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-base font-medium 
                               hover:bg-background hover:text-foreground border border-foreground 
                               transition-all duration-300 self-start"
                  >
                    Connect on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
          </FadeIn>
          </div>
        </section>

        {/* Writing, Current Read & Song on Repeat — Combined Dark Section */}
        <section className="bg-[#1C1C1C] text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-8 md:px-16">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Beyond the Pixels
              </h2>
              <p className="text-base md:text-lg text-white/60 font-serif max-w-2xl">
                What I'm reading, listening to, and thinking about when I'm not designing.
              </p>
            </div>
            <div className="space-y-0">
              {/* Writing / LinkedIn Posts */}
              <FadeIn delay={250}>
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Writing
                  </h2>
                  {linkedinPosts.map((post, i) => (
                    <div
                      key={i}
                      className="border-t border-white/15 py-10"
                    >
                      <span className="text-xs uppercase tracking-widest text-white/70 font-serif">{post.category}</span>
                      <p className="text-xl font-serif text-white mt-2 mb-3 leading-snug">{post.title}</p>
                      <p className="text-base text-white/70 leading-relaxed font-serif mb-4">{post.excerpt}</p>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-white hover:opacity-70 transition-opacity"
                      >
                        Read on LinkedIn
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Speaking Engagements */}
              <FadeIn delay={280}>
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6 pt-10">
                    Speaking
                  </h2>
                  <div className="border-t border-white/15 py-10">
                    <a href="https://www.linkedin.com/in/joannaminott" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden aspect-[16/10]">
                        <img
                          src={speakingMiami}
                          alt="Alumni panel at the University of Miami"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase tracking-widest text-white/70 font-serif">Alumni Panel</span>
                        <p className="text-xl font-serif text-white leading-snug mt-2">University of Miami</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                    </a>
                  </div>
                  <div className="border-t border-white/15 py-10">
                    <a href="https://www.linkedin.com/in/joannaminott" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden aspect-[16/10]">
                        <img
                          src={speakingUF}
                          alt="Guest speaker at University of Florida's Gator Design student org"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase tracking-widest text-white/70 font-serif">Guest Speaker</span>
                        <p className="text-xl font-serif text-white leading-snug mt-2">University of Florida — Gator Design</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Current Read */}
              <FadeIn delay={300}>
                <div className="border-t border-white/15 py-10">
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Current Read
                  </h2>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-24 md:w-32 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={currentRead.cover}
                        alt={currentRead.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg md:text-xl font-serif text-white mb-1">
                        {currentRead.title}
                      </p>
                      <p className="text-sm text-white/70 mb-4">
                        by {currentRead.author}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed font-serif">
                        {currentRead.note}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Song on Repeat */}
              <FadeIn delay={400}>
                <div className="border-t border-b border-white/15 py-10">
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Work Playlist
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={songOnRepeat.cover}
                        alt={songOnRepeat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-serif text-white leading-tight">{songOnRepeat.title}</p>
                      <p className="text-sm text-white/70">{songOnRepeat.artist}</p>
                    </div>
                    <a
                      href={songOnRepeat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-white hover:opacity-70 transition-opacity"
                      aria-label={`Listen to ${songOnRepeat.title} on YouTube`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
