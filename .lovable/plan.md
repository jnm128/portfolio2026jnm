## Goal

Add two new projects — **Ember Mobile App** and **Error Safe** — to the "0 to 1" tab on `/work`, each linking to a full case study page that mirrors the existing case study pattern (Mindful Wellness / CVS / etc.).

## What to build

### 1. Hero/card images
Download hero images from the old portfolio into `src/assets/`:
- `ember-hero.png` ← `Remove background project.png` (Ember overview hero)
- `error-safe-hero.png` ← `Slide 4_3 - 15 (1).png` (Error Safe overview hero)

These images are the card art on `/work` and the hero image on each case study page (image, not video — there are no looping videos for these two).

### 2. Case study pages

Create two new pages following the `CaseStudyMindfulWellness.tsx` template (back button, title, TLDR metadata grid, hero image, then alternating `SplitSection` content blocks, then `<CaseStudyNav />` and `<Footer />`).

**`src/pages/CaseStudyEmber.tsx`** — slug `ember`, route `/case-study/ember`
- Title: "Ember mobile app"
- Subtitle: "Increasing consistency in self-development practices by providing lost adults with a curated path to healthier habits"
- TLDR: Client = MFA Capstone (University of Miami) · Industry = Mental Health, Self-development · Category = Product Design, UX Design · Role = Product & UX Designer · Team = Team of 1 · Timeline = 14 weeks / 2024
- Sections: Project Overview · Problem Space (HMW) · Approach (timeline breakdown) · Research (survey + interview insights with the 3 quotes) · Target user (the "lost" archetype) · Solutions explored (journal insights + vision boards) · Design challenges (onboarding + tone of voice) · User testing (6 sessions) · Iterations (personalization + restricted features) · Outcomes/Learnings
- Optional CTA link out to the Figma prototype

**`src/pages/CaseStudyErrorSafe.tsx`** — slug `error-safe`, route `/case-study/error-safe`
- Title: "Error Safe — Injury reporting management system"
- Subtitle: "Streamlining work-related injury reporting and employee management for nurse administrators"
- TLDR: Client = Graduate HCD project · Industry = Healthcare / Eldercare · Category = UX Design, Product Design · Role = Product & UX Designer · Team = Team of 5 · Timeline = 2024
- Sections: Project Overview · Problem Space · Research (OSHA 300 process) · Key roles (RN, ADON, DON, admin) · Target focus (Nurse Admin) · Design challenges (25 requirements, dashboard hierarchy, accessibility tokens) · Iterations (reports table, team comms, notifications) · Learnings

### 3. Wire up routing
In `src/App.tsx`, add:
```
<Route path="/case-study/ember" element={<CaseStudyEmber />} />
<Route path="/case-study/error-safe" element={<CaseStudyErrorSafe />} />
```

### 4. Add to Work page "0 to 1" tab
In `src/pages/Work.tsx`, append two project entries with `category: 'zero-to-one'`:
- Ember Mobile App — 2024 — image `ember-hero.png` — link `/case-study/ember`
- Error Safe — 2024 — image `error-safe-hero.png` — link `/case-study/error-safe`

The "0 to 1" tab will switch from the empty "More coming soon…" state to a 2-card grid using the existing card layout.

### 5. Update CaseStudyNav
In `src/components/CaseStudyNav.tsx`, add the two new entries to the `caseStudies` array so the "Check out more" carousel cycles through all six case studies.

## Out of scope
- No videos for these two (still images only, matching the old portfolio).
- No changes to homepage `Projects.tsx` (those remain the four featured studies).
- No changes to design tokens or layout primitives.
