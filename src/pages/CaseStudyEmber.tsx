import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import emberHero from '@/assets/ember-hero.png';

const CaseStudyEmber = () => {
  const navigate = useNavigate();

  return (
    <main className="relative">
      {/* Hero */}
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
              Ember mobile app
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              Increasing consistency in self-development practices by providing lost adults with a curated path to healthier habits.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'MFA Capstone — University of Miami' },
                { label: 'Industry', value: 'Mental Health, Self-development' },
                { label: 'Category', value: 'Product Design, UX Design' },
                { label: 'My Role', value: 'Product & UX Designer' },
                { label: 'Team', value: 'Team of 1' },
                { label: 'Timeline', value: '14 weeks / 2024' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12 bg-card">
              <img
                src={emberHero}
                alt="Ember mobile app hero"
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
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Creating a mindful digital experience for my MFA Interactive Media capstone project at the University of Miami.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I owned the entire MVP of Ember — a self-improvement app designed to kickstart users on their personal development journey. I designed the onboarding flow, a journal page with prompts, and a habits/goals view to keep users on track.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              I conducted six moderated virtual usability tests, and all participants believed the unique journal insights could help with feelings of uncertainty around their goals.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              How might we help people achieve their goals while incorporating mindfulness practices to reduce mental stress and empower their path to personal growth?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Many adults struggling with their mental health find it challenging to stay motivated and focused on their goals because of the worries and pressure of everyday life.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Plenty of people make a plan to build new habits, but abandon them due to a lack of clarity or accountability. I wanted to explore ways to influence adults to develop healthier self-development habits.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Approach">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Over 14 weeks, I led the end-to-end human-centered design process for a mobile app aimed at increasing consistency in self-development practices.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {[
                ['2 weeks', 'User research, problem redefinition through affinity mapping, strategy.'],
                ['2 weeks', 'Mapping the user journey for new users and developing information architecture.'],
                ['5 weeks', 'Delivering low and high-fidelity mockups and prototypes.'],
                ['2 weeks', 'User testing the prototype with the target archetype.'],
                ['3 weeks', 'Iterating on six main pages and five task flows for the final deliverable.'],
              ].map(([w, d]) => (
                <div key={w}>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{w}</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Exploring the current struggles in journaling and goal setting among adults.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I ran a 15-question Qualtrics survey with 23 participants and interviewed 6 people for deeper insights into their experiences and challenges with goal setting, tracking, and journaling.
            </p>

            <div className="space-y-6">
              {[
                ['Stress and overwhelm', '“I don\u2019t really set goals for myself, and because of that I find myself sometimes lost in life and not knowing what to do next.”'],
                ['Lack of clarity and support', '“I find it challenging to maintain consistency without external support or tracking methods.”'],
                ['Self-criticism weighs heavy', '“If I\u2019m anxious and think I missed doing a habit — in my mind, since I messed up, I don\u2019t need to achieve my goal.”'],
              ].map(([h, q]) => (
                <div key={h} className="bg-card p-6 md:p-8 border border-border rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{h}</p>
                  <blockquote className="text-base md:text-lg font-serif text-muted-foreground leading-relaxed">{q}</blockquote>
                </div>
              ))}
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Target user */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Target User">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I identified three archetypes — and focused the MVP on the “lost” user.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Aspiring novices, struggling beginners, and ambitious experts all share a desire to take control of their lives. I focused on the “lost” users — young adults feeling stuck due to mental barriers — because there was the most opportunity to help this group build journaling, goal tracking, and reflection habits.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Design Challenges */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Challenges">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              The biggest challenge was influencing user behavior without overwhelming new users.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Onboarding</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  The onboarding language needed to be welcoming and supportive — guiding users smoothly and setting a positive tone for their journey within Ember.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Restricted features</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  I gradually introduced the journal insight feature — locking it for first-time users until they\u2019d logged emotions for 7 days — to encourage habit formation.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Tone of voice</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Missteps in tone could significantly impact user confidence in software designed to influence psychology, so the entire content language was rewritten to empower and uplift.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Journal insights</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Clear descriptions of sentiment analysis kept users informed about how entries were analyzed, enhancing their connection and engagement with the feature.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Iterations */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Iterations">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              User testing surfaced 20 insights — two changed the direction of the MVP.
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Personalization</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Users wanted more control. I expanded profile customization, let users hide/show personal data, and improved the emotion tracking graph with monthly and weekly views.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Fewer locked features</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  All 6 participants felt that restricted features for first-time users were de-motivating. I adjusted the access model to unlock more features initially, making the app more engaging from day one.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Outcomes">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">6</div>
                <p className="text-muted-foreground">Moderated usability tests with “lost” archetype users</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">5</div>
                <p className="text-muted-foreground">Prototyped task flows shipped for testing</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">100%</div>
                <p className="text-muted-foreground">Of participants felt the journal insights would help reduce uncertainty about goals</p>
              </div>
            </div>
            <a
              href="https://www.figma.com/proto/Xbs9SNMw0PoKisu2ixYTfd/capstone-protoype?node-id=1160-31529"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              View Figma prototype
            </a>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="ember" />
      <Footer />
    </main>
  );
};

export default CaseStudyEmber;
