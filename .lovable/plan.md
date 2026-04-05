

## Font Styling Consistency Audit

After reviewing every page and component, here are the inconsistencies found and the fixes needed.

### Issues Found

**1. Missing `font-serif` on body/description text**
Several components use body text without the standard `font-serif` class, breaking the editorial feel:

| File | Element | Current | Fix |
|------|---------|---------|-----|
| `Work.tsx` line 73 | Project description | `text-sm md:text-base text-muted-foreground leading-relaxed` | Add `font-serif` |
| `Work.tsx` line 97 | CTA subtitle | `text-lg md:text-xl text-white/70 leading-relaxed` | Add `font-serif` |
| `Collab.tsx` line 19 | CTA subtitle | `text-lg md:text-xl text-white/70 leading-relaxed` | Add `font-serif` |
| `Contact.tsx` line 17 | Page subtitle | `text-base md:text-lg text-white/60` | Add `font-serif` |
| `BookClub.tsx` line 242 | CTA subtitle | `text-lg md:text-xl text-white/70 leading-relaxed` | Add `font-serif` |
| `Manifesto.tsx` line 26 | Second paragraph | `text-lg leading-relaxed text-muted-foreground` | Add `font-serif` |

**2. Section label inconsistency**
- `IntroBlurb.tsx` line 23 uses `text-[14px]` instead of the standard `text-xs` used everywhere else for uppercase tracking labels.

**3. Case study h1 has extra `font-medium`**
- `CaseStudyMindfulWellness.tsx` line 32 and `CaseStudyArtisanMarketplace.tsx` line 32 use `font-medium` on h1, while the main pages (Hero, Work, About, BookClub) do not. Should remove `font-medium` from case study h1s for consistency.

**4. BookClub step titles missing responsive scale**
- `BookClub.tsx` line 224: `text-lg font-serif` should be `text-lg md:text-xl font-serif` to match how subheadings scale elsewhere (Projects, Community).

### Files to Modify (7 files, all single-line class changes)

1. **`src/pages/Work.tsx`** — Add `font-serif` to project description (line 73) and CTA subtitle (line 97)
2. **`src/components/Collab.tsx`** — Add `font-serif` to subtitle (line 19)
3. **`src/pages/Contact.tsx`** — Add `font-serif` to subtitle (line 17)
4. **`src/pages/BookClub.tsx`** — Add `font-serif` to CTA subtitle (line 242); add `md:text-xl` to step titles (line 224)
5. **`src/components/Manifesto.tsx`** — Add `font-serif` to second paragraph (line 26)
6. **`src/components/IntroBlurb.tsx`** — Change `text-[14px]` to `text-xs` (line 23)
7. **`src/pages/CaseStudyMindfulWellness.tsx`** and **`src/pages/CaseStudyArtisanMarketplace.tsx`** — Remove `font-medium` from h1

