import React, { useState } from 'react';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from '@/components/ui-custom/SmartImage';
import speakingMiami from '@/assets/speaking-miami.jpg';
import speakingUF from '@/assets/speaking-uf.jpg';
import arirangCover from '@/assets/arirang-cover.png';
import emotionalDesignCover from '@/assets/emotional-design-cover.jpg';
interface Book {
  title: string;
  author: string;
  cover: string;
  description: string;
  isCurrent?: boolean;
}

const songOnRepeat = { title: "Arirang", artist: "BTS", url: "https://www.youtube.com/results?search_query=BTS+Arirang", cover: arirangCover };

const favoriteBooks: Book[] = [
  { title: "The Artist's Way", author: "Julia Cameron", cover: "/lovable-uploads/artists-way-cover.jpg", description: "A transformative course in discovering and recovering your creative self — helping me reconnect with creativity as a daily practice.", isCurrent: true },
  { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop", description: "A powerful primer on how — and why — some products satisfy customers while others only frustrate them." },
  { title: "Don't Make Me Think", author: "Steve Krug", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop", description: "The classic guide to web usability. A practical, common-sense approach to intuitive design." },
  { title: "Hooked", author: "Nir Eyal", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop", description: "How successful companies create products people can't put down using the four-step Hook Model." },
  { title: "Sprint", author: "Jake Knapp", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop", description: "A unique five-day process for solving tough problems and testing new ideas, developed at Google Ventures." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop", description: "Kahneman explores the two systems that drive the way we think — and how they shape our decisions." },
  { title: "Articulating Design Decisions", author: "Tom Greever", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop", description: "A practical guide to communicating with stakeholders and presenting design work with confidence." },
  { title: "Refactoring UI", author: "Adam Wathan & Steve Schoger", cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop", description: "Tactical tips for improving your visual design skills and building beautiful interfaces." },
  { title: "Emotional Design", author: "Don Norman", cover: emotionalDesignCover, description: "Why we love (or hate) everyday things. How emotions shape our perception of usability." },
];



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
];

const processSteps = [
  { num: '01', title: 'Discover', text: 'Research, listen, and frame the real problem before solving it.' },
  { num: '02', title: 'Define', text: 'Synthesize insights into clear opportunities and direction.' },
  { num: '03', title: 'Design', text: 'Explore, prototype, and validate ideas with real users.' },
  { num: '04', title: 'Deliver', text: 'Ship, measure, and iterate toward meaningful impact.' },
];

const skills = [
  { title: 'Product Design', text: 'Interaction design, design systems, and visual craft for web & mobile.' },
  { title: 'Product Strategy', text: 'Aligning user needs with business goals through roadmaps and prioritization.' },
  { title: 'UX Research & Testing', text: 'Interviews, usability testing, synthesis, and behavioral insight.' },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(favoriteBooks.length / 2));
  const activeBook = favoriteBooks[activeIndex];
  return (

    <main className="relative bg-background">
      <ScrollAnimations />
      <div className="pt-24 md:pt-28">
        {/* Hero / Intro */}
        <section className="pt-0 pb-24 md:pb-32 bg-background min-h-[calc(100vh-7rem)] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto px-5 md:px-16">
          <FadeIn>
              {/* Mobile-only title */}
              <h1 className="text-3xl font-serif text-title mb-4 md:hidden">
                About
              </h1>

              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Profile Image — first in DOM, appears on right on desktop */}
                <div className="relative w-full max-w-md aspect-[5/6] mx-auto md:ml-auto md:order-last md:col-span-3">
                  <div className="rounded-2xl overflow-hidden h-full">
                    <SmartImage
                      alt="Portrait of Joanna Minott"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/headshot-joanna.jpg"
                      webpSrc="/lovable-uploads/headshot-joanna.webp"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex flex-col justify-center md:col-span-2">
                  <h1 className="hidden md:block text-3xl md:text-5xl font-serif text-title mb-4">
                    About
                  </h1>
                  <p className="text-base md:text-lg text-foreground font-serif leading-relaxed mb-6">
                    Joanna Minott is a user experience designer who transforms complex systems into calm, intuitive, people-first experiences.
                  </p>
                  <p className="text-base md:text-lg text-foreground font-serif leading-relaxed mb-6">
                    She blends product strategy, behavior-driven design, and emotional insight to create solutions that help people feel supported, empowered, and understood.
                  </p>
                  <p className="text-base md:text-lg text-foreground font-serif leading-relaxed mb-6">
                    Her work focuses on aligning business goals with human needs to drive clarity, efficiency, and meaningful impact at scale.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/joannaminott"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-base font-medium 
                               hover:opacity-90 transition-opacity self-start"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
          </FadeIn>
          </div>
        </section>

        {/* How I Work */}
        <section className="bg-section py-24 md:py-40">
          <div className="max-w-[1600px] mx-auto px-5 md:px-16">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                <div>
                  <p className="text-xs uppercase tracking-widest text-hint mb-4">How I Work</p>
                  <h2 className="text-3xl md:text-5xl font-serif text-title mb-6">A process, not a formula</h2>
                  <p className="text-base md:text-lg text-foreground font-serif leading-relaxed max-w-md">
                    Every project moves through the same rhythm — guided by curiosity, shaped by research, refined through iteration.
                  </p>
                </div>
                <ul className="space-y-0">
                  {processSteps.map((step, i) => (
                    <li
                      key={step.num}
                      className={`py-8 md:py-10 ${i === 0 ? 'border-t border-border' : ''} ${i !== processSteps.length - 1 ? 'border-b border-border' : ''}`}
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="text-sm font-serif italic text-hint tracking-wider w-10 shrink-0">{step.num}</span>
                        <div>
                          <p className="text-lg font-serif text-title">{step.title}</p>
                          <p className="text-sm text-foreground font-serif mt-1 leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Skill Set */}
        <section className="bg-card py-24 md:py-40">
          <div className="max-w-[1600px] mx-auto px-5 md:px-16">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                <div>
                  <p className="text-xs uppercase tracking-widest text-hint mb-4">Skill Set</p>
                  <h2 className="text-3xl md:text-5xl font-serif text-title mb-6">What I bring to the room</h2>
                  <p className="text-base md:text-lg text-foreground font-serif leading-relaxed max-w-md">
                    A blend of strategy, design, and research — focused on creating products that feel as good as they perform.
                  </p>
                </div>
                <ul className="space-y-0">
                  {skills.map((skill, i) => {
                    const numerals = ['I', 'II', 'III'];
                    return (
                      <li
                        key={skill.title}
                        className={`py-8 md:py-10 ${i === 0 ? 'border-t border-border' : ''} ${i !== skills.length - 1 ? 'border-b border-border' : ''}`}
                      >
                        <div className="flex items-baseline gap-6">
                          <span className="text-sm font-serif italic text-hint tracking-wider w-10 shrink-0">{numerals[i]}</span>
                          <div>
                            <p className="text-lg font-serif text-title">{skill.title}</p>
                            <p className="text-sm text-foreground font-serif mt-1 leading-relaxed">{skill.text}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Writing, Current Read & Song on Repeat — Combined Dark Section */}
        <section className="bg-foreground text-background py-16 md:py-24" data-theme="dark">
          <div className="max-w-4xl mx-auto px-5 md:px-16">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-background mb-4">
                Beyond the Pixels
              </h2>
              <p className="text-base md:text-lg text-background/60 font-serif max-w-2xl">
                What I'm reading, listening to, and thinking about when I'm not designing.
              </p>
            </div>
            <div className="space-y-0">
              {/* Writing / LinkedIn Posts */}
              <FadeIn delay={250}>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-background mb-6">
                    Writing
                  </h3>
                  {linkedinPosts.map((post, i) => (
                    <div
                      key={i}
                      className="border-t border-background/15 py-10"
                    >
                      <span className="text-xs uppercase tracking-widest text-background/70 font-serif">{post.category}</span>
                      <p className="text-xl font-serif text-background mt-2 mb-3 leading-snug">{post.title}</p>
                      <p className="text-base text-background/70 leading-relaxed font-serif mb-4">{post.excerpt}</p>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-background hover:opacity-70 transition-opacity"
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
                  <h3 className="text-sm font-medium uppercase tracking-widest text-background mb-6 pt-10">
                    Speaking
                  </h3>
                  <div className="border-t border-background/15 py-10">
                    <a href="https://www.linkedin.com/in/joannaminott" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-96 shrink-0 rounded-lg overflow-hidden aspect-[16/10] ring-1 ring-background/40">
                        <SmartImage
                          src={speakingMiami}
                          alt="Alumni panel at the University of Miami"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase tracking-widest text-background/70 font-serif">Alumni Panel</span>
                        <p className="text-xl font-serif text-background leading-snug mt-2">University of Miami</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-background/40 group-hover:text-background transition-colors shrink-0 mt-1" />
                    </a>
                  </div>
                  <div className="border-t border-background/15 py-10">
                    <a href="https://www.linkedin.com/in/joannaminott" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-96 shrink-0 rounded-lg overflow-hidden aspect-[16/10] ring-1 ring-background/40">
                        <SmartImage
                          src={speakingUF}
                          alt="Guest speaker at University of Florida's Gator Design student org"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase tracking-widest text-background/70 font-serif">Guest Speaker</span>
                        <p className="text-xl font-serif text-background leading-snug mt-2">University of Florida — Gator Design</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-background/40 group-hover:text-background transition-colors shrink-0 mt-1" />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Favorite Books — Carousel */}
              <FadeIn delay={300}>
                <div className="py-10">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-background mb-6 pb-6 border-b border-background/15">
                    Favorite Books
                  </h3>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                    <div className="w-32 md:w-40 aspect-[3/4] shrink-0 mx-auto md:mx-0 rounded-lg overflow-hidden ring-1 ring-background/40 bg-background/5">
                      <SmartImage
                        key={activeBook.cover}
                        src={activeBook.cover}
                        alt={activeBook.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p className="text-lg md:text-xl font-serif text-background">
                          {activeBook.title}
                        </p>
                        {activeBook.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-background/80 border border-background/30 rounded-full px-2 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                            Currently Reading
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-background/70 mb-4">
                        by {activeBook.author}
                      </p>
                      <p className="text-sm text-background/70 leading-relaxed font-serif">
                        {activeBook.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow controls + dot indicators */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={() => setActiveIndex((activeIndex - 1 + favoriteBooks.length) % favoriteBooks.length)}
                      aria-label="Previous book"
                      className="w-9 h-9 rounded-full bg-background/5 border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-background" />
                    </button>
                    <div className="flex items-center gap-2" role="tablist" aria-label="Favorite books">
                      {favoriteBooks.map((book, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          aria-label={`View ${book.title}`}
                          aria-selected={i === activeIndex}
                          role="tab"
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeIndex
                              ? 'w-6 bg-background'
                              : 'w-1.5 bg-background/30 hover:bg-background/50'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveIndex((activeIndex + 1) % favoriteBooks.length)}
                      aria-label="Next book"
                      className="w-9 h-9 rounded-full bg-background/5 border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-background" />
                    </button>
                  </div>
                </div>
              </FadeIn>

              {/* Song on Repeat */}
              <FadeIn delay={400}>
                <div className="py-10">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-background mb-6 pb-6 border-b border-background/15">
                    Work Playlist
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded overflow-hidden ring-1 ring-background/40">
                      <SmartImage
                        src={songOnRepeat.cover}
                        alt={songOnRepeat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-serif text-background leading-tight">{songOnRepeat.title}</p>
                      <p className="text-sm text-background/70">{songOnRepeat.artist}</p>
                    </div>
                    <a
                      href={songOnRepeat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-background hover:opacity-70 transition-opacity"
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
