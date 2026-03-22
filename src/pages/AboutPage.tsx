import React from 'react';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink } from 'lucide-react';

const songOnRepeat = { title: "Clair de Lune", artist: "Debussy", url: "https://www.youtube.com/watch?v=CvFH_6DNRCY", cover: "/lovable-uploads/artists-way-cover.jpg" };

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
            <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn delay={200}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Bio Text */}
                <div className="flex flex-col justify-center">
                  <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
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

                {/* Profile Image */}
                <div className="relative w-full max-w-sm aspect-[5/6] md:ml-auto">
                  <div className="rounded-3xl overflow-hidden h-full">
                    <img
                      alt="Joanna Minott"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg"
                    />
                  </div>
                </div>
              </div>
          </FadeIn>
          </div>
        </section>

        {/* Writing, Current Read & Song on Repeat — Combined Dark Section */}
        <section className="bg-[#1C1C1C] text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Beyond the Pixels
              </h2>
              <p className="text-base md:text-lg text-white/60 font-serif max-w-2xl">
                What I'm reading, listening to, and thinking about when I'm not designing.
              </p>
            </div>
            <div className="space-y-16">
              {/* Writing / LinkedIn Posts */}
              <FadeIn delay={250}>
                <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                  Writing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {linkedinPosts.map((post, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-6 flex flex-col justify-between bg-[#F8F6F1]"
                    >
                      <div>
                        <span className="text-xs uppercase tracking-widest text-foreground/60 font-serif">{post.category}</span>
                        <p className="text-base font-serif text-foreground mt-2 mb-3 leading-snug">{post.title}</p>
                        <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 font-serif">{post.excerpt}</p>
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-foreground mt-4 hover:opacity-70 transition-opacity"
                      >
                        Read on LinkedIn
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Current Read */}
              <FadeIn delay={300}>
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Current Read
                  </h2>
                  <div className="rounded-2xl border border-border/60 p-8 bg-white flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-24 md:w-32 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={currentRead.cover}
                        alt={currentRead.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg md:text-xl font-serif text-foreground mb-1">
                        {currentRead.title}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        by {currentRead.author}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-serif">
                        {currentRead.note}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Song on Repeat */}
              <FadeIn delay={400}>
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Song on Repeat
                  </h2>
                  <div className="bg-white rounded-2xl border border-border/60 p-6 overflow-hidden flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={songOnRepeat.cover}
                        alt={songOnRepeat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-serif text-foreground leading-tight">{songOnRepeat.title}</p>
                      <p className="text-sm text-muted-foreground">{songOnRepeat.artist}</p>
                    </div>
                    <a
                      href={songOnRepeat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-foreground hover:opacity-70 transition-opacity"
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
