import React from 'react';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { BookOpen, MessageCircle, Globe, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
  },
  {
    title: "Sprint",
    author: "Jake Knapp",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
  },
  {
    title: "Articulating Design Decisions",
    author: "Tom Greever",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
  },
  {
    title: "Creative Confidence",
    author: "Tom & David Kelley",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
  },
];

const BookClub: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-24 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="flex items-start gap-8 md:gap-12">
              <div className="flex-1 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight">
                  Fresh Perspectives
                </h1>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  A community of curious minds exploring the intersection of design, psychology, and human behavior.
                </p>
                <a href="#" className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity">
                  Learn More
                </a>
              </div>
              <div className="hidden md:flex items-start gap-4 shrink-0 pt-2">
                <div className="w-36 h-48 rounded-xl overflow-hidden shadow-md -rotate-3 translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop" 
                    alt="Book collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-36 h-48 rounded-xl overflow-hidden shadow-md rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop" 
                    alt="Book reading" 
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
              <Carousel opts={{ align: "start", slidesToScroll: 1 }} className="w-full">
                <div className="flex items-center justify-end gap-2 mb-6">
                  <CarouselPrevious className="static translate-y-0 w-9 h-9 rounded-full backdrop-blur-md bg-foreground/5 border border-foreground/20 text-foreground hover:bg-foreground/10 disabled:opacity-30" />
                  <CarouselNext className="static translate-y-0 w-9 h-9 rounded-full backdrop-blur-md bg-foreground/5 border border-foreground/20 text-foreground hover:bg-foreground/10 disabled:opacity-30" />
                </div>
                <CarouselContent className="-ml-6">
                  {books.map((book, index) => (
                    <CarouselItem key={index} className="pl-6 basis-1/2 lg:basis-1/4">
                      <div className="group cursor-pointer">
                        <div className="relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                            <img 
                              src={book.cover} 
                              alt={book.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="font-serif text-sm font-medium leading-tight mb-1 text-foreground">
                          {book.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {book.author}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-white/70 mb-12">
              What We Do
            </p>
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
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
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
                  Join on LinkedIn <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Say hello
                </Link>
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
