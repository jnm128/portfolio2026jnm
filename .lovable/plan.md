

## Plan: Add heading + tagline to About page dark section

Replace the small centered "Get to know your favorite designer" text (line 149-151 in `AboutPage.tsx`) with a heading + tagline block matching the "Design, Tech & Intention" pattern from `AboutSection.tsx`:

- **Heading**: `text-3xl md:text-5xl font-serif text-white` — "Get to Know Your Favorite Designer"
- **Tagline**: `text-base md:text-lg text-white/60 font-serif max-w-2xl` — A short intro line about the non-design side (e.g. "Beyond the pixels — what I'm reading, listening to, and thinking about when I'm not designing.")
- Left-aligned, matching the homepage pattern

### File modified
- `src/pages/AboutPage.tsx` — lines 149-151, replace the small `<p>` with heading + tagline block

