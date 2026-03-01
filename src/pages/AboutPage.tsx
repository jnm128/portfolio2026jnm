import React, { useState, useRef } from 'react';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink, Play, Pause, BookOpen, Music } from 'lucide-react';

const playlist = [
  { title: "Clair de Lune", artist: "Debussy", src: "" },
  { title: "Golden Hour", artist: "JVKE", src: "" },
  { title: "Electric Feel", artist: "MGMT", src: "" },
  { title: "Sunset Lover", artist: "Petit Biscuit", src: "" },
  { title: "Breathe", artist: "Télépopmusik", src: "" },
];

const currentRead = {
  title: "Refactoring UI",
  author: "Adam Wathan & Steve Schoger",
  cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546225037i/43190966.jpg",
  note: "A practical guide to designing beautiful interfaces — currently inspiring how I approach layout, spacing, and visual hierarchy in my daily work.",
};

const AboutPage = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (index: number) => {
    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Placeholder — no actual audio src yet
      setPlayingIndex(index);
    }
  };

  return (
    <main className="relative bg-[#F8F6F1]">
      <ScrollAnimations />
      <div className="pt-28 md:pt-36">
        {/* Hero / Intro */}
        <section className="container mx-auto px-6 md:px-10 max-w-[1600px] pb-16 md:pb-24">
          <FadeIn>
            <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              About
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Profile Image */}
                <div className="relative w-full max-w-lg aspect-[5/6]">
                  <div className="rounded-3xl overflow-hidden h-full">
                    <img
                      alt="Joanna Minott"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/fff4e4ff-c16e-4ddc-be87-6d94481be7c8.jpg"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex flex-col justify-center">
                  <p className="text-base md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                    Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
                  </p>
                  <p className="text-base md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                    She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.
                  </p>
                  <p className="text-base md:text-xl text-foreground leading-relaxed mb-6 font-serif">
                    Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["4+ Years", "Healthcare", "B2B & B2C", "Mobile & Web", "Enterprise Systems", "Based in Miami, FL", "Remote"].map(tag => (
                      <span key={tag} className="bg-muted/60 rounded-full px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://www.linkedin.com/in/joannaminott"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium 
                               hover:bg-background hover:text-foreground border border-foreground 
                               transition-all duration-300 self-start"
                  >
                    Connect on LinkedIn
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Playlist & Current Read — Stacked */}
        <section className="container mx-auto px-6 md:px-10 max-w-[1600px] pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Work Playlist */}
            <FadeIn delay={300}>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  Work Playlist
                </h2>
                <ul className="space-y-0">
                  {playlist.map((track, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between py-3.5 border-b border-border/60 group"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => togglePlay(i)}
                          className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center 
                                     hover:bg-foreground hover:text-background transition-all duration-200 shrink-0"
                          aria-label={playingIndex === i ? `Pause ${track.title}` : `Play ${track.title}`}
                        >
                          {playingIndex === i ? (
                            <Pause className="w-3.5 h-3.5" />
                          ) : (
                            <Play className="w-3.5 h-3.5 ml-0.5" />
                          )}
                        </button>
                        <span className="text-base font-serif text-foreground">{track.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground ml-4 shrink-0">{track.artist}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Current Read */}
            <FadeIn delay={400}>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Current Read
                </h2>
                <div className="rounded-2xl border border-border/60 p-6 bg-background/40 flex gap-6 items-start">
                  <div className="w-24 md:w-32 shrink-0 rounded-lg overflow-hidden shadow-md">
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
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
