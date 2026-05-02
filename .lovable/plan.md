## Redesign "How I work" process section + "Let's collaborate" CTA

Replace the current `AboutSection` (Design, Tech & Intention) with a 3-step process section, and replace the current `Collab` CTA ("Interested in collaborating?") with a dark gradient "Let's collaborate" block. Match the spec exactly using existing Outfit font and design tokens — no new fonts, no raw hex literals.

All requested hex values map to existing tokens:

| Spec hex | Token |
|---|---|
| `#F5F2EE` (light bg) | `bg-background` |
| `#1C1410` (text) | `text-foreground` |
| `#3D3530` (body) | `text-muted-foreground` |
| `#7A7269` (eyebrow/hint) | `text-hint` |
| `#C8C0B5` (rule) | `border-border` |
| `#E0DAD1` (pill bg) | `bg-card` |
| `#4F6A80` (accent) | `text-accent` / `bg-accent` |
| `#1F1813 → #141C24 → #130F0C` (gradient) | inline arbitrary `bg-[linear-gradient(...)]` — these are dark-mode surface ladder, not present as a single token |
| `#F0ECE6` (dark fg text) | `text-background` (since dark `--foreground` = #F0ECE6, but on a forced-dark bg we use `text-background` of the dark theme; simpler: arbitrary `text-[#F0ECE6]` — but we want tokens. Solution below.) |
| `#C8C0B5` (subtext on dark) | matches `--border` light = `#C8C0B5`; reuse `text-border` not standard. Use opacity on white token instead. |
| `#7AAAC8` (dark accent) | dark theme `--accent` |
| `#42342A` (eyebrow on dark) | dark theme `--border` |

To keep tokens clean, the dark CTA section will set `data-theme="dark"` and use `dark:` utilities so the same semantic tokens (`text-foreground`, `text-muted-foreground`, `text-accent`, `border-border`) automatically resolve to the spec's dark hex values. Only the gradient itself is an arbitrary value (acceptable — gradients are not tokenized in this project).

---

### 1. `src/components/AboutSection.tsx` — replace contents

Section wrapper:
- `bg-background` (light), `py-20 md:py-20 px-12 md:px-12` adjusted to use site convention `py-20 px-5 md:px-12` (spec says 80×48, mapped via `py-20 px-12`). Keep `max-w-[1600px]` container per memory.
- `id="about" data-theme="light"` so header observer toggles to light theme on this section.

Eyebrow:
- "How I work" — `text-[11px] font-medium tracking-[0.12em] uppercase text-hint mb-5`

Two-column header row (`grid md:grid-cols-2 gap-8 items-end pb-8 border-b border-border mb-16`):
- Left: `font-sans font-bold text-[40px] leading-[1.1] text-foreground` — "Design rooted in" `<br/>` "research & intention"
- Right: `text-sm leading-[1.75] text-muted-foreground max-w-[320px] md:justify-self-end` — body paragraph

Three-column step grid (`grid md:grid-cols-3`):
- Container: each column gets `border-t border-border p-8`, columns 2+3 get `md:border-l border-border` for vertical rules; on mobile stack with top borders only.

Each step:
1. Step row: `flex items-center gap-3 mb-6` containing `<span>` number ("01") + `<span className="h-px w-8 bg-border">` + uppercase label "STEP"
   - All text: `text-[11px] font-medium tracking-[0.1em] uppercase text-hint`
2. Title: `text-[22px] font-bold text-foreground mb-4` — accent word in `<span className="font-normal text-accent">` ("Discover" / "Design" / "Deliver"), rest in default weight ("& define" / "& validate" / "& measure")
3. Body: `text-[13px] leading-[1.7] text-muted-foreground mb-6`
4. Tag pills: `flex flex-wrap gap-2`, each pill `inline-flex bg-card text-hint text-[10px] font-medium tracking-[0.07em] uppercase rounded-full px-2.5 py-1`

Step content per spec (Discover & define / Design & validate / Deliver & measure with their bodies and tag lists).

Drop the old `designPhilosophy` array and roman-numeral list entirely.

---

### 2. `src/components/Collab.tsx` — replace contents

Section wrapper:
- `data-theme="dark"` so header observer flips theme.
- `bg-[linear-gradient(135deg,#1F1813_0%,#141C24_50%,#130F0C_100%)] dark` — apply `dark` class so descendant `dark:` tokens resolve.
- `relative overflow-hidden py-20 px-5 md:px-12`, full width.

Decorative circles (top-right):
- Two `absolute` divs: `w-[280px] h-[280px] rounded-full border border-[#2C221A] opacity-60 -right-[60px] -top-[60px]` and `w-[180px] h-[180px] rounded-full border border-[#2C221A] opacity-40 -right-[20px] -top-[20px]`. The `#2C221A` matches dark `--card`; could use `border-card` but with `dark` class active that resolves correctly. Use `dark:border-card` to keep tokens.

Two-column inner (`grid md:grid-cols-2 gap-8 items-center max-w-[1600px] mx-auto relative z-10`):

Left:
- Eyebrow: `text-[11px] font-medium tracking-[0.12em] uppercase mb-4` — color uses dark `--border` (`#42342A`); apply via `dark:text-border` (since `dark` class on parent activates dark border = #42342A). To stay token-clean: `text-border` on a `dark`-classed parent gives correct hex.
- Headline: `font-sans font-bold text-[40px] leading-[1.1] text-foreground` (resolves to #F0ECE6 in dark) — "Got a problem worth" `<br/>` `<span className="font-normal text-accent">designing through?</span>` (accent in dark = #7AAAC8 ✓)
- Subtext: `text-sm leading-[1.7] text-muted-foreground max-w-[420px] mt-6` — copy per spec (muted in dark = #C8C0B5 ✓)

Right (`flex flex-col items-start md:items-end gap-4`):
- Primary "Get in touch" link: `bg-accent text-foreground font-semibold text-[13px] rounded-full px-7 py-3.5` (accent in dark = #4F6A80 — wait: dark `--accent` = #7AAAC8, light `--accent` = #4F6A80. Spec wants #4F6A80 button on dark gradient. So use `bg-[#4F6A80]` arbitrary, OR override with `bg-primary` where light primary = #4F6A80 but dark primary = #7AAAC8 — same problem.)

Resolution: the spec's button color #4F6A80 = light `--accent`. Since the section is `dark`-classed for text tokens but the button needs the *light* accent, use an explicit utility: `bg-[hsl(209_24%_41%)]` once. This is the only deliberate hex/HSL escape and is necessary because the accent inverts between themes. Light gray text on it: spec says `#F0ECE6` which is `text-foreground` under dark — fine.

Remove existing 3-card testimonial grid and mobile carousel from Collab (out of scope per spec — "replace the current section"). Drop `useState`, `quotes` array, `ChevronLeft/Right` imports.

---

### 3. Memory updates

After implementation:
- Update `mem://features/about/homepage-section` (currently describes 2-col scrolling) → new "How I work" 3-step ruled grid spec.
- Add new memory `mem://features/cta/lets-collaborate` describing the dark-gradient CTA block with decorative circles.
- Refresh `mem://features/testimonials/rotating-quote-layout` to note testimonials were removed from homepage.

### Files changed

- `src/components/AboutSection.tsx` (full rewrite)
- `src/components/Collab.tsx` (full rewrite)
- `mem://index.md` + 2-3 memory files
