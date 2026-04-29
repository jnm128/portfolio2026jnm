# Audience Switcher in Hero

Add a small row of text-only tabs (Recruiters · Founders · Designers) above "Joanna Minott" in the hero. Clicking a tab swaps the tagline beneath the name to copy tailored to that audience. The name itself stays the same.

## UX & Visual

- Placement: directly above the H1 in `src/components/Hero.tsx`, inside the existing `FadeIn` block.
- Style: minimal text buttons (no pills), separated by a thin divider dot or gap. Sized `text-xs uppercase tracking-widest`, font-sans (Outfit), aligning with existing uppercase eyebrow style used elsewhere on the site.
- States:
  - Active: `text-foreground` with a thin underline (`border-b border-foreground pb-1`).
  - Inactive: `text-muted-foreground` with `hover:text-foreground hover:opacity-70` (matches site standard hover).
- Default selected tab: **Recruiters** (keeps current tagline meaning closest to existing copy).
- Tagline transition: short fade (150ms) when switching so the change feels intentional, not jarring.
- Mobile (440px viewport): tabs sit on one row above the name with `gap-4`; if cramped, allow `flex-wrap`.

## Tagline Copy (proposed defaults — easy to tweak later)

- **Recruiters**: "UX designer crafting calm, intuitive experiences for complex systems — with a track record of measurable impact at scale."
- **Founders**: "Your design partner for turning early product ideas into clear, user-loved experiences that ship and scale."
- **Designers**: "Product designer and community builder sharing process, mentorship, and honest notes from the craft."

The "View Resume" button stays unchanged below the tagline regardless of selected tab.

## Technical Notes

- Add local state in `Hero.tsx`: `const [audience, setAudience] = useState<'recruiters' | 'founders' | 'designers'>('recruiters')`.
- Define a `taglines` map keyed by audience type; render `taglines[audience]` inside the existing `<p>`.
- Tabs rendered as a `<div role="tablist">` with three `<button role="tab">` elements; each sets `aria-selected` for accessibility.
- Keep all existing classes/animation logic intact — only insert the tablist above the H1 and replace the static tagline string with the dynamic one.
- No new dependencies, no routing or persistence (resets to Recruiters on reload).

## Files to Edit

- `src/components/Hero.tsx` — add tablist, state, tagline map, dynamic paragraph.

## Out of Scope

- Persisting the selection across pages or reloads.
- Changing the hero image or "View Resume" CTA per audience.
