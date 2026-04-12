import React, { useState, useRef } from 'react';
import freshPerspectivesLogo from '@/assets/fresh-perspectives-logo.png';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { BookOpen, MessageCircle, Globe, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

import emotionalDesignCover from '@/assets/emotional-design-cover.jpg';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Book {
  title: string;
  author: string;
  cover: string;
  description: string;
  link: string;
  rating: number;
}

const books: Book[] = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    description: "A powerful primer on how — and why — some products satisfy customers while others only frustrate them. Explores the fundamental principles of good design.",
    link: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
    rating: 5,
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description: "The classic guide to web usability. A practical, common-sense approach to understanding what makes a website intuitive and easy to use.",
    link: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",
    rating: 5,
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    description: "How successful companies create products people can't put down. Reveals the Hook Model — a four-step process for building habit-forming products.",
    link: "https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788",
    rating: 4,
  },
  {
    title: "Sprint",
    author: "Jake Knapp",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    description: "A unique five-day process for solving tough problems and testing new ideas, developed at Google Ventures.",
    link: "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
    rating: 4,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description: "Nobel laureate Daniel Kahneman explores the two systems that drive the way we think — and how they shape our judgments and decisions.",
    link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    rating: 5,
  },
  {
    title: "Articulating Design Decisions",
    author: "Tom Greever",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    description: "A practical guide to communicating with stakeholders, getting buy-in, and presenting your design work with confidence.",
    link: "https://www.amazon.com/Articulating-Design-Decisions-Communicate-Stakeholders/dp/1491921560",
    rating: 4,
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description: "Tactical tips for improving your visual design skills. Learn to design beautiful interfaces without relying on a designer.",
    link: "https://www.refactoringui.com/",
    rating: 5,
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses through validated learning.",
    link: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
    rating: 4,
  },
  {
    title: "Emotional Design",
    author: "Don Norman",
    cover: emotionalDesignCover,
    description: "Why we love (or hate) everyday things. Don Norman explores how emotions play a critical role in design and how aesthetics influence our perception of usability.",
    link: "https://www.amazon.com/Emotional-Design-Love-Everyday-Things/dp/0465051367",
    rating: 5,
  },
];

const BookClub: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1]">

      {/* Section 1 — Hero */}
      <section className="min-h-screen flex items-center pt-24 md:pt-28 pb-10 md:pb-16 bg-[#F8F6F1]">
        <div className="mx-auto px-8 md:px-16 max-w-[1600px]">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
              <div className="lg:w-1/2">
                <img src={freshPerspectivesLogo} alt="Fresh Perspectives" className="w-10 h-10 rounded-lg mb-4" />
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
                  fresh perspectives
                </h1>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4 max-w-xl">
                  A UX book club for designers who think beyond the screen.
                </p>
                <div className="hidden lg:grid border-t border-foreground/10 py-4 grid-cols-4 gap-3 md:gap-8">
                  <div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">2023</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Est.</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">486+</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Members</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">8+</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Books</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">Monthly</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Sessions</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-wrap gap-3 mt-6">
                  <a
                    href="#community"
                    className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:opacity-90 transition-opacity"
                  >
                    Join the Community
                  </a>
                  <a
                    href="#upcoming"
className="inline-flex items-center justify-center px-6 py-3 bg-white text-foreground border border-foreground/10 font-medium text-sm rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    See Upcoming Events
                  </a>
                </div>
              </div>
              <div className="lg:hidden w-full border-t border-foreground/10 py-4 grid grid-cols-4 gap-3 md:gap-8">
                <div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">2023</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Est.</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">486+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Members</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">8+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Books</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl lg:text-3xl font-serif font-medium text-foreground">Monthly</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Sessions</div>
                </div>
              </div>
              <div className="lg:hidden flex flex-wrap gap-3 mb-4">
                <a
                  href="#community"
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:opacity-90 transition-opacity"
                >
                  Join the Community
                </a>
                <a
                  href="#upcoming"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-foreground border border-foreground/10 font-medium text-sm rounded-full hover:bg-foreground/5 transition-colors"
                >
                  See Upcoming Events
                </a>
              </div>
              <div className="lg:w-1/2 rounded-2xl overflow-hidden max-h-[300px] md:max-h-[350px] lg:max-h-[450px]">
                <img
                  src="/lovable-uploads/community-books.jpeg"
                  alt="Fresh Perspectives Book Club"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <section data-theme="dark" className="py-16 md:py-20 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <FadeIn>
            <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">Who We Are</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <h3 className="text-2xl md:text-4xl font-serif font-medium text-white mb-6 leading-tight">
              A space where UX professionals slow down, think deeply, and grow beyond the screen.
            </h3>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-base md:text-lg text-white/70 font-serif leading-relaxed">
              I founded Fresh Perspectives as a space for like-minded UX professionals to slow down and think deeply — not just ship faster. What started as a book club has grown, alongside my co-host Bhavna, into a hub where designers connect, challenge assumptions, and bring sharper thinking back to their work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 — Previous Reads */}
      <section className="py-16 md:py-20 bg-[#F8F6F1]">
        <div className="mx-auto px-8 md:px-16 max-w-[1600px]">
          <FadeIn>
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-sm font-medium uppercase tracking-widest text-foreground/60">Previous Reads</h2>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar py-4 -my-4"
            >
              {books.map((book, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedBook(book)}
                  className="flex-shrink-0 w-[260px] md:w-[300px] snap-start rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — How the Community Works */}
      <section id="community" data-theme="dark" className="py-16 md:py-20 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <FadeIn>
            <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">How the Community Works</h2>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-0">
              {[
                { icon: BookOpen, title: "Read Together", desc: "We pick one book per cycle — spanning UX, behavioral science, AI, and systems thinking — and read at a pace that fits busy design professionals." },
                { icon: MessageCircle, title: "Discuss & Reflect", desc: "Monthly virtual sessions where we connect ideas to our real work, challenge assumptions, and leave with frameworks we can actually use." },
                { icon: Globe, title: "Stay Connected", desc: "An ongoing LinkedIn community where members share resources, job leads, and design conversations between sessions." },
              ].map((step, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-white/15' : ''} py-8 flex items-start gap-6`}>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAF5] flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-[#1C1C1C]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-serif font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-base md:text-lg text-white/70 font-serif leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5 — CTA (light) */}
      <section id="upcoming" className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="mx-auto px-8 md:px-16 max-w-[1600px]">
          <FadeIn>
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                Ready to read with us?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                Join a community of UX professionals who believe that great designers are also great thinkers.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/joannaminott"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-[#1C1C1C] text-white font-medium hover:bg-[#1C1C1C]/90 transition-colors"
                >
                  Join the Club
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 6 — FAQ (dark) */}
      <section data-theme="dark" className="py-16 md:py-20 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <FadeIn>
            <h2 className="text-sm font-medium uppercase tracking-widest text-white/60 mb-6">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-0">
            {[
              {
                q: "When and how often does the book club meet?",
                a: "We meet once a month via virtual sessions. Exact dates are shared in advance through our LinkedIn group so everyone can plan ahead.",
              },
              {
                q: "How do I join the LinkedIn group?",
                a: "Search for \"Fresh Perspectives Book Club\" on LinkedIn or reach out directly through the Join the Club button above. We'll send you an invite to the private group.",
              },
              {
                q: "How can I stay connected between sessions?",
                a: "We have an active LinkedIn group and a Discord server where members share articles, book recommendations, and continue discussions asynchronously.",
              },
              {
                q: "Do I need to finish the book before each session?",
                a: "Not at all! We encourage reading at your own pace. Sessions are designed so you can participate meaningfully even if you're partway through.",
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={100 * (index + 1)}>
                <div className={index > 0 ? "border-t border-white/15" : ""}>
                  <button
                    onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-lg font-medium text-white font-serif pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/60 shrink-0 transition-transform duration-300 ${faqOpenIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${faqOpenIndex === index ? 'max-h-40 pb-5' : 'max-h-0'}`}
                  >
                    <p className="text-base text-white/70 font-serif leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book Detail Dialog */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-sm bg-[#F8F6F1] border-foreground/10 p-0 overflow-hidden rounded-2xl">
          {selectedBook && (
            <>
              <div className="flex items-center justify-center p-6 pb-2">
                <div className="w-40 h-56 rounded-2xl overflow-hidden">
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 pt-4">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl font-serif font-medium text-foreground">
                    {selectedBook.title}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground font-serif">{selectedBook.author}</p>
                </DialogHeader>
                <p className="text-sm text-muted-foreground font-serif leading-relaxed mb-6">
                  {selectedBook.description}
                </p>
                <a
                  href={selectedBook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-full bg-[#1C1C1C] text-white font-medium hover:bg-[#1C1C1C]/90 transition-colors"
                >
                  View on Amazon
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default BookClub;
