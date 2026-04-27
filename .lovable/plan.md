## Migrate site to new neutral + blue accent color system

Replace the current Foam/Chai/Matcha/Caramel cream palette with the new warm-neutral + slate-blue accent palette. All colors flow through CSS variables and Tailwind tokens, so the bulk of the site updates from `index.css` + `tailwind.config.ts`. A handful of components reference the old `brand-*` and `surface-*` utilities directly and need targeted replacements.

### 1. CSS variables (`src/index.css`)

Rewrite `:root` and `.dark` to map the new tokens. Keep the existing variable names (`--background`, `--foreground`, `--card`, `--border`, `--muted-foreground`, `--accent`, `--primary`, etc.) so all current `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground` classes pick up new values automatically. Switch from HSL to direct hex via `--token: #hex` and update the Tailwind color definitions to consume the raw vars (no `hsl()` wrapper).

**Light (`:root`)**
| Var | Hex | Role |
|---|---|---|
| `--background` | `#F5F2EE` | Page bg |
| `--section` | `#EDE9E3` | Section bg (new) |
| `--card`, `--popover` | `#E0DAD1` | Card surface |
| `--border`, `--input` | `#C8C0B5` | Borders |
| `--foreground`, `--card-foreground`, `--popover-foreground`, `--primary-foreground-on-light` | `#1C1410` | Primary text |
| `--muted-foreground` | `#3D3530` | Muted text |
| `--hint` | `#7A7269` | Hint/placeholder (new, shared) |
| `--accent`, `--primary`, `--ring` | `#4F6A80` | Accent / CTA |
| `--accent-foreground`, `--primary-foreground` | `#F5F2EE` | Text on accent |
| `--secondary` | `#E0DAD1` | Secondary surface |
| `--secondary-foreground` | `#1C1410` | |

**Dark (`.dark`)**
| Var | Hex |
|---|---|
| `--background` | `#130F0C` |
| `--section` | `#1F1813` |
| `--card`, `--popover` | `#2C221A` |
| `--border`, `--input` | `#42342A` |
| `--foreground`, `--card-foreground`, `--popover-foreground` | `#F0ECE6` |
| `--muted-foreground` | `#C8C0B5` |
| `--hint` | `#7A7269` |
| `--accent`, `--primary`, `--ring` | `#7AAAC8` |
| `--accent-foreground`, `--primary-foreground` | `#130F0C` |

Also retire the cream-tinted `--surface-1..6` ladder and replace with the new neutral progression so any remaining `bg-surface-*` usage stays sensible:
- Light: `#F5F2EE → #EDE9E3 → #E0DAD1 → #C8C0B5 → #3D3530 → #1C1410`
- Dark:  `#130F0C → #1F1813 → #2C221A → #42342A → #C8C0B5 → #F0ECE6`

Add gradient utility classes:
```css
.bg-hero-gradient { background: linear-gradient(135deg, #E8E2D8 0%, #D4E0EA 45%, #EDE9E3 100%); }
.dark .bg-hero-gradient { background: linear-gradient(135deg, #1F1813 0%, #141C24 45%, #130F0C 100%); }
.bg-card-gradient { background: linear-gradient(180deg, #D4E0EA 0%, #EDE9E3 100%); }
.dark .bg-card-gradient { background: linear-gradient(135deg, #2C221A 0%, #151C28 100%); }
```

Scrollbar thumb colors swap from black/white tints to `#C8C0B5` / `#42342A`.

### 2. Tailwind config (`tailwind.config.ts`)

- Convert `colors.background/foreground/card/...` to consume vars directly (`'var(--background)'`) instead of `hsl(var(--background))`, since tokens are now hex.
- Add new utilities:
  - `section: 'var(--section)'` → `bg-section`
  - `hint: 'var(--hint)'` → `text-hint`, `placeholder-hint`
  - `'card-gradient'` and `'hero-gradient'` are class-based (defined in CSS), no Tailwind addition needed.
- Replace `colors.brand` map with the new accent-aligned tokens so existing `bg-brand-*` classes still resolve gracefully:
  - `brand.foam → #F5F2EE`
  - `brand.caramel → #E0DAD1`
  - `brand.matcha → #4F6A80` (now the accent)
  - `brand.chai → #1C1410`
  This keeps the "tag" components on About page working while shifting them onto the new palette (caramel = card surface tag, matcha = accent tag).
- Remove the unused `cream.*` palette to prevent fallback to the old cream.

### 3. Hero gradient (`src/components/Hero.tsx`)

Replace the section's flat `bg-background` with the `bg-hero-gradient` utility so the diagonal gradient renders on light + dark.

### 4. Project / case study cards (`src/components/Projects.tsx`)

Audit the project card surfaces and apply `bg-card-gradient` to each card wrapper (replacing flat card backgrounds) so featured case study cards pick up the subtle blue-tinted gradient. Add hover state: `hover:border-accent` (replacing any current `hover:border-foreground`).

### 5. Hardcoded color cleanup

Search-and-replace pass for:
- `text-white` on dark sections → `text-foreground` (theme-driven) or `text-[#F0ECE6]` literal where forced.
- `bg-white` → `bg-card` or `bg-background`.
- `bg-black` → `bg-foreground`.
- `text-black` → `text-foreground`.
- Any `text-gray-*` / `bg-gray-*` Tailwind defaults → `text-muted-foreground` / `bg-section`.
- Hex literals `#FFFBE7`, `#220000`, `#7F793B`, `#E6DDA9`, `#F8F6F1`, `#1C1C1C`, `#FFFFFF`, `#000000` in `.tsx` files → token classes.

Files that need touching based on the search above include (non-exhaustive): `Header.tsx`, `Footer.tsx`, `FAQ.tsx`, `DesignPhilosophy.tsx`, `Collab.tsx`, `WorkExperiencePanel.tsx`, `CaseStudyProgressBar.tsx`, `Testimonials.tsx`, `CaseStudyNav.tsx`, `Packages.tsx`, `Community.tsx`, `Process.tsx`, `BioBlurb.tsx`, `IntroBlurb.tsx`, `About.tsx`, `AboutSection.tsx`, `Contact.tsx` (component + page), `Projects.tsx`, `Hero.tsx`, all 4 case study pages, `Work.tsx`, `WorkExperience.tsx`, `BookClub.tsx`, `AboutPage.tsx`, `Index.tsx`, `CustomCursor.tsx`.

`shadcn/ui` primitives (`button.tsx`, `dialog.tsx`, `input.tsx`, `sheet.tsx`, etc.) already use semantic tokens and inherit automatically — no edits needed.

### 6. Focus rings

Update the global focus-visible utility (currently `ring-ring`) to render at 40% opacity. Either set `--ring` to an `rgba()` value or add a utility override `.focus-visible:ring-accent/40` where rings appear. Simpler: change `--ring` to `#4F6A80` / `#7AAAC8` and rely on Tailwind's `ring-ring/40` where rings are rendered.

### 7. About page tags (`src/components/About.tsx`)

The 7 alternating `bg-brand-caramel` / `bg-brand-matcha` chips become "card surface" + "accent" chips automatically through the brand remap (step 2). No file edit required, but visually the matcha chips become slate-blue and caramel chips become warm taupe — confirm this is acceptable.

### Visual outcome

```text
Light mode:  Page #F5F2EE  →  Section #EDE9E3  →  Card #E0DAD1
             Text #1C1410  →  Muted #3D3530    →  Hint #7A7269
             Accent/CTA #4F6A80 (slate blue)
             Hero bg = warm taupe → soft blue → cream gradient

Dark mode:   Page #130F0C  →  Section #1F1813  →  Card #2C221A
             Text #F0ECE6  →  Muted #C8C0B5    →  Hint #7A7269
             Accent/CTA #7AAAC8 (light blue)
             Hero bg = warm dark → blue-black → near-black gradient
```

### Out of scope
- Layout, spacing, typography, font choices.
- Adding new components or sections.
- Reworking About page tag styling beyond the automatic recolor.
- Animation timings.

### Memory updates
After implementation, refresh `mem://design/visual-aesthetic` and `mem://index.md` Core to reflect the new palette (cream/dark → warm-neutral/blue-accent).
