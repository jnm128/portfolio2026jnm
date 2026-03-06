

## Plan: Redesign Testimonials Section

Full rewrite of `src/components/Testimonials.tsx` to match the mockup, with the hero quote using the site's existing typography system.

### Structure

1. **Section label**: "In Their Words" — small uppercase `text-xs tracking-widest text-white/60` (matches current "Testimonials" label style)

2. **Hero pull quote**: The featured Rynita Julien quote styled with the site's standard heading classes — `font-serif text-3xl md:text-5xl` in white, matching the Hero and About section heading scale. No italic or special treatment beyond what the site already uses. Author info below with initials circle.

3. **"More from collaborators"** subheading with carousel arrows on the right (keeping existing frosted glass arrow style).

4. **3-column card grid** with updated content:
   - Cards use existing `bg-[#F8F6F1] rounded-2xl p-6` style
   - No synthesized titles — just the quote text
   - Author row: initials circle + name + role
   - Company badge pill at bottom of each card

### Content (from mockup)

- **Hero**: Rynita Julien, Senior Director IT, CSL Behring
- **Card 1**: Rynita Julien, CSL Behring — "simplify complex systems" quote
- **Card 2**: Jacob Rosmarin, Product, Viveka Health
- **Card 3**: Placeholder collaborator, CVS Health

### Files modified
- `src/components/Testimonials.tsx`

