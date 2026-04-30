## Goal

When the **Designers** tab is active in the homepage hero, swap the "View Resume" CTA for a **"View Community"** button that opens a new slide-in side panel showcasing the Fresh Perspectives community.

## Behavior by audience tab

- Recruiters → "View Resume" → existing `WorkExperiencePanel`
- Founders → "View Services" → existing `ServicesPanel`
- Designers → **"View Community"** → new `CommunityPanel` (this plan)

## 1. New file: `src/components/CommunityPanel.tsx`

A near-clone of `ServicesPanel` / `WorkExperiencePanel` for visual consistency:
- React Portal, slide-in from right, `z-[200]`, cream `bg-background`, full-width on mobile / `md:w-[40%]`
- Backdrop click-to-close, X close button (top right)
- Same animation timing (500ms ease-out)

### Content (pulled from `BookClub.tsx`)

Top of panel:
- Small Fresh Perspectives logo (`@/assets/fresh-perspectives-logo.png`, w-10 h-10 rounded-lg)
- Title: **"Fresh Perspectives"** (font-serif, 3xl/4xl)
- Subhead: *"A UX book club for designers who think beyond the screen."*

Stats row (2x2 grid on mobile, 4-col on md+, with top border):
- 2023 — Est.
- 486+ — Members
- 8+ — Books
- Monthly — Sessions

"Who We Are" section (after stats):
- Eyebrow: "Who We Are" (uppercase tracking-widest)
- Body: *"I founded Fresh Perspectives as a space for like-minded UX professionals to slow down and think deeply — not just ship faster. What started as a book club has grown, alongside my co-host Bhavna, into a hub where designers connect, challenge assumptions, and bring sharper thinking back to their work."*

"How it Works" section — flat list with bottom dividers (matches site list pattern):
- **Read Together** — One book per cycle, paced for busy designers. (BookOpen icon)
- **Discuss & Reflect** — Monthly virtual sessions to connect ideas to real work. (MessageCircle icon)
- **Stay Connected** — Active LinkedIn community for resources & conversations. (Globe icon)

Footer CTA row (border-top):
- Text: "Want to read with us?"
- Two pill buttons:
  - Primary: **"Join the Club"** → `https://www.linkedin.com/in/joannaminott` (external, target="_blank")
  - Secondary outlined: **"Visit Community Page"** → `/book-club` (Link, closes panel)

## 2. Edit `src/components/Hero.tsx`

- Import `CommunityPanel`.
- Add `const [communityOpen, setCommunityOpen] = useState(false);`
- Replace the binary `audience === 'founders' ? services : resume` block with a 3-way conditional:
  - `founders` → "View Services" button (existing)
  - `designers` → **"View Community"** button → opens `CommunityPanel`
  - `recruiters` (default) → "View Resume" button (existing)
- Mount `<CommunityPanel open={communityOpen} onClose={() => setCommunityOpen(false)} />` next to the other two panels.
- Keep same pill styling (`bg-foreground text-background px-6 py-3 rounded-full`), `animate-fade-in`, and unique `key` per CTA so the swap animates.

## Out of scope

- No changes to the standalone `/book-club` page.
- No changes to other audience taglines or hero layout.
- No new design tokens; reuses existing patterns and copy from BookClub.

## Files touched

- `src/components/CommunityPanel.tsx` — new
- `src/components/Hero.tsx` — edit (3-way CTA + mount new panel)
