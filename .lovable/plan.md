

## Apply `max-w-4xl mx-auto` (896px) Across All Pages

**Goal**: Replace all `max-w-[1600px]` containers with `max-w-4xl` site-wide for a consistent, narrower content width.

### Files to Update (16 files)

**Pages:**
- `src/pages/Work.tsx` — 3 containers (lines 39, 53, 91)
- `src/pages/AboutPage.tsx` — 2 containers (lines 48, 97)
- `src/pages/BookClub.tsx` — 3 containers (lines 64, 141, 193)

**Homepage components:**
- `src/components/Hero.tsx`
- `src/components/IntroBlurb.tsx` (line 20)
- `src/components/BioBlurb.tsx` (line 12)
- `src/components/Projects.tsx` (line 53)
- `src/components/Testimonials.tsx` (line 55)
- `src/components/Community.tsx` (line 13)
- `src/components/Footer.tsx` (line 26)
- `src/components/About.tsx` (line 12)
- `src/components/Process.tsx` (line 36)
- `src/components/Collab.tsx`
- `src/components/Connecting.tsx`

**Global:**
- `src/components/Header.tsx` (line 181)

### The Change

Every instance of `max-w-[1600px]` → `max-w-4xl`. No other classes change. Padding (`px-8 md:px-16`) and `mx-auto` remain as-is.

### Technical Detail

`max-w-4xl` = 896px max width. This creates a centered, readable column layout consistent across all pages. The Header nav will also be constrained to this width for full alignment.

