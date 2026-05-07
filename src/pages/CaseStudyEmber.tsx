import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';
import emberHero from '@/assets/ember-hero.png';

const CDN = 'https://cdn.prod.website-files.com';
const img = {
  problem: `${CDN}/6694595a404e90e454944ebc/66972d7433a4b5b00a6e3f84_666afcbf72c918d2f039452e_Frame-27022-1.png`,
  approach: `${CDN}/6694595a404e90e454944ebc/669da08cf0d7fae1582ef405_Capstone%20Final%20Presentation%20Ember%20Mobile%20App%20(12).png`,
  problemSupport: `${CDN}/6694595a404e90e454944ebc/66972eac531987ec870944c2_66946d1a3dc19067eaffad22_666b83d5bdc36ddb261b87e5_Frame%2027023%20(3).png`,
  surveySample: `${CDN}/6694595a404e90e454944ebc/66a2fba36e12c804f1336e44_669c65c385f1cc540634e703_Screenshot%25202024-07-20%2520at%25209.29.19%25E2%2580%25AFPM%25201%2520(1).png`,
  affinity: `${CDN}/6694595a404e90e454944e3d/669ea21f563566521f1c9759_Slide%204_3%20-%207%20(3).png`,
  personas1: `${CDN}/6694595a404e90e454944e3d/669ea43fcfad6cf0991cd46e_Slide%204_3%20-%208%20(1).png`,
  personas2: `${CDN}/6694595a404e90e454944e3d/669eab0e3cd70ed28c03478b_Frame%2027068.png`,
  journey: `${CDN}/6694595a404e90e454944e3d/669eaf46d8c66717ae7f2078_Frame%2027080.png`,
  empathy: `${CDN}/6694595a404e90e454944e3d/669eaf468cc1c380582c721b_Frame%2027079.png`,
  empathy2: `${CDN}/6694595a404e90e454944e3d/669eb1fdd8cffa4fed49a194_Frame%2027081%20(1).png`,
  requirements: `${CDN}/6694595a404e90e454944e3d/669eb6783fc31ff3a03b8fa6_Slide%204_3%20-%209.jpg`,
  testing: `${CDN}/6694595a404e90e454944e3d/669eb99b8d8ad02c3da7c241_Slide%204_3%20-%2010.jpg`,
};

const VideoEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-card">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

const FullImage = ({ src, alt, aspect = 'aspect-[16/10]' }: { src: string; alt: string; aspect?: string }) => (
  <div className={`rounded-2xl overflow-hidden bg-card ${aspect}`}>
    <ImageLightbox src={src} alt={alt} className={`w-full h-full object-cover ${aspect}`} />
  </div>
);

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
                { label: 'Project Type', value: 'MFA Capstone — University of Miami' },
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
              <img src={emberHero} alt="Ember mobile app hero" className="w-full object-cover aspect-[16/9] md:aspect-[21/9]" />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-8">
              <a
                href="https://www.figma.com/proto/Xbs9SNMw0PoKisu2ixYTfd/capstone-protoype?node-id=1160-31529"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                View Figma prototype
              </a>
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

            <h3 className="text-lg md:text-xl font-medium mb-3">Overview</h3>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              For my MFA Interactive Media Capstone Project, I owned the entire MVP development of Ember — a self-improvement app designed to kickstart users on their personal development journey.
            </p>

            <h3 className="text-lg md:text-xl font-medium mb-3">Key responsibilities</h3>
            <ul className="space-y-3 mb-8 text-base md:text-lg text-muted-foreground font-serif leading-relaxed list-disc pl-5">
              <li>Designed the onboarding process for first-time users to ensure a smooth, engaging introduction to the app.</li>
              <li>Created a journal page with prompts and entries to encourage users to reflect on and document their personal experiences.</li>
              <li>Highlighted users' daily goals and habits, helping them stay on track with their personal routines and objectives.</li>
            </ul>

            <h3 className="text-lg md:text-xl font-medium mb-3">Outcomes</h3>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground font-serif leading-relaxed list-disc pl-5">
              <li>Conducted six moderated virtual usability tests — all participants believed the unique journal insights could help reduce uncertainty about their goals.</li>
              <li>Presented the final prototype to key leadership in my MFA program.</li>
              <li>Successfully showcased the value and impact of the design solutions in supporting individuals on their personal growth journey.</li>
            </ul>
          </SplitSection>
        </div>
      </section>

      {/* Prototype intro + video */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Prototype">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I prototyped key interactions of a robust app that meets users where they are and guides them toward personal growth.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              These six prototyped workflows were critical for testing interactions and ensuring processes — like creating a journal entry — felt intuitive rather than overwhelming. Presenting to peers in class let me gather immediate feedback and refine the experience before user testing.
            </p>
            <FullImage src={img.approach} alt="Ember prototype overview" />
            <div className="mt-8">
              <VideoEmbed id="oXWI_eXER_U" title="Ember Mobile App preview" />
            </div>
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
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Plenty of people make a plan to build new habits, but abandon them due to a lack of clarity in themselves or a missing system for accountability. I wanted to explore ways to influence adults to develop healthier self-development habits.
            </p>
            <FullImage src={img.problem} alt="Problem space framing" />
          </SplitSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Project Approach">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Over 14 weeks, I led the end-to-end human-centered design process for a mobile app aimed at increasing consistency in self-development practices.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              My process focused on the new-user onboarding journey and key tasks for experienced users, including home, profile, journal entries, insights, vision boards, and habits pages. Two rounds of iteration on tested designs resulted in an app that meets users where they are and guides them toward personal growth.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Across all six tested features, participants found the design made journaling and goal achievement both engaging and accessible.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                ['2 weeks', 'User research, problem redefinition through affinity mapping, and strategy.'],
                ['2 weeks', 'Mapping the user journey for new users and developing information architecture.'],
                ['5 weeks', 'Delivering low- and high-fidelity mockups and prototypes.'],
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
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I ran a 15-question Qualtrics survey with 23 participants and interviewed 6 people for deeper insights into their experiences and challenges with goal setting, tracking, and journaling.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              This research aimed to validate my assumptions on the need for accountability, the role of positive emotions in maintaining daily practices, the impact of feeling secure in oneself, and the need for consistent mental well-being while pursuing goals.
            </p>
            <FullImage src={img.surveySample} alt="Survey question samples" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3">Survey question samples</p>
          </SplitSection>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research Findings">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Young adults face pressure from many parts of their lives, making it hard to keep growing personally.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Through an affinity diagramming exercise, I reviewed user data, organized, and summarized key points. Those dealing with mental health challenges struggle most to stay motivated and consistent in their personal development efforts.
            </p>

            <div className="mb-8">
              <FullImage src={img.affinity} alt="Affinity diagram findings" />
            </div>

            <div className="space-y-6">
              {[
                ['Stress and overwhelm', 'Many feel overwhelmed by the pressure to succeed, which impacts their ability to focus on personal growth.', '“I don\u2019t really set goals for myself, and because of that I find myself sometimes lost in life and not knowing what to do next.” — Interview participant 1'],
                ['Lack of clarity and support', 'Many individuals lack a clear system for tracking their goals and feel lost without external support.', '“I find it challenging to maintain consistency without external support or tracking methods.” — Interview participant 5'],
                ['Self-criticism weighs heavy', 'Negative self-talk and low mental health hinder personal growth and reduce motivation.', '“If I\u2019m anxious and think I missed doing a habit — in my mind, since I messed up, I don\u2019t need to achieve my goal.” — Interview participant 3'],
              ].map(([h, body, q]) => (
                <div key={h} className="bg-card p-6 md:p-8 border border-border rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{h}</p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4">{body}</p>
                  <blockquote className="border-l-2 border-border pl-4 italic text-base md:text-lg font-serif text-muted-foreground leading-relaxed">{q}</blockquote>
                </div>
              ))}
            </div>
          </SplitSection>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Personas">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I identified three archetypes — and focused the MVP on the “lost” user.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Aspiring novices, struggling beginners, and ambitious experts all share a desire to take control of their lives. I focused on the “lost” users — young adults feeling stuck due to mental barriers — because there was the most opportunity to help this group build journaling, goal tracking, and reflection habits.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              A key challenge was educating these adults on better self-development practices like journaling, goal tracking, and emotion reflection — and ensuring consistent behavior across them.
            </p>
            <div className="space-y-6">
              <FullImage src={img.personas1} alt="Three user archetypes" />
              <FullImage src={img.personas2} alt="Persona detail" />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Journey">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              The biggest design challenge was influencing user behavior without overwhelming new users.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Feedback from my program facilitator highlighted that the onboarding flow risked overwhelming users due to the app's many paths and features, so the entire onboarding and new-user experience needed to be revised.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              To address this, I gradually introduced the journal insight feature as users explored the app and logged their emotions. By locking certain features for first-time users — and only unlocking journal insights after the 7th day of logging emotions — I aimed to encourage regular use and habit formation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              This approach assumed that incentivizing users to unlock a feature would improve activation metrics like emotion-logging frequency. It led to a more intentional design and a simpler onboarding experience.
            </p>
            <FullImage src={img.journey} alt="User journey for new users" />
          </SplitSection>
        </div>
      </section>

      {/* User Empathy / Tone of Voice */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Empathy">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I refined the app's tone of voice and language across all interactions to ensure Ember consistently provided a nurturing, supportive experience.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Given Ember's emphasis on mindfulness and personal growth, the content language needed to empower and uplift users — fostering a safe, welcoming environment. Missteps in tone could significantly impact user confidence in software designed to influence psychology.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Onboarding</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  A warm, encouraging tone from the start was essential — guiding users smoothly and setting a positive tone for their journey within Ember.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Restricted features</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Communicating about restricted features without discouraging users was important — maintaining a supportive tone that motivated further exploration of the app.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Tone of voice</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Empower-and-uplift language was rewritten across the app to create a safe, welcoming environment for personal growth.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Journal insights</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Clear descriptions of sentiment analysis kept users informed about how entries were analyzed, enhancing their connection and engagement with the feature.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <FullImage src={img.empathy} alt="Tone of voice exploration" />
              <FullImage src={img.empathy2} alt="Exploring solutions for tone" />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Defining Requirements */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Defining Requirements">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I prototyped key interactions of a robust app that not only meets users where they are but guides them toward personal growth.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              These six prototyped workflows were critical for testing interactions and ensuring processes — like creating a journal entry — were intuitive and not overwhelming. Presenting to peers helped me gather immediate feedback and shape the experience before formal testing.
            </p>
            <FullImage src={img.requirements} alt="Defining requirements" />
          </SplitSection>
        </div>
      </section>

      {/* User Testing */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Testing">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              I led 6 virtual user testing sessions to validate the core features and inform iteration.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I tested the high-fidelity prototypes on Figma, showcasing Ember's major functionalities and user workflows to participants matching the “lost” user archetype.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Tested prototypes included detailed interactions for onboarding, journaling, and routine building/logging. Participants navigated the app's main functionality and provided feedback on interface, design clarity, and feature relevance.
            </p>
            <FullImage src={img.testing} alt="User testing setup" />
            <div className="mt-8">
              <VideoEmbed id="SCBvADTYbcU" title="First iteration of prototype solution" />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Iterations */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Feedback + Iterations">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              User testing surfaced 20 insights — three changed the direction of the MVP.
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Personalization</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4">
                  Users wanted more control. I expanded profile customization, let users hide/show personal data, and improved the emotion-tracking graph with monthly and weekly views.
                </p>
                <blockquote className="border-l-2 border-border pl-4 italic text-base md:text-lg font-serif text-muted-foreground leading-relaxed">
                  “I would like more customization in my profile. Can I choose day-by-day analytics as well as month-by-month?”
                </blockquote>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Fewer locked features</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4">
                  All 6 participants felt restricted features for first-time users were de-motivating. I adjusted the access model to unlock more features initially, making the app engaging from day one.
                </p>
                <blockquote className="border-l-2 border-border pl-4 italic text-base md:text-lg font-serif text-muted-foreground leading-relaxed">
                  “What can I do as a first-time user? There are way too many locked features. This will not improve my motivation — it feels like a paywall.”
                </blockquote>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Clearer journal prompts</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4">
                  Participants needed clearer instructions and visual cues within the journal and insights pages. I improved the content of the prompt cards and added obvious visual indicators to support better navigation and understanding.
                </p>
                <blockquote className="border-l-2 border-border pl-4 italic text-base md:text-lg font-serif text-muted-foreground leading-relaxed">
                  “Are these prompts? These don\u2019t look like journal prompts.”
                </blockquote>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Solutions">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-10 leading-tight">
              Three feature solutions that bring Ember to life.
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Journaling feature</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  To help users reflect on experiences and understand their emotions, I created an engaging, thought-provoking journaling experience. The app analyzes entries to surface insights, helping users recognize patterns and gain deeper understanding of their mental states.
                </p>
                <VideoEmbed id="TkjuqWlC2dE" title="Journaling feature walkthrough" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Vision board feature</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  To address users feeling overwhelmed by undefined goals, I designed a highly visual, interactive vision board. Users add images, text, and elements representing their goals — clarifying intentions and keeping aspirations visible and motivating.
                </p>
                <VideoEmbed id="SIwPN9Srgm0" title="Vision board feature walkthrough" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Programs &amp; milestones</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  To support users developing positive habits and a growth mindset, I designed expert-led programs with structured milestones, rewards, and badges to reinforce positive behavior and encourage continuous self-improvement.
                </p>
                <VideoEmbed id="BCzuEGVuXSY" title="Programs and milestones feature walkthrough" />
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Metrics + Learnings */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Metrics + Learnings">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              As an MFA Capstone, this project came with time and budget constraints — and a focused set of next steps.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-10">
              Ideally I would have interviewed a larger sample of individuals experiencing stress and anxiety related to self-development. One of the main challenges was streamlining the product's many features. If I were to keep developing Ember, I'd prioritize the journal insights feature and launch it as the MVP in the go-to-market strategy.
            </p>

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

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Metrics &amp; user engagement</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  For a market launch, I'd focus on retention rates and Genuine Active Users (GAUs) to measure engagement. Monitoring total journal entries per user would help assess the effectiveness of the solution.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Future development &amp; feasibility</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  The product was designed assuming a sentiment analysis API for personalized insights. Next, I'd collaborate with a developer to evaluate the feasibility of the journal insights feature and ensure it can be built successfully.
                </p>
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
