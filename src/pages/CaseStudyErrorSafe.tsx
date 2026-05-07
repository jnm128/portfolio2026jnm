import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import errorSafeHero from '@/assets/error-safe-hero.png';

const CaseStudyErrorSafe = () => {
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
              Error Safe — Injury reporting management system
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              Streamlining work-related injury reporting and employee management for nurse administrators.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'Graduate HCD project' },
                { label: 'Industry', value: 'Healthcare / Eldercare' },
                { label: 'Category', value: 'UX Design, Product Design' },
                { label: 'My Role', value: 'Product & UX Designer' },
                { label: 'Team', value: 'Team of 5' },
                { label: 'Timeline', value: '2024' },
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
                src={errorSafeHero}
                alt="Error Safe injury reporting platform hero"
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
              Human-centered solutions to improve transparency and reliability in the accident reporting process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The Error Safe accident reporting platform is a comprehensive, easy-to-use tool that uses clear data visuals and smart analytics to explore work-related injuries in elder-care organizations. The goal: streamline the workload of nurse administrators in processing accident reports, tracking employee cases, and submitting OSHA 300 reports on behalf of hurt staff.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Low levels of healthcare work-related accident reporting are caused by a lack of staff awareness and a rigid reporting process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Nurse admins tend to be unaware of accidents that happen in the workplace and are less informed about preventing work-related accidents. Low reporting often comes down to long OSHA 300 process times, unreliable documentation, and the need to stay HIPAA-compliant.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              The existing process for submitting OSHA 300 reports is lengthy and complex.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I reviewed academic articles and industry reports to understand the current landscape of incident reporting, then journey-mapped the reporting process to find the biggest bottleneck blocking case closure. I learned that turning an incident into a closed case can take up to 30 days.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                ['Privacy concerns', 'Employers must balance accurate logging with employee privacy, often requiring consent to disclose identifying details.'],
                ['Busy schedules', 'Healthcare workers are often too overwhelmed with other responsibilities to report incidents promptly.'],
                ['Long turnaround times', 'The extended process of closing OSHA reports discourages timely and accurate reporting.'],
              ].map(([h, d]) => (
                <div key={h}>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{h}</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Roles */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Key Players">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Pinpointing the people responsible for moving a report into a case.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Registered Nurses (RNs) frequently initiate accident reports, while the Assistant Director of Nursing (ADON), Director of Nursing (DON), and administrators review and convert reports into cases. Understanding these touchpoints made it clear the solution had to support tracking accidents and staff and submitting relevant files for OSHA.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Target Focus */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Target Focus">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              We focused on the Nurse Administrative roles to address the most critical pain points.
            </h2>
            <div className="space-y-6">
              {[
                ['Awareness & monitoring', 'Admins need constant awareness of issues within their department and the volume of incidents reported.'],
                ['Reporting duties', 'Admins must review and create workers\u2019 comp and OSHA 300 reports for specific incident cases.'],
                ['Long wait times', 'Admins need to be informed about the report process — but a lack of communication and updates after submission is common.'],
              ].map(([h, d]) => (
                <div key={h} className="bg-card p-6 md:p-8 border border-border rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{h}</p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Design Challenges */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Challenges">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Presenting key information across 25 software requirements without overwhelming users.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I focused on the home dashboard, accident reports, cases, employees, user settings, and staff messaging — designing flows for the most critical user tasks while keeping the interface readable and accessible.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Visual hierarchy</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  The most important data lives top-left, with checklists embedded in the dashboard to support memory of high-priority items.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Accessibility tokens</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  I unified icons, language, colors, and components with my partner, then verified contrast against WCAG to improve readability of key data points.
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
              Three iterations that significantly reduced cognitive load for nurse admins.
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">A well-organized reports table</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  A single table of all reports — with filters — let admins swiftly locate the records they needed and reduced the cognitive load of tracking incident cases.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Prioritized team communication</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Direct messaging within the platform let admins quickly check on staff well-being, fostering trust and faster response when issues arose.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Notification center & checklists</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Daily notifications and a reminder feature helped admins manage their tasks while staying on top of newly reported incidents — without getting overwhelmed.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Learnings">
            <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 leading-tight">
              Designing data-intensive products means managing both inputs and outputs.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Collaboration & feasibility</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Revisiting this project, I\u2019d collaborate earlier with developers, security experts, and health-SaaS specialists to validate that the proposed system was technically viable, secure, and scalable.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">User testing & feedback</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Feedback came primarily from my professor and grad-student peers. Ideally, I\u2019d test with real nursing administrators to gather practical insights and iterate further.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="error-safe" />
      <Footer />
    </main>
  );
};

export default CaseStudyErrorSafe;
