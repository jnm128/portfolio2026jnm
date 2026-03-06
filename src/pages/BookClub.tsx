import React from 'react';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { BookOpen, Users, Sparkles, ExternalLink } from 'lucide-react';

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
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-background" />
              </div>
              <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight">
                Fresh Perspectives
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-2">
                A community of curious minds exploring the intersection of design, psychology, and human behavior.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                We read, discuss, and grow together—one book at a time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="pb-16 md:pb-24 bg-[#F8F6F1]">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-8 bg-[#D4E4ED] flex flex-col justify-between min-h-[280px]">
                <div>
                  <BookOpen className="w-6 h-6 mb-5 text-foreground/70" />
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Monthly Reads</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Carefully curated books that challenge perspectives and spark meaningful conversations about design and behavior.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-6 hover:opacity-70 transition-opacity">
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="rounded-2xl p-8 bg-[#E8C87A] flex flex-col justify-between min-h-[280px]">
                <div>
                  <Users className="w-6 h-6 mb-5 text-foreground/70" />
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Community Discussions</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Join live sessions where we dive deep into key takeaways and real-world applications of what we read.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-6 hover:opacity-70 transition-opacity">
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="rounded-2xl p-8 bg-[#D8C8E8] flex flex-col justify-between min-h-[280px]">
                <div>
                  <Sparkles className="w-6 h-6 mb-5 text-foreground/70" />
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Fresh Perspectives</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Connect with designers, researchers, and thinkers who bring diverse viewpoints to every discussion.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-6 hover:opacity-70 transition-opacity">
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Digital Bookshelf */}
      <section className="py-16 md:py-24 bg-[#F8F6F1]">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <p className="text-[14px] uppercase tracking-wider text-muted-foreground font-medium text-center mb-12">
              A Look at Our Past Reads
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <div key={index} className="group cursor-pointer">
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
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-white">
                Ready to expand your perspective?
              </h2>
              <p className="text-lg text-white/70 font-serif mb-8">
                Join a growing community of designers who believe in the power of continuous learning and shared insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-[#1C1C1C] font-medium rounded-full transition-all hover:bg-white/90 hover:scale-105 active:scale-95">
                  Join the Community
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 transition-all hover:bg-white/10 active:scale-95">
                  Learn More
                </button>
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
