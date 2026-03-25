import React, { useState } from 'react';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { BookOpen, MessageCircle, Globe, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

import bookClubGroup from '@/assets/book-club-group.png';


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
    spineColor: "#8B2252",
    width: 38,
    height: 192,
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",
    spineColor: "#1B3A5C",
    width: 32,
    height: 176,
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788",
    spineColor: "#2D5F2D",
    width: 28,
    height: 168,
  },
  {
    title: "Sprint",
    author: "Jake Knapp",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
    spineColor: "#C4A035",
    width: 34,
    height: 188,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    spineColor: "#6B3A2A",
    width: 44,
    height: 200,
  },
  {
    title: "Articulating Design Decisions",
    author: "Tom Greever",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Articulating-Design-Decisions-Communicate-Stakeholders/dp/1491921560",
    spineColor: "#4A2545",
    width: 40,
    height: 184,
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.refactoringui.com/",
    spineColor: "#B8860B",
    width: 36,
    height: 196,
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    purchaseUrl: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
    spineColor: "#8B0000",
    width: 42,
    height: 180,
  },
];

const BookClub: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-24 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-start gap-8 md:gap-12">
              <div className="flex-1 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight">
                  Fresh Perspectives
                </h1>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  A community of curious minds exploring the intersection of design, psychology, and human behavior.
                </p>
                <a href="https://www.linkedin.com/in/joannaminott" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity">
                  Learn More <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="hidden md:block shrink-0 pt-2">
                <div className="w-52 h-64 rounded-xl overflow-hidden shadow-md rotate-2">
                  <img 
                    src={bookClubGroup} 
                    alt="Book club gathering" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={200}>
            <div className="border-t border-foreground/10 mt-12 pt-10">
              <div className="flex gap-16">
                <div>
                  <p className="text-3xl md:text-4xl font-serif font-medium text-foreground">2025</p>
                  <p className="text-sm text-muted-foreground mt-1">Founded</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-serif font-medium text-foreground">8+</p>
                  <p className="text-sm text-muted-foreground mt-1">Books Completed</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-serif font-medium text-foreground italic">Monthly</p>
                  <p className="text-sm text-muted-foreground mt-1">Sessions</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Past Reads</p>
              <TooltipProvider delayDuration={200}>
                <div className="overflow-x-auto">
                  <div className="flex items-end gap-[6px] min-w-max pb-0">
                    {books.map((book, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => setSelectedBook(book)}
                            className="relative cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:brightness-110 rounded-t-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                            style={{
                              width: `${book.width}px`,
                              height: `${book.height}px`,
                              backgroundColor: book.spineColor,
                            }}
                          >
                            <span
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ writingMode: 'vertical-rl' }}
                            >
                              <span className="text-[10px] font-medium text-white/80 tracking-wider truncate max-h-[90%] rotate-180">
                                {book.title}
                              </span>
                            </span>
                            <div className="absolute inset-y-0 left-0 w-[2px] bg-white/10 rounded-tl-sm" />
                            <div className="absolute inset-y-0 right-0 w-[1px] bg-black/20" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="font-serif">
                          <p className="font-medium">{book.title}</p>
                          <p className="text-xs text-muted-foreground">{book.author}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  {/* Shelf */}
                  <div className="h-3 bg-[#8B7355] rounded-b-sm shadow-md min-w-max" />
                  <div className="h-1 bg-[#6B5335] rounded-b-sm min-w-max mx-1" />
                </div>
              </TooltipProvider>
            </div>
          </FadeIn>

          {/* Book Detail Modal */}
          <Dialog open={!!selectedBook} onOpenChange={(open) => !open && setSelectedBook(null)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-serif text-xl">{selectedBook?.title}</DialogTitle>
                <DialogDescription className="font-serif">{selectedBook?.author}</DialogDescription>
              </DialogHeader>
              {selectedBook && (
                <div className="space-y-4">
                  <div className="aspect-[3/4] w-48 mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={selectedBook.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      Purchase <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">What We Do</h2>
              <p className="text-base md:text-lg text-white/60 font-serif max-w-2xl leading-relaxed">
                How we bring curious designers together around ideas that matter.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-0">
            <FadeIn delay={100}>
              <div className="border-t border-white/15 py-10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#1C1C1C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3">Read Together</h3>
                <p className="text-base text-white/70 font-serif leading-relaxed max-w-2xl">
                  We pick one book per cycle — spanning UX, behavioral science, AI, and systems thinking — and read at a pace that fits busy design professionals.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="border-t border-white/15 py-10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[#1C1C1C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3">Discuss & Reflect</h3>
                <p className="text-base text-white/70 font-serif leading-relaxed max-w-2xl">
                  Monthly virtual sessions where we connect ideas to our real work, challenge assumptions, and leave with frameworks we can actually use.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="border-t border-white/15 border-b py-10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-[#1C1C1C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3">Stay Connected</h3>
                <p className="text-base text-white/70 font-serif leading-relaxed max-w-2xl">
                  An ongoing LinkedIn community where members share resources, job leads, and design conversations between sessions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <FadeIn>
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white">
                Ready to read with us?
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Join a community of UX professionals who believe that great designers are also great thinkers. New members always welcome.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/joannaminott" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Join the Club
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default BookClub;
