# Site-wide Typography Color Cleanup

Establish a clear, consistent two-tier text hierarchy across the whole site:

- **Prominent titles** (h1, h2, section headings, key stat numbers) → near-black warm `#1C1410`
- **All other body / secondary copy** (paragraphs, captions, eyebrows, list items, hints) → light brown `#5C4A3D`

Today the site is inconsistent: some sections render titles in the same warm-brown as body text (because `--foreground` was changed to `#5C4A3D`), while others mix `text-foreground`, `text-muted-foreground`, and `text-hint` interchangeably.

## Approach

Introduce a dedicated **title token** so we keep a single source of truth and don't pepper hex values into components.

### 1. Token changes (`src/index.css`)

Add a new semantic token in both light and dark themes:

```text
:root {
  --title: 25 28% 9%;          /* #1C1410 — near-black warm */
}
.dark {
  --title: 36 24% 92%;         /* #F0ECE6 — same as foreground in dark */
}
```

Keep the existing tokens as-is:
- `--foreground` stays `#5C4A3D` (light brown body text)
- `--muted-foreground` and `--hint` collapse visually onto `--foreground` for body copy

### 2. Tailwind config (`tailwind.config.ts`)

Register the new color so `text-title` / `bg-title` work:

```text
title: 'hsl(var(--title))',
'title-foreground': 'hsl(var(--background))',
```

### 3. Component sweep

Apply this rule across the codebase:

| Element | Class to use |
|---|---|
| `<h1>`, `<h2>`, `<h3>` (section headings, page titles) | `text-title` |
| Big stat numbers / metric values in case studies | `text-title` |
| Eyebrows, labels, captions, paragraphs, list rows, dates, hints | `text-foreground` (or leave blank — body inherits) |
| Anything currently `text-muted-foreground` or `text-hint` on a light bg | `text-foreground` |
| Dark sections (`data-theme="dark"` / `bg-foreground`) | unchanged — already use `text-background` variants |

Files to sweep (light-theme surfaces only — dark sections are already correct):

- `src/pages/AboutPage.tsx` — bio paragraphs, "Beyond the Pixels" intro
- `src/pages/Index.tsx` and homepage components: `Hero.tsx`, `BioBlurb.tsx`, `IntroBlurb.tsx`, `Projects.tsx`, `About.tsx`, `AboutSection.tsx`, `Process.tsx`, `Community.tsx`, `Collab.tsx`, `Contact.tsx`, `DesignPhilosophy.tsx`, `Manifesto.tsx`
- `src/pages/Work.tsx`, `src/pages/WorkExperience.tsx`, `src/pages/Contact.tsx`, `src/pages/BookClub.tsx`, `src/pages/NotFound.tsx`
- All four case studies: `CaseStudyCVS.tsx`, `CaseStudyArtisanMarketplace.tsx`, `CaseStudyCreativeStudio.tsx`, `CaseStudyMindfulWellness.tsx`
- `src/components/CaseStudyNav.tsx`, `WorkExperiencePanel.tsx`, `CommunityPanel.tsx`, `ServicesPanel.tsx`, `Footer.tsx`, `Header.tsx`, `FAQ.tsx`, `Packages.tsx`, `SplitSection.tsx`

For each file, find headings (`<h1>`–`<h3>`, large stat `<p>`s with `text-3xl`+ and `font-serif font-medium`) and switch their text class to `text-title`. Body paragraphs that currently say `text-muted-foreground` or `text-hint` switch to `text-foreground` for visual consistency.

### 4. Memory updates

- Update `mem://design/body-text-color` to document the new two-tier system: `text-title` for headings (#1C1410), `text-foreground` for body (#5C4A3D).
- Update `mem://index.md` Core rules to add: "Headings use `text-title` (near-black warm). Body copy uses `text-foreground` (light brown). Never apply `text-foreground` to a heading or `text-title` to body copy."

## Out of scope

- No changes to dark sections (text on `bg-foreground`) — they already have correct contrast via `text-background`.
- No changes to button styles, accent color, or layout.
- No font-family or weight changes — only color/token reassignment.

## Result

A single, predictable rule across every page: **titles = near-black, body = light brown**, controlled by two tokens, easy to tweak globally later.
