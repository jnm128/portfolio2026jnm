import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';
import errorSafeHeroVideo from '@/assets/error-safe-hero.mp4';
import errorSafeHeroPoster from '@/assets/error-safe-hero-poster.jpg';

const CDN = 'https://cdn.prod.website-files.com';
const img = {
  problem: `${CDN}/6694595a404e90e454944ebc/669f42f54198a3183ed6e988_Slide%204_3%20-%2012.png`,
  approach: `${CDN}/6694595a404e90e454944ebc/66a0422734a1f2ea3220ee08_Slide%204_3%20-%2014%20(1).jpg`,
  research: `${CDN}/6694595a404e90e454944ebc/669f42d7439b0d162a2f7265_Slide%204_3%20-%2013.png`,
  details: `${CDN}/6694595a404e90e454944e3d/669ea21f563566521f1c9759_Slide%204_3%20-%207%20(3).png`,
  findings: `${CDN}/6694595a404e90e454944e3d/669ea43fcfad6cf0991cd46e_Slide%204_3%20-%208%20(1).png`,
  personas: `${CDN}/6694595a404e90e454944e3d/669eab0e3cd70ed28c03478b_Frame%2027068.png`,
  journey: `${CDN}/6694595a404e90e454944e3d/669eaf46d8c66717ae7f2078_Frame%2027080.png`,
  empathy: `${CDN}/6694595a404e90e454944e3d/669eaf468cc1c380582c721b_Frame%2027079.png`,
  exploring: `${CDN}/6694595a404e90e454944e3d/669eb1fdd8cffa4fed49a194_Frame%2027081%20(1).png`,
  requirements: `${CDN}/6694595a404e90e454944e3d/669eb6783fc31ff3a03b8fa6_Slide%204_3%20-%209.jpg`,
  testing: `${CDN}/6694595a404e90e454944e3d/669eb99b8d8ad02c3da7c241_Slide%204_3%20-%2010.jpg`,
  iter1: `${CDN}/6694595a404e90e454944e3d/669ed9e774b010af7edc0c30_Frame%2027083.png`,
  iter2: `${CDN}/6694595a404e90e454944e3d/669eda92dcd28e93642eaea9_Frame%2027084.png`,
  iter3: `${CDN}/6694595a404e90e454944e3d/669ed9e7e924fa23c9847492_Frame%2027085.png`,
  iter4: `${CDN}/6694595a404e90e454944e3d/669ed9e783abd20ea69f89f6_Frame%2027087.png`,
  impact1: `${CDN}/6694595a404e90e454944e3d/669ee03e80f0bd6ffaafbd4e_Slide%204_3%20-%208.jpg`,
  impact2: `${CDN}/6694595a404e90e454944e3d/669ee0b0cf3c690bdcbf2a1a_Slide%204_3%20-%209%20(1).jpg`,
  impact3: `${CDN}/6694595a404e90e454944e3d/669ee03da75eb403e1f87fa0_Slide%204_3%20-%204.jpg`,
};

const FIGMA_URL =
  'https://www.figma.com/proto/hGzD4dNhIzct3cHyDw5jmT/Error-Reporting-System-Spring-2023?node-id=356-37727';

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
                { label: 'Project Type', value: 'Graduate project — Human Centered Design' },
                { label: 'Industry', value: 'SaaS, Healthcare, HIPAA, Employee Admin' },
                { label: 'Category', value: 'UX Design, Product Design' },
                { label: 'My Role', value: 'UX Designer (Team of 5)' },
                { label: 'Responsibilities', value: 'Strategy, IA, Dashboards, Tokens' },
                { label: 'Timeline', value: '6 weeks / 2023' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm md:text-base font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl mt-12 bg-card">
              <video src={errorSafeHeroVideo} autoPlay loop muted playsInline preload="auto" aria-label="Error Safe injury reporting platform hero" className="w-full object-cover aspect-[16/9] md:aspect-[21/9]" />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-8">
              <a
                href={FIGMA_URL}
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
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Human-centered solutions to improve transparency and reliability in the accident reporting process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              The Error Safe accident reporting platform is a comprehensive, easy-to-use tool that uses clear data visuals and smart analytics to explore work-related injuries in elder-care organizations.
            </p>
            <h3 className="text-lg md:text-xl font-medium mb-3">Goal</h3>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              This academic project identified solutions to streamline the workload of nurse administrators in processing accident reports, tracking employee cases, and submitting OSHA 300 accident reports on behalf of hurt staff members.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Low levels of healthcare work-related accident reporting are caused by a lack of staff awareness and a rigid reporting process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Nurse admins tend to be unaware of accidents that happen in the workplace and are less informed about preventing work-related accidents. Low reporting often comes down to long OSHA 300 process times, unreliable documentation, and the need to stay HIPAA-compliant.
            </p>
            <FullImage src={img.problem} alt="Problem space" />
          </SplitSection>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Project Approach">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Navigating ambiguity to design a simplified reporting system that improves transparency in the error reporting process.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Understanding the current reporting process was essential to empathize with the roles involved in tracking an OSHA 300 report inside a nursing-home organization. That empathy drove the design of a B2B SaaS solution aimed at simplifying the process while ensuring accuracy and compliance.
            </p>

            <div className="space-y-6 mb-10">
              {[
                ['Week 1', 'Conducted extensive secondary research and developed a comprehensive design brief to understand challenges faced by healthcare staff.'],
                ['Weeks 2–3', 'Translated pain points into system goals and user tasks, and facilitated team brainstorming sessions.'],
                ['Weeks 4–5', 'Created sketches, wireframes, and prototypes for 11 user flows — including dashboard, report repository, profile settings, and communication tools — and ran design reviews.'],
                ['Week 6', 'Iterated on designs to address unsolved challenges, optimized the solution, and designed micro-interactions to enhance the prototype.'],
              ].map(([w, d]) => (
                <div key={w}>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{w}</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <FullImage src={img.approach} alt="Project approach" />
          </SplitSection>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              The existing process for submitting OSHA 300 reports is lengthy and complex.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I reviewed academic articles and industry reports to understand the current landscape of incident reporting — and learned that turning an incident into a closed case can take up to 30 days. I journey-mapped the reporting process to find the biggest bottleneck blocking case closure.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
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

            <FullImage src={img.research} alt="Research findings on OSHA 300 process" />
          </SplitSection>
        </div>
      </section>

      {/* Key Players */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Key Players">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Pinpointing the people responsible for moving a report into a case.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Registered Nurses (RNs) frequently initiate accident reports, while the Assistant Director of Nursing (ADON), Director of Nursing (DON), and administrators review and convert reports into cases. Understanding these touchpoints made it clear the solution had to support tracking accidents and staff and submitting relevant files for OSHA.
            </p>
            <FullImage src={img.details} alt="Roles in the reporting process" />
          </SplitSection>
        </div>
      </section>

      {/* Research Findings — Designing for multiple roles */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research Findings">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Designing a software for multiple roles.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              My partner and I created a comprehensive site map to outline system requirements and features for a robust platform that includes incident management and improved team communication. I then defined key assumptions to ensure the system met the needs of all users while remaining HIPAA-compliant.
            </p>

            <div className="space-y-4 mb-10">
              {[
                ['Role-based customization', 'Dashboard data is customizable based on the logged-in user\u2019s role (e.g., admin staff vs. nursing staff).'],
                ['Priority organization', 'Reports and cases are automatically organized from low to high priority based on the type of incidents recorded.'],
                ['Case management', 'Reports are entered by nursing staff and must be manually converted into open cases by admin users.'],
                ['Real-time updates', 'Incident reports in the system update in real time.'],
              ].map(([h, d]) => (
                <div key={h} className="bg-card p-6 border border-border rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{h}</p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <FullImage src={img.findings} alt="Site map and system assumptions" />
          </SplitSection>
        </div>
      </section>

      {/* User Personas / Target Focus */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Personas">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Prioritizing use cases for Nurse Administrative roles.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Given time and resource constraints, we focused on Nurse Administrative roles — those responsible for monitoring and reviewing incident reports — to address the most critical pain points impacting reporting success.
            </p>

            <div className="space-y-4 mb-10">
              {[
                ['Awareness & monitoring', 'Admins need constant awareness of issues within their department and the volume of incidents reported.'],
                ['Reporting duties', 'Admins must review and create workers\u2019 comp and OSHA 300 reports for specific incident cases.'],
                ['Long wait times', 'Admins need to be informed about the report process — but a lack of communication and updates after submission is common.'],
              ].map(([h, d]) => (
                <div key={h} className="bg-card p-6 border border-border rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{h}</p>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <FullImage src={img.personas} alt="Nurse administrator persona detail" />
          </SplitSection>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Journey">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Presenting key information across 25 software requirements without overwhelming users.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I focused on designing solutions and user flows for critical tasks in the home dashboard, accident reports page, cases page, employees page, user settings page, and staff messaging page. Showing relevant information clearly and concisely across screens was essential.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {[
                ['View assigned cases', 'Filter assigned cases by progress status and date.'],
                ['Monitor staff activities', 'View staff work status, accident reporting activity, and message them directly.'],
                ['Monitor open cases & reports', 'View current, closed, and pending cases and review recently submitted reports at a glance.'],
              ].map(([h, d]) => (
                <div key={h}>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{h}</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <FullImage src={img.journey} alt="User journey flows" />
          </SplitSection>
        </div>
      </section>

      {/* User Empathy */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Empathy">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              I enhanced the system's trust, readability, and accessibility through visual design tokens.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              I worked closely with my partner to unify the nursing staff's portal view by harmonizing icons, language, colors, and components — ensuring consistency across the system's interface.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Using a WCAG color-contrast checker, I improved the readability of key data points by validating background and content colors against accessibility standards.
            </p>
            <FullImage src={img.empathy} alt="Visual design tokens for accessibility" />
          </SplitSection>
        </div>
      </section>

      {/* Exploring Solutions */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Exploring Solutions">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Nurse administrators lack visibility into company-wide incident analytics that would inform their next actions.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              To improve report transparency and efficiency for nurse administrative staff, the dashboard needed key analytics — an overview of accident report volume, frequency, and yearly/monthly trends — so admins could move cases forward.
            </p>
            <FullImage src={img.exploring} alt="Exploring dashboard solutions" />
          </SplitSection>
        </div>
      </section>

      {/* Defining Requirements */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Defining Requirements">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Tooltip micro-interactions and dashboard best practices help new users recall and understand key information.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Dashboard design calls for prioritizing data elements by location, so I placed the most important data top-left and incorporated checklists in the dashboard interface to reinforce memory of high-priority items.
            </p>
            <FullImage src={img.requirements} alt="Defining dashboard requirements" />
          </SplitSection>
        </div>
      </section>

      {/* User Testing */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Testing">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Walking through the first iteration of the prototype solution.
            </h2>
            <FullImage src={img.testing} alt="User testing setup" />
            <div className="mt-8">
              <VideoEmbed id="SCBvADTYbcU" title="First iteration of prototype solution" />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Iterations">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 leading-tight">
              Four iterations that significantly reduced cognitive load for nurse admins.
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">A well-organized reports table</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  Viewing submitted reports and monitoring case progress can be overwhelming due to the volume of information and the need for consistent oversight. A well-organized reports page that displays a table of all reports — with filtering controls — significantly reduces administrators' cognitive load and improves oversight, helping them swiftly locate the records they need.
                </p>
                <FullImage src={img.iter1} alt="Reports table iteration" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Prioritized team communication</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  Maintaining awareness of accident cases and staff well-being requires constant vigilance. Enhancing the software with built-in team communication helps administrators stay updated, attend to concerns immediately, and foster trust within the team.
                </p>
                <FullImage src={img.iter2} alt="Team communication iteration" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Notification center &amp; checklists</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  A notification center and reminders help nurse administrators manage their daily responsibilities while keeping track of newly reported incidents — handling tasks efficiently without getting overwhelmed.
                </p>
                <FullImage src={img.iter3} alt="Notification center iteration" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Secure profile management</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
                  A secure profile management feature with industry-standard verification reduces concerns around the security of incident reports — protecting sensitive information and reinforcing the integrity and confidentiality of every report.
                </p>
                <FullImage src={img.iter4} alt="Secure profile management iteration" />
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Impact">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              A comprehensive system that supports nursing administrators in their daily tasks and keeps them ahead of accident reporting.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Metrics I'd love to measure in a real-world rollout:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {[
                ['Efficiency', 'Whether streamlined user flows and optimized dashboards enable faster, more accurate reporting and reduce time spent on administrative tasks.'],
                ['Accuracy', 'Whether features like case filtering and detailed staff profile views ensure all relevant information is accurately recorded and monitored.'],
                ['Engagement', 'Whether enhanced communication tools and notifications keep users informed and connected — promoting better collaboration and oversight.'],
              ].map(([h, d]) => (
                <div key={h}>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{h}</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <FullImage src={img.impact1} alt="Final design — overview" />
              <FullImage src={img.impact2} alt="Final design — case management" />
              <FullImage src={img.impact3} alt="Final design — staff messaging" />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Learnings">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Designing data-intensive products means managing both inputs and outputs.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-10">
              I needed to recognize the types of data entering the system and the various scenarios that could affect that data — anticipating issues that might disrupt user workflows so people could navigate and interact with the system efficiently.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">Collaboration &amp; feasibility</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Revisiting this project, I'd collaborate earlier with developers, security experts, and health-SaaS specialists to validate that the proposed system was technically viable, secure, and scalable.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-3">User testing &amp; feedback</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Feedback came primarily from my professor and grad-student peers. Ideally, I'd test with real nursing administrators to gather practical insights and iterate further.
                </p>
              </div>
            </div>

            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              View Figma prototype
            </a>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="error-safe" />
      <Footer />
    </main>
  );
};

export default CaseStudyErrorSafe;
