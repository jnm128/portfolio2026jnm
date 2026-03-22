import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import CaseStudyMindfulWellness from "./pages/CaseStudyMindfulWellness";
import CaseStudyArtisanMarketplace from "./pages/CaseStudyArtisanMarketplace";
import CaseStudyCreativeStudio from "./pages/CaseStudyCreativeStudio";
import Contact from "./pages/Contact";
import BookClub from "./pages/BookClub";
import WorkExperience from "./pages/WorkExperience";
import Work from "./pages/Work";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-club" element={<BookClub />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/case-study/mindful-wellness" element={<CaseStudyMindfulWellness />} />
            <Route path="/case-study/artisan-marketplace" element={<CaseStudyArtisanMarketplace />} />
            <Route path="/case-study/creative-studio" element={<CaseStudyCreativeStudio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
