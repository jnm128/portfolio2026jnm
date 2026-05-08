import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';
import gordonHeroVideo from '@/assets/gordon-center-hero.mp4';

const CaseStudyMindfulWellness = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-16">
          <FadeIn>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-3xl md:text-5xl font-serif text-title leading-tight mb-2">
              Gordon Center's Essential Cardiac Heart Auscultation re-design
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              User testing and UX design enhancements to the Gordon Center's web e-learning platform.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'Gordon Center for Simulation and Innovation' },
                { label: 'Industry', value: 'Healthcare Education' },
                { label: 'Category', value: 'UX Design, User Research' },
                { label: 'My Role', value: 'Product & UX Designer' },
                { label: 'Team', value: 'Team of 2' },
                { label: 'Timeline', value: '14 weeks / 2024' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm md:text-base font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12">
              <video
                src={gordonHeroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Gordon Center Essential Cardiac Auscultation Platform"
                className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Project Overview">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Enhancing healthcare learning by improving Gordon Center's Cardiac Auscultation e-learning modules.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I conducted a thorough evaluation of the Gordon Center's Essential Cardiac Auscultation learning module — an online program designed for medical students to practice using a stethoscope to listen to heartbeat sounds. I collaborated with a co-UX researcher to perform 9 moderated virtual usability tests on the platform.
            </p>
            <h3 className="text-lg md:text-xl font-medium mb-3 mt-8">Outcome</h3>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              I identified 21 unique usability issues and pinpointed 8 UI elements that were effective and should remain unchanged. To address the issues, I created 21 mockups of proposed design solutions and pitched them to the client. The client approved the re-design recommendations and planned to roll them into the platform with their in-house developers.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              How might we improve the usability of the Gordon Center's Essential Cardiac Auscultation e-learning module for medical students?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              The Gordon Center Essential Cardiac Auscultation module is a web-based educational tool that helps medical students practice using a stethoscope to listen to heartbeat sounds. It pairs interactive teaching, audio practice pages, and video case studies on top of Moodle LMS, with in-house front-end development from the center's team.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Our client at the Gordon Center needed an evaluation of the platform's overall usability and design recommendations to enhance the UI and UX — particularly as students increasingly preferred studying on tablets and phones rather than desktops.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Project Approach">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              I led a 6-week user evaluation and re-design process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              With my partner, I planned and moderated 90-minute remote usability tests with 6 medical students and 3 non-medical students across 3 task-based scenarios. Insights from each session fed directly into design recommendations for functionality, visual design, and content.
            </p>
            <h3 className="text-lg md:text-xl font-medium mb-3 mt-8">My responsibilities</h3>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              <li><span className="font-medium text-title">Weeks 1–2:</span> Set goals and criteria for the usability tests; create detailed task scenarios and questions.</li>
              <li><span className="font-medium text-title">Weeks 3–4:</span> Moderate 4 virtual usability tests and note-take on 3 more.</li>
              <li><span className="font-medium text-title">Week 5:</span> Collect and analyze data from the 9 sessions, identify key areas for improvement, and draft design recommendations in Figma.</li>
              <li><span className="font-medium text-title">Week 6:</span> Build out 21 mockups of proposed solutions and prepare a hand-off document for the client's in-house team.</li>
            </ul>
          </SplitSection>
        </div>
      </section>

      {/* Research Procedure */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              A 5-step procedure across 3 evaluation tasks.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              The goal was to track the module's efficiency, gauge how clear and engaging the content felt, and assess whether the design supported a focused learning experience.
            </p>
            <ol className="space-y-4 text-base md:text-lg text-muted-foreground font-serif leading-relaxed list-decimal pl-5 marker:text-muted-foreground">
              <li>Met 6 participants over Zoom and asked them to fill out a consent form and a demographic questionnaire prior to the session.</li>
              <li>For all 3 tasks, recorded completion time, success rate, number of usability issues, start/end location, and task flow.</li>
              <li>After the tasks, participants completed the System Usability Scale (SUS) questionnaire on a Qualtrics form.</li>
              <li>Asked open-ended questions about the UI elements they saw or interacted with on the website.</li>
              <li>Closed with post-study interview questions about how clear, useful, and engaging the content felt.</li>
            </ol>

            <h3 className="text-lg md:text-xl font-medium mb-3 mt-10">Test tasks</h3>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              <li><span className="font-medium text-title">Task 1:</span> Browse the entire module and share first impressions (measured by usability issues, Single Ease Questionnaire, and SUS).</li>
              <li><span className="font-medium text-title">Task 2:</span> Complete the module up to the "Testing" section (measured by task completion time).</li>
              <li><span className="font-medium text-title">Task 3:</span> Toward the end of the module, "Submit a Ticket" to seek help (measured by pass/fail success rate).</li>
            </ul>
          </SplitSection>
        </div>
      </section>

      {/* Key Insight: Task 3 */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Insight">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              All participants passed Tasks 1 and 2, but Task 3: "Finding Help" had only a 33% success rate.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Users found it difficult to locate help. The only path was the "Submit Ticket" feature on the homepage, which opened their native email app — leaving them unsure whether anyone would respond.
            </p>
            <div className="bg-card p-8 md:p-10 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-4">
                "This seems as if someone will get back to me sometime during business hours."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Usability test participant</p>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Progress indicator */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Prototype">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Users were unaware of their progress toward the testing section, so a progress indicator was needed.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I addressed this uncertainty by adding a progress indicator as a percentage scale in the navigation, showing how much of the module users had left to complete.
            </p>
            <div className="bg-card p-8 md:p-10 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-4">
                "A progress bar on the top where the nav bar is would be super helpful when going through the entire site."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Usability test participant</p>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Missing instructions */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Identifying Issues">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Practice questions were missing instructions.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I recommended adding clearer instructions that point users to interact with elements on the page, plus a hover state on the sound buttons so they read as clickable.
            </p>
            <div className="bg-card p-8 md:p-10 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-4">
                "I didn't know those were clickable — I just skimmed past them thinking the instructions were for an upcoming page."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Usability test participant</p>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Tablet pivot */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Exploring Solutions">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              As I prepared to dive into Figma, the client revealed that students strongly prefer studying on tablets and phones.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              That meant working within the constraint of fitting the same — if not more — content into a smaller screen. I focused the new designs on optimizing the experience for tablet view, prioritizing mobile-friendly solutions for learning on the go over traditional desk-based study.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Brand alignment */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Challenges">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              The e-learning module's visual design should derive from the University of Miami's brand.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The current UI of the e-learning platform used a different style guide than its landing page on the Gordon Center's official website, which created confusion. To ensure consistency and recognition, I aligned the modules with UM's visual branding so users could clearly identify them as a UM product.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Transcript visuals */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Challenges">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Replacing the wall of transcript text with visuals.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I introduced video timestamp images and text-highlighting cues so users could follow along visually with the lesson while reading the transcript.
            </p>
            <div className="bg-card p-8 md:p-10 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-4">
                "I wish that the transcript section had visuals or connected with the video visuals a bit better."
              </blockquote>
              <p className="text-sm text-muted-foreground">— Usability test participant</p>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Help/contact path */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Testing">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              An error-free path to guidance was needed for a better experience.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I recommended adding a contact section in the footer with immediate resources accessible across the site, plus an in-product form to connect with a help representative — without leaving the platform.
            </p>
            <div className="bg-card p-8 md:p-10 border border-border rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-serif text-muted-foreground mb-4">
                "I really don't like that the 'Submit a Ticket' button opens up my personal email. Plus, how do I even know I'll get a response quickly?"
              </blockquote>
              <p className="text-sm text-muted-foreground">— Usability test participant</p>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* 21 issues categorized */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Findings">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Usability testing revealed 21 unique issues in the existing platform.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              To better assess the design problems, I organized the findings into four categories: content, functionality, visibility, and visual design.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Content</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  <span className="font-medium text-title">Missing instructions for practice questions:</span> users struggled because there were no clear instructions on how to engage with the audio practice elements.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Functionality</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  <span className="font-medium text-title">Audio overlap issues:</span> on pages with multiple videos, audio played simultaneously unless manually stopped — undermining the purpose of distinguishing sounds.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Visibility</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  <span className="font-medium text-title">Navigation and progress tracking:</span> users had trouble understanding where they were in the module — there was no indication of which sections were complete or how much was left until testing.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Visual Design</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  <span className="font-medium text-title">Inconsistent brand identity:</span> the module's UI didn't reflect University of Miami branding, weakening recognition and trust as students moved from the marketing site into the modules.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Hand-off */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Hand-off">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              I created a design hand-off document with guidelines that were functional yet flexible.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              I generated a series of templates from the mockups and documented the design specifications. The goal was an easy-to-consume but detailed reference so the client's in-house designers and developers had the right tools to roll out the re-design themselves.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Final Designs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">Final Designs</p>
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png"
                  alt="Gordon Center Essential Cardiac Auscultation tablet view"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Results">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">21</div>
                <p className="text-muted-foreground">Unique usability issues identified</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">21</div>
                <p className="text-muted-foreground">Mockups of design solutions delivered</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">9</div>
                <p className="text-muted-foreground">Moderated usability tests conducted</p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Learnings">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              With more time, I would have expanded the testing group beyond three medical students.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              A larger pool would have given a clearer picture of the different learning preferences in play, and let me directly assess the impact of the design changes by re-testing with the same participants.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The project also reinforced a lesson worth keeping: when iterating on an existing product, there is no perfect solution. There are many ways to solve a problem as long as there is good reasoning behind the impact on the user — and the only way to determine the effectiveness of a solution is to test it.
            </p>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="mindful-wellness" />
      <Footer />
    </main>
  );
};

export default CaseStudyMindfulWellness;
