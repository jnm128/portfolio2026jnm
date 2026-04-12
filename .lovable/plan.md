

## Animation Audit: On-Load Consistency

### Current State

Every page is wrapped in `PageTransition` which applies `animate-page-enter` (0.4s fade + slide-up from 20px). On top of that, individual pages add their own `FadeIn` wrappers to hero content, creating inconsistent double-animation behavior:

| Page | Hero Animation | Result |
|---|---|---|
| **Home** | No `FadeIn` on text; `PopIn` on image | Text appears with page transition only; image pops separately |
| **About** | `FadeIn delay={200}` | Content invisible for 200ms after page enters, then fades again |
| **Contact** | `FadeIn` (delay=0) | Double fade+slide (page + FadeIn stack) |
| **Book Club** | `FadeIn` (delay=0) | Double fade+slide |
| **Work** | `FadeIn` (delay=0) | Double fade+slide |
| **Work Experience** | `FadeIn` (delay=0) | Double fade+slide |
| **Case Studies** | `FadeIn` (delay=0), then 100, 200 | Staggered double animation |

### Problems
1. **Home page hero text has no FadeIn** — it just snaps in with the page transition, while all other pages have a softer staggered reveal
2. **About page uses delay={200}** — creating a noticeable blank moment before content appears, unlike every other page
3. **Case studies duplicate the Header** — they render `<Header />` inside the page even though `App.tsx` already renders a global `<Header />`

### Proposed Fixes

**1. Add FadeIn to Home page hero text** (`src/components/Hero.tsx`)
Wrap the headline + bio + button in `<FadeIn>` (delay=0) to match other pages.

**2. Reduce About page hero FadeIn delay** (`src/pages/AboutPage.tsx`)
Change `FadeIn delay={200}` to `FadeIn` (delay=0) to match Contact, Work, BookClub.

**3. Remove duplicate Header from case studies** (`src/pages/CaseStudyMindfulWellness.tsx`, `CaseStudyArtisanMarketplace.tsx`, `CaseStudyCreativeStudio.tsx`)
Remove the `<Header />` component rendered inside each case study page since `App.tsx` already renders a global Header.

### Files Modified
- `src/components/Hero.tsx` — wrap hero text in `FadeIn`
- `src/pages/AboutPage.tsx` — remove delay from hero FadeIn
- `src/pages/CaseStudyMindfulWellness.tsx` — remove duplicate `<Header />`
- `src/pages/CaseStudyArtisanMarketplace.tsx` — remove duplicate `<Header />`
- `src/pages/CaseStudyCreativeStudio.tsx` — remove duplicate `<Header />`

