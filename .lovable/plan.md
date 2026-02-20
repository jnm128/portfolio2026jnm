

## Move Blurb Above Hero and Unify Background Colors

### Overview
Split the IntroBlurb into two parts: the bio text moves above the Hero as its own section, while the "Trusted by" marquee stays in its current position below the Hero. All sections get the same background color (#F8F6F1). Section titles become 14px, center-aligned, and lose the animated pulsing circle.

### Changes

#### 1. Create new `BioBlurb` component (`src/components/BioBlurb.tsx`)
- Extract the profile image + bio text from IntroBlurb into a standalone section
- Rendered above the Hero in the page layout
- Same container/padding conventions as other sections

#### 2. Update `IntroBlurb.tsx`
- Remove the bio text (desktop and mobile layouts)
- Keep only the "Trusted by" marquee
- Remove unused state/refs (`isVisible`, `credentialsExpanded`, `chipsRef`, IntersectionObserver)

#### 3. Update `Index.tsx` page order
- New order: BioBlurb -> Hero -> IntroBlurb (marquee only) -> Projects -> Testimonials -> Community -> Footer

#### 4. Unify background color to `#F8F6F1` across all sections
- Hero, IntroBlurb, Projects, Testimonials, Community all get `bg-[#F8F6F1]`
- Remove the stacking/overlap rounded-bottom styles (`rounded-b-[2.5rem]`, `-mt-8`, varying z-indexes) since everything is one continuous background now

#### 5. Update section titles (Projects, Testimonials, Community)
- Remove the `PulsingCircle` component and all inline pulsing circle markup
- Change title styling to `text-[14px] text-center` (centered, 14px)
- Remove `flex items-center gap-3` layout (no longer needed without the circle icon)

### Files Modified
- **`src/components/BioBlurb.tsx`** (new) - Bio text extracted from IntroBlurb
- **`src/components/IntroBlurb.tsx`** - Strip bio, keep marquee only
- **`src/pages/Index.tsx`** - Reorder components, add BioBlurb
- **`src/components/Hero.tsx`** - Change bg to `#F8F6F1`, remove rounded-bottom/overlap
- **`src/components/Projects.tsx`** - Bg to `#F8F6F1`, 14px centered title, remove PulsingCircle
- **`src/components/Testimonials.tsx`** - Same title and bg changes
- **`src/components/Community.tsx`** - Same title and bg changes

