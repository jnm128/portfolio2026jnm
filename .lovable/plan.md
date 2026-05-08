## Goal

Add an "Adrienne Arsht Center — Arsht Rewards" case study to the portfolio. It should appear in the **0 to 1** tab on `/work`, show a brand pill on its card (like CVS, Viveka, Tappt, Gordon — unlike Ember/Error Safe which intentionally omit pills), and have a full case study page mirroring all content from the old site.

## Scope

### 1. New page: `src/pages/CaseStudyArshtRewards.tsx`

Mirrors the structure used by `CaseStudyMindfulWellness.tsx` (FadeIn + SplitSection + ImageLightbox), with these sections, all sourced from the old portfolio:

- **Hero** — Back link, title "Arsht Rewards Customer Loyalty website", subtitle "Improving low customer turnout rates through a customer reward program website for the Adrienne Arsht Center", TL;DR metadata grid (Client: Adrienne Arsht Center, Industry: Arts & Culture, Category: Product Design, UX Design, My Role: UX Designer, Team: Team of 3, Timeline: 16 weeks / 2022), and a hero image.
- **Project Overview** — "Improving attendance and community member engagement for free events at the Adrienne Arsht Center" + 4 outcome bullets (landing page + 4 main pages, simple visual design recommendation, 10-page handoff to Webflow dev, pitched to client + leadership).
- **Problem Space** — RSVP vs attendance mismatch (3,000 RSVPs vs ~600 attendees).
- **Project Approach** — "How might we communicate the value of free events?" with team composition (9 specialists) and my role bullets (Ideation, Wireframing & Prototyping, User Testing & Iteration).
- **Research** — Combined research/insights/personas/journey/empathy narrative built from old site captions ("user insight details", "Identifying target market", "User personas", "User journey", "User empathy") so no original section is dropped.
- **Exploring Solutions** — Concept exploration narrative.
- **Defining Requirements** — Requirements section.
- **User Testing** — First iteration prototype testing description.
- **Design Iterations** — Iteration narrative.
- **Design Challenges** — 3-part challenge breakdown (one block per "design challenges" caption from the old site).
- **Impact** — Final design impact summary.
- **Learnings** — Full "client appreciated our concept but..." block + "User limitations" subsection (verbatim intent).
- **CaseStudyNav + Footer** at the bottom (variant `light` to match Modernization-style pages).

Imagery: reuse the existing hero image already on the Work card (`/lovable-uploads/...arsht...png` if present — otherwise placeholder image already used elsewhere) plus a couple of `ImageLightbox` slots for supporting screens. No new image assets created in this plan; we surface only what's already in `public/lovable-uploads/`. (If no Arsht-specific upload exists, the page renders with text-only sections plus the hero placeholder — user can drop final assets in later.)

### 2. Route

In `src/App.tsx`, register a new route:

```
/case-study/arsht-rewards  →  CaseStudyArshtRewards
```

Placed above the catch-all `*` route, alongside the other case study routes.

### 3. Work page card — `src/pages/Work.tsx`

Add a new entry in the `projects` array under category `'zero-to-one'`:

```text
brand:       "Adrienne Arsht Center"
year:        "2022"
description: "Designing 'Arsht Rewards' — a customer loyalty program lifting attendance for free events through point incentives and member engagement."
image:       (existing arsht upload if present, else placeholder)
link:        "/case-study/arsht-rewards"
category:    "zero-to-one"
```

Pill behavior: today the `Work.tsx` card explicitly hides the pill for Ember and Error Safe. Arsht is **not** in that exclusion list, so the pill renders automatically with the brand name "Adrienne Arsht Center" — matching the CVS-style pill the user asked for. No change to the exclusion logic needed.

Order in the 0-to-1 tab: Adrienne Arsht Center → Ember → Error Safe (Arsht placed first so the new pill'd card leads the section).

### 4. CaseStudyNav rotation — `src/components/CaseStudyNav.tsx`

Append a matching entry to the `caseStudies` array (slug `arsht-rewards`, brand "Adrienne Arsht Center", path `/case-study/arsht-rewards`, year 2022, description, image) so the "Check out more case studies" rotation includes it on every other case study page.

## Out of scope

- No theme/token changes.
- No new video assets — the card uses a static image (consistent with how Ember/Error Safe ship without pills today, except Arsht *will* have a pill).
- No copy invented beyond what is on the old site or trivially rephrased for tone consistency with existing case studies.
