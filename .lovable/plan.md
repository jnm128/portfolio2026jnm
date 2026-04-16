

## CVS Case Study Page Updates

### Changes to `src/pages/CaseStudyCVS.tsx`

**1. Remove header title and subtitle (lines 27-35)**
- Delete the "Case Study" label, the h1 title, and the description paragraph

**2. Remove the dark frame from the oops section, make it light theme (lines 37-55)**
- Remove the `rounded-2xl aspect-[4/3] md:aspect-[16/10] bg-[#1C1C1C]` wrapper div
- Keep the oops content (icon, heading, text, CTA) but style for light/cream theme:
  - Shield icon: `text-muted-foreground` instead of `text-white/30`
  - Icon circle bg: `bg-foreground/5` instead of `bg-white/10`
  - Heading: `text-foreground` instead of `text-white`
  - Description: `text-muted-foreground` instead of `text-white/60`
  - CTA button: `bg-foreground text-white` instead of `bg-white text-[#1C1C1C]`
- Content remains centered with padding

### Files Modified
- `src/pages/CaseStudyCVS.tsx`

