

## Invert section colors and fix typography on Book Club page

**File:** `src/pages/BookClub.tsx`

### Color scheme changes

Current flow: Hero (cream) → Who We Are (cream) → Previous Reads (cream) → How Community Works (cream) → CTA (dark) → FAQ (cream) → Footer (dark)

New flow: Hero (cream) → Who We Are (cream) → **Previous Reads (dark)** → **How Community Works (dark)** → **CTA (cream)** → **FAQ (dark)** → Footer (dark, seamless)

Specific changes:
- **Section 3 (Previous Reads):** `bg-[#1C1C1C]`, white text, carousel arrows invert to `bg-white/10 border-white/20`, label becomes `text-white/60`
- **Section 4 (How Community Works):** `bg-[#1C1C1C]`, white text, icon boxes invert to `bg-white` with dark icons, borders become `border-white/15`, headings `text-white`, body `text-white/70`
- **Section 5 (CTA):** Flip to `bg-[#F8F6F1]`, heading `text-foreground`, subtext `text-muted-foreground`, button `bg-foreground text-background`
- **Section 6 (FAQ):** `bg-[#1C1C1C]`, question text `text-white`, answer text `text-white/70`, chevron `text-white/60`, borders `border-white/15` — blends seamlessly into Footer

### Typography fixes (match About and Home pages)
- H1 uses `text-3xl md:text-5xl font-serif` — already matches About page scale
- H1 placement: Match About page structure with `pt-24 md:pt-28` on the outer wrapper and `pt-0` on the hero section (About uses `pt-0 pb-24`), keeping the same vertical position below the header
- Body text stays `text-base md:text-lg font-serif leading-relaxed`
- Section labels stay `text-sm uppercase tracking-widest`

### H1 placement alignment with About page
- Change outer wrapper from `pt-28 md:pt-32` on the hero section to match About's pattern: wrap content in a `pt-24 md:pt-28` div, hero section gets `pt-0`
- Remove the inner `pt-10 md:pt-14` to align H1 position with About page

