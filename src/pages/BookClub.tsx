import React from 'react';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Circle, BookOpen, Users, Sparkles } from 'lucide-react';

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
];

const BookClub: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface-6 text-surface-1">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex items-center justify-center w-3 h-3">
                  <Circle className="w-3 h-3 fill-current relative z-10" />
                  <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
                </span>
                <span className="text-sm uppercase tracking-wider">Book Club</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 leading-tight">
                Fresh Perspectives Collective
              </h1>
              <p className="text-lg md:text-xl text-surface-1/80 font-serif leading-relaxed mb-4">
                A community of curious minds exploring the intersection of design, psychology, and human behavior.
              </p>
              <p className="text-lg md:text-xl text-surface-1/80 font-serif leading-relaxed">
                We read, discuss, and grow together—one book at a time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <BookOpen className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="text-lg font-serif font-medium mb-2">Monthly Reads</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully curated books that challenge perspectives and spark meaningful conversations.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <Users className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="text-lg font-serif font-medium mb-2">Community Discussions</h3>
                <p className="text-muted-foreground text-sm">
                  Join live sessions where we dive deep into key takeaways and real-world applications.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <Sparkles className="w-8 h-8 mb-4 text-foreground" />
                <h3 className="text-lg font-serif font-medium mb-2">Fresh Perspectives</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with designers, researchers, and thinkers who bring diverse viewpoints to every discussion.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Digital Bookshelf */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-12 flex items-center gap-3">
              <span className="relative flex items-center justify-center w-3 h-3">
                <Circle className="w-3 h-3 fill-current relative z-10" />
                <span className="absolute inset-0 rounded-full bg-current animate-pulse-ring" />
              </span>
              Our Bookshelf
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {books.map((book, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                >
                  <div className="relative mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Book shadow */}
                    <div className="absolute inset-0 bg-foreground/20 rounded-sm translate-x-2 translate-y-2" />
                    {/* Book cover */}
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-border shadow-lg">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Book spine effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
                    </div>
                  </div>
                  <h3 className="font-serif text-sm font-medium leading-tight mb-1 group-hover:text-foreground transition-colors">
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
      <section className="py-16 md:py-24 bg-surface-6 text-surface-1">
        <div className="container mx-auto px-6 md:px-10 max-w-[1600px]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Ready to expand your perspective?
              </h2>
              <p className="text-lg text-surface-1/80 font-serif mb-8">
                Join a growing community of designers who believe in the power of continuous learning and shared insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="w-full sm:w-auto px-8 py-3 bg-surface-1 text-surface-6 font-medium rounded-full transition-all hover:bg-surface-1/90 hover:scale-105 active:scale-95">
                  Join the Community
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-surface-1 font-medium rounded-full border border-surface-1/30 transition-all hover:bg-surface-1/10 active:scale-95">
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
