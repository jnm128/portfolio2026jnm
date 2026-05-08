import React from 'react';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/FadeIn';
import SplitSection from '@/components/SplitSection';
import ImageLightbox from '@/components/ImageLightbox';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80';
const SUPPORT_IMAGE_1 = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80';
const SUPPORT_IMAGE_2 = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80';

const CaseStudyArshtRewards: React.FC = () => {
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
              Arsht Rewards Customer Loyalty website
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
              Improving low customer turnout rates through a customer reward program website for the Adrienne Arsht Center.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 mt-10">
              {[
                { label: 'Client', value: 'Adrienne Arsht Center' },
                { label: 'Industry', value: 'Arts & Culture' },
                { label: 'Category', value: 'Product Design, UX Design' },
                { label: 'My Role', value: 'UX Designer' },
                { label: 'Team', value: 'Team of 3' },
                { label: 'Timeline', value: '16 weeks / 2022' },
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
              <img
                src={HERO_IMAGE}
                alt="Arsht Rewards customer loyalty website"
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
              Improving attendance and community member engagement for free events at the Adrienne Arsht Center.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              The Community Outreach and Engagement team at the Adrienne Arsht Center reached out to explore solutions to improve turnout rates for free events. Through an intensive human-centered design process and collaboration with the client and key stakeholders, my team created "Arsht Rewards" — a program engaging members through point incentives.
            </p>
            <h3 className="text-lg md:text-xl font-medium mb-3">Outcome</h3>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground font-serif leading-relaxed list-disc pl-5 marker:text-muted-foreground">
              <li>Through two rounds of iterations, I owned the creation of the landing page, the sign-up interaction, and 4 main pages — including a scan-ticket pop-over interaction and a rewards repository table.</li>
              <li>I spearheaded the iteration process, recommending a sophisticated and simple visual design to align the site with the Arsht Center's overall brand identity.</li>
              <li>The final design solution consisted of 10 pages, handed off to the front-end development team and built on the Webflow no-code platform.</li>
              <li>My team and I pitched the final product to the client, the marketing team, and key leadership within the Community Outreach and Engagement team.</li>
            </ul>
          </SplitSection>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Problem Space">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Large quantities of RSVP tickets, but staggeringly low attendance at free events.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The Adrienne Arsht Center faced a significant challenge in communicating the value of its free events. Despite a high number of RSVP tickets being reserved (e.g., 3,000 RSVPs), actual attendance and engagement at these free performances was much lower — around 600 attendees. The team was tasked with leveraging the strengths of the organization to build excitement, increase attendance, and reduce no-shows effectively.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Project Approach">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              How might we communicate the value of free events at the Arsht Center?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              Our team of nine specialists — 2 UX researchers, 3 designers (including myself), 4 developers, and a project manager — collaborated to develop a scalable solution. Our goal was to leverage the strengths of the Arsht Center's existing community to effectively communicate the value of its free events and address the issue of low attendance despite high RSVP numbers.
            </p>

            <h3 className="text-lg md:text-xl font-medium mb-3">My role in developing this product concept</h3>
            <ul className="space-y-4 text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              <li>
                <span className="font-medium text-title">Ideation:</span> I planned brainstorming meetings and surfaced multiple concepts with the team. The idea of a rewards program — "Arsht Rewards" — won by majority rule as a promising solution to incentivize engagement.
              </li>
              <li>
                <span className="font-medium text-title">Wireframing &amp; Prototyping:</span> I created 17 detailed wireframes and prototyped 2 main user flows to validate the content and layout of the site through virtual user testing.
              </li>
              <li>
                <span className="font-medium text-title">User Testing &amp; Iteration:</span> I spearheaded the iteration process, recommending a sophisticated and simple visual design for the final website to align with the Arsht Center's overall brand identity.
              </li>
            </ul>
          </SplitSection>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Research">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Collecting user insights to inform the design strategy of a customer rewards program.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              To understand the value of free events for attendees, I assisted the research team in drafting user surveys and interview questions. Research highlighted a clear preference for incentives and rewards when attending free events — and an opportunity to emphasize the importance of creating additional value for members beyond the performances themselves.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              By implementing a rewards system, the Arsht Center can <span className="font-medium text-title">significantly increase RSVP attendance</span>, encourage repeat visits, and build a loyal community of attendees. This approach not only addresses the immediate challenge but also strengthens the long-term relationship with the audience.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">User Personas</h3>
                <p className="text-sm md:text-base text-muted-foreground font-serif leading-relaxed">
                  Built two primary personas to anchor decisions around motivations, barriers, and reward preferences across recurring and first-time attendees.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">User Journey</h3>
                <p className="text-sm md:text-base text-muted-foreground font-serif leading-relaxed">
                  Mapped the end-to-end journey from RSVP to event check-in to identify where excitement dropped and where a points moment could re-engage attendees.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">User Empathy</h3>
                <p className="text-sm md:text-base text-muted-foreground font-serif leading-relaxed">
                  Synthesized empathy maps from interviews to capture what members were saying, doing, thinking, and feeling around free Arsht events.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Exploring Solutions */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Exploring Solutions">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              From concept exploration to a focused rewards program.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              The team explored multiple directions for re-engaging members — from personalized communications to social and community-driven features. The strongest signal from research pointed to incentives, so we converged on a rewards program with point earning tied to real attendance and a redemption catalog tailored to Arsht's existing perks.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Defining Requirements */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Defining Requirements">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Translating the concept into product requirements.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              I worked with the team to define what the platform needed to support: account sign-up, RSVP linking, an attendance scan flow, a points dashboard, and a rewards repository. Requirements were prioritized so the initial 10-page experience could be built and handed off to the developers within the project window.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* User Testing */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="User Testing">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Validating the first prototype with real users.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              I prototyped the core flows and ran virtual user tests on the first iteration to validate the layout, content, and ticket-scan interaction. Findings fed directly into the next round of design changes.
            </p>
            <div className="rounded-2xl overflow-hidden">
              <ImageLightbox
                src={SUPPORT_IMAGE_1}
                alt="Arsht Rewards prototype testing"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Iterations">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Two rounds of iteration sharpened the experience.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              I led the iteration process and recommended a sophisticated, simple visual direction so the rewards platform would feel cohesive with the Arsht Center's existing brand. Each pass tightened the sign-up interaction, the points dashboard, and the rewards repository — and reduced visual noise on the landing page.
            </p>
          </SplitSection>
        </div>
      </section>

      {/* Design Challenges */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Design Challenges">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-tight">
              Three design challenges shaped the final product.
            </h2>

            <div className="space-y-6 mt-2">
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Sign-up clarity</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  The first version of sign-up asked for too much up front. We pared it down so members could create an account in a few steps and start earning points right away.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Scan-ticket interaction</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Designing the scan-ticket pop-over required balancing speed at the door with confidence that points were credited correctly. The final pattern surfaces the points event clearly without slowing check-in.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-2">Rewards repository</h3>
                <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
                  Members needed an at-a-glance view of what their points could unlock. We landed on a structured repository table that was scannable on web and mapped cleanly to the Arsht Center's existing perks.
                </p>
              </div>
            </div>
          </SplitSection>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">Impact</p>
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden">
                <ImageLightbox
                  src={SUPPORT_IMAGE_2}
                  alt="Arsht Rewards final design"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 md:px-16">
          <SplitSection label="Results">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">10</div>
                <p className="text-muted-foreground">Final pages handed off to development</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">17</div>
                <p className="text-muted-foreground">Wireframes created across the experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-medium text-title mb-2">2</div>
                <p className="text-muted-foreground">Rounds of iteration informed by testing</p>
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
              The client appreciated our concept but noted that a web solution may not be the best option — over 80% of their community members buy tickets on their mobile phone.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              This experience highlighted the critical need for consistent stakeholder engagement and information sharing to inform and guide design decisions effectively. Through this project, I realized how important clear communication and access to information is when facing a nuanced problem space.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-8">
              We had to make several assumptions regarding technical aspects — such as the presence of tech scanners at free events for real-time ticket scanning and point earning — because we couldn't reach the marketing team and their internal development team.
            </p>

            <h3 className="text-lg md:text-xl font-medium mb-3">User limitations</h3>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed mb-4">
              The research team faced limitations in understanding the specific preferences of the Arsht Center community because we were unable to access their email list. Our user research relied on the general population, which might not accurately reflect the Arsht Center's audience.
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
              Had we been more informed about the Arsht Center's community, the design team would likely have prioritized mobile design solutions to better meet user needs.
            </p>
          </SplitSection>
        </div>
      </section>

      <CaseStudyNav currentSlug="arsht-rewards" />
      <Footer />
    </main>
  );
};

export default CaseStudyArshtRewards;
