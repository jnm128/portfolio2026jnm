

## Redesign Case Study Hero Sections

**Goal**: Pull title and metadata out from the hero image overlay. New layout: back button → standalone image → title + description → metadata grid (Role, Problem, Team, Timeline). Apply to all 3 case study pages.

### New Hero Layout

```text
← Back                          (navigate(-1), dark text on cream)
[Hero image — full width, rounded-2xl, no overlay, no text on it]
Case Study Title                (large serif heading, dark text)
Description paragraph           (muted text)

MY ROLE          |  THE PROBLEM
value            |  value

MY TEAM          |  TIMELINE
value            |  value
```

### Changes (all 3 files)

**1. Replace hero section** (lines 14-52 in each file)
- Remove the dark overlay, remove text positioned over the image
- Render: back button with `useNavigate(-1)` → standalone `<img>` with `rounded-2xl w-full object-cover aspect-[16/9]` → title as `h1` in dark text on cream → description paragraph
- Keep cream background `bg-[#F8F6F1]` throughout

**2. Replace Project Overview metadata** (lines 54-73 in each file)
- Swap the Client/Timeline/Services 3-column grid for a 2x2 metadata grid with fields: **MY ROLE**, **THE PROBLEM**, **MY TEAM**, **TIMELINE**
- Labels: `text-xs uppercase tracking-widest text-gray-400 font-medium mb-2`
- Values: `text-base text-foreground font-serif`
- Place this grid on the cream background, directly below the title/description — still within the hero section, before "The Challenge"

**3. Import change**: Add `useNavigate` from `react-router-dom`, remove `Link` usage for back button (keep for other links if used), remove unused `ExternalLink` import.

### Files Modified
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`

