import React, { useState, useRef, useCallback } from 'react';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink, Play, Pause } from 'lucide-react';

const playlist = [
  { title: "Clair de Lune", artist: "Debussy", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Golden Hour", artist: "JVKE", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Electric Feel", artist: "MGMT", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "Sunset Lover", artist: "Petit Biscuit", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { title: "Breathe", artist: "Télépopmusik", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { title: "Alone (ft. Notelle)", artist: "Telomic", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
];

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

const CIRCLE_RADIUS = 10;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const AboutPage = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback((index: number) => {
    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
      setAudioProgress(0);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeEventListener('timeupdate', () => {});
    }

    const audio = new Audio(playlist[index].src);
    audioRef.current = audio;
    setPlayingIndex(index);
    setAudioProgress(0);

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        setAudioProgress((audio.currentTime / audio.duration) * 100);
      }
    });

    audio.addEventListener('ended', () => {
      setPlayingIndex(null);
      setAudioProgress(0);
    });

    audio.play();
  }, [playingIndex]);

  const dashOffset = CIRCLE_CIRCUMFERENCE - (audioProgress / 100) * CIRCLE_CIRCUMFERENCE;

  return (
    <main className="relative bg-[#F8F6F1]">
      <ScrollAnimations />
      <div className="pt-24 md:pt-28">
        {/* Hero / Intro */}
        <section className="pt-0 pb-24 md:pb-32 bg-[#F8F6F1]">
          <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
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
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-base font-medium 
                               hover:bg-background hover:text-foreground border border-foreground 
                               transition-all duration-300 self-start"
                  >
                    Connect on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Profile Image */}
                <div className="relative w-full max-w-lg aspect-[5/6] md:ml-auto">
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

        {/* Writing, Work Playlist & Current Read — Combined Dark Section */}
        <section className="bg-[#171717] text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                Get to Know Your Favorite Designer
              </h2>
              <p className="text-base md:text-lg text-white/60 font-serif max-w-2xl">
                Beyond the pixels — what I'm reading, listening to, and thinking about when I'm not designing.
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
                      className="rounded-2xl border border-border/60 bg-white p-6 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{post.category}</span>
                        <p className="text-base font-serif text-foreground mt-2 mb-3 leading-snug">{post.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
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

              {/* Work Playlist */}
              <FadeIn delay={300}>
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">
                    Work Playlist
                  </h2>
                  <div className="bg-white rounded-2xl border border-border/60 p-6 overflow-hidden">
                    <ul className="divide-y divide-muted">
                      {playlist.map((track, i) => (
                        <li
                          key={i}
                          className={`flex items-center justify-between py-3.5 px-4 group ${i % 2 === 0 ? 'bg-muted/40' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => togglePlay(i)}
                              className="relative w-5 h-5 flex items-center justify-center shrink-0 rounded-full bg-foreground/10 border border-foreground/20 text-foreground"
                              aria-label={playingIndex === i ? `Pause ${track.title}` : `Play ${track.title}`}
                            >
                              <svg width="20" height="20" className="absolute inset-0">
                                {playingIndex === i && (
                                  <circle
                                    cx="10" cy="10" r={CIRCLE_RADIUS}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray={CIRCLE_CIRCUMFERENCE}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                    transform="rotate(-90 10 10)"
                                    className="transition-[stroke-dashoffset] duration-200"
                                  />
                                )}
                              </svg>
                              {playingIndex === i ? (
                                <Pause className="w-2.5 h-2.5 relative z-10 fill-current" />
                              ) : (
                                <Play className="w-2.5 h-2.5 ml-0.5 relative z-10 fill-current" />
                              )}
                            </button>
                            <span className="text-base font-serif text-foreground">{track.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground ml-4 shrink-0">{track.artist}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Current Read */}
              <FadeIn delay={400}>
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
