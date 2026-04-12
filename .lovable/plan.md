

## Website Audit: Findings and Fix Plan

### Font Families Currently Used

| Font | Role | Loaded From |
|---|---|---|
| **Inter** (300–700) | `font-sans` — body text, labels, buttons | Google Fonts |
| **Inter Tight** (400–700) | `font-serif` — headings, quotes, body serif text | Google Fonts |
| **Space Grotesk** (800) | `font-space-grotesk` — unused in current components | Google Fonts |
| **Syne** (400–700) | `font-syne` — unused in current components | Google Fonts |

Note: `font-serif` in this project maps to Inter Tight, not a true serif. The entire site predominantly uses `font-serif` (Inter Tight) for headings and body, with sans-serif (Inter) for small labels and buttons.

---

### Discrepancies Found

#### 1. Dialog X Button Too Large (Book Modal)
**File**: `src/components/ui/dialog.tsx`, line 45
The close button uses two `w-5 h-0.5` spans inside a `p-2` container. The Resume panel (`WorkExperiencePanel.tsx`) uses a Lucide `X` icon at `w-5 h-5` inside `p-2`. Both have `hover:bg-black/5 transition-colors` and `rounded-full`, so hover state matches. However the dialog's two-span X creates a visually larger hit area. The spans themselves are fine at `w-5`, but the overall button lacks a fixed width/height constraint, making it appear oversized relative to the modal's compact `max-w-sm` size.

**Fix**: Constrain the dialog close button to `w-9 h-9` (matching common icon button sizes) so it doesn't appear oversized on smaller modals.

#### 2. Hover Inconsistencies Across Interactive Rows

| Component | Hover Pattern | Notes |
|---|---|---|
| Contact page rows | `group-hover:opacity-70 transition-opacity` on text | Consistent |
| Book Club FAQ buttons | `hover:opacity-70 transition-opacity` | Matches Contact |
| Home FAQ (FAQ.tsx) | `hover:bg-gray-50 transition-colors` | Different — uses bg change instead of opacity |
| About page LinkedIn CTA | `hover:bg-background hover:text-foreground` | Color swap, different from other CTAs |
| Hero "View Resume" button | `hover:opacity-90 transition-opacity` | Slightly different opacity (90 vs 70) |
| Book Club "Join the Community" | `hover:opacity-90 transition-opacity` | Same as hero |
| Work page "Get in Touch" | `hover:bg-white/90 transition-colors` | Different pattern |
| Footer nav links | `hover:text-white transition-colors` | Color change, appropriate for dark bg |
| Header desktop links | `hover:text-foreground transition-colors` | Color change, consistent |
| Project card titles | `hover:text-muted-foreground transition-colors` | Reverses direction (darkens to lighter) |
| Testimonial arrows | `hover:bg-white/20 transition-colors` | Bg change on dark, fine |
| Book carousel cards | `hover:scale-[1.03]` | Scale transform, unique |
| Design Philosophy cards | `hover:bg-secondary/50 hover:border-border/80 hover:scale-[1.02]` | Multiple effects |

#### 3. Primary CTA Hover Inconsistency
Rounded-full dark CTA buttons use different hover approaches:
- Some: `hover:opacity-90` (Hero, Book Club)
- Some: `hover:bg-[#1C1C1C]/90` (Book Club Join/Amazon)
- About LinkedIn: full color inversion on hover

#### 4. Home Page FAQ.tsx Uses Different Style
The FAQ component at `src/components/FAQ.tsx` uses `bg-white border border-gray-200` cards with `hover:bg-gray-50` — this is a completely different visual style from the rest of the site (which uses `bg-[#F8F6F1]` cream backgrounds, no bordered cards). However, this FAQ component doesn't appear to be used on the Index page currently (Index.tsx imports only Hero, IntroBlurb, Projects, AboutSection, DarkSection, Footer).

---

### Proposed Fixes

**1. Fix dialog close button size** (`src/components/ui/dialog.tsx`)
Add `w-9 h-9` to the close button to constrain its size, matching the Resume panel's proportional feel.

**2. Standardize primary dark CTA hover states**
Normalize all dark rounded-full CTA buttons to use `hover:opacity-90 transition-opacity`:
- `src/pages/AboutPage.tsx` line 80-82: Change LinkedIn CTA from color-inversion hover to `hover:opacity-90 transition-opacity`, remove `hover:bg-background hover:text-foreground border border-foreground`
- `src/pages/Work.tsx` line 103: Change "Get in Touch" from `hover:bg-white/90` to `hover:opacity-90`

**3. Standardize interactive row hover states**
Ensure all clickable row-style elements (Contact rows, FAQ items, About speaking links) use the same `hover:opacity-70 transition-opacity` pattern consistently. The Book Club FAQ already matches. No changes needed there.

**4. Standardize Hero button hover opacity**
The "View Resume" button uses `hover:opacity-90` — keep this as the standard for filled CTAs. The `hover:opacity-70` pattern is for text/row items.

### Files Modified
- `src/components/ui/dialog.tsx` — constrain close button size
- `src/pages/AboutPage.tsx` — standardize LinkedIn CTA hover
- `src/pages/Work.tsx` — standardize "Get in Touch" CTA hover

