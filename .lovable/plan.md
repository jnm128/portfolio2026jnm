# Tool Stack + Skills, and Founders Services Drawer

Three changes:

1. Reframe the homepage "Design, Tech & Intention" section to show **Tool Stack** and **Skills** (replacing the existing Services list).
2. When the **Founders** audience tab is active in the hero, swap the "View Resume" CTA for a **"View Services"** button that opens a new slide-in drawer listing freelance/fractional design services.
3. Delete the standalone `Services.tsx` component (it's not imported anywhere on active pages, so this is just cleanup).

## 1. Homepage section — `src/components/AboutSection.tsx`

Keep the same 2-column layout, headline, and styling. Only the right column data changes:

- **Tool Stack** (replaces "Services" list, same styled list with bottom-bordered rows):
  Figma, FigJam, Framer, Adobe CC, Notion, Miro, Lovable, Maze, Dovetail
- **Skills** (replaces current short Skills chip list with a richer set of practice-based skills, same pill styling):
  User Research, Information Architecture, Interaction Design, Prototyping, Design Systems, Usability Testing, Accessibility (WCAG), Workshop Facilitation, Design Strategy

(Open question: confirm these lists or send your preferred wording — easy to swap.)

## 2. Hero CTA + Services drawer

### `src/components/Hero.tsx`
- When `audience === 'founders'`: render a **"View Services"** button (same pill styling) that opens a new `ServicesPanel`.
- All other audiences: keep existing **"View Resume"** button → existing `WorkExperiencePanel`.
- Both panels mount; only one opens at a time.

### New file: `src/components/ServicesPanel.tsx`
- Built as a near-clone of `WorkExperiencePanel` for visual consistency: React Portal, slide-in from right, `z-[200]`, cream `bg-background`, full-width on mobile / `md:w-[40%]`, X close button, backdrop click-to-close.
- Title: **"Services"** with subhead: *"Freelance & fractional design engagements."*
- Two grouped sections, each rendered as flat rows with bottom dividers (matches site's dark-section list pattern, light variant):

  **Freelance — Project-based**
  - End-to-end product design (0→1 features)
  - UX research & usability testing
  - Design systems setup & audits
  - Web & landing page design
  - UX audits + actionable redesign roadmap

  **Fractional — Embedded by the month**
  - Fractional Lead Designer (1–3 days/week)
  - Design partner for early-stage founders
  - Design ops & process setup for growing teams
  - Mentorship & design team coaching

- Footer of the drawer: a small CTA row — "Have a project in mind?" + a `rounded-full` link button **"Get in touch"** routing to `/contact`.

(Open question: confirm service offerings or share your own list.)

## 3. Cleanup

- Delete `src/components/Services.tsx` (no active imports — it's an orphaned legacy section).

## Out of scope

- No changes to routes, no new pages.
- No changes to the dark `DarkSection` block or footer.
- Drawer animation, hover states, and typography reuse existing tokens — no new CSS.

## Files touched

- `src/components/AboutSection.tsx` — edit (replace Services list with Tool Stack; refresh Skills)
- `src/components/Hero.tsx` — edit (conditional CTA + mount new panel)
- `src/components/ServicesPanel.tsx` — new
- `src/components/Services.tsx` — delete
