

## Apply the Chai/Matcha/Caramel/Foam palette site-wide

Map the four uploaded brand colors into the design token system so the whole site (light + dark themes, CTAs, tags) updates from one source of truth instead of touching every file.

### Token mapping

| Brand color | Hex | Role |
|---|---|---|
| Foam | `#FFFBE7` | Light theme background (`--background`) |
| Chai Spice | `#220000` | Dark theme background + light theme primary/foreground (CTA fill) |
| Matcha | `#7F793B` | Accent / tag color #1 |
| Caramel | `#E6DDA9` | Secondary surface / tag color #2 |

### Changes

**1. `src/index.css` — update CSS variables**
- Light theme (`:root`):
  - `--background` → Foam `#FFFBE7` (HSL `49 100% 95%`)
  - `--foreground` / `--primary` → Chai Spice `#220000` (HSL `0 100% 7%`)
  - `--secondary` / `--muted` / `--accent` → Caramel `#E6DDA9` (HSL `50 56% 78%`)
  - `--border` / `--input` → Caramel-tinted (HSL `50 40% 70%`)
  - Surface ramp 1→6 retuned from Foam → Chai Spice
- Dark theme (`.dark`):
  - `--background` → Chai Spice `#220000`
  - `--foreground` → Foam
  - `--secondary` → Matcha `#7F793B`

**2. `tailwind.config.ts` — add semantic brand tokens**
Add a `brand` color group so tags can reference them directly:
```ts
brand: {
  foam: '#FFFBE7',
  caramel: '#E6DDA9',
  matcha: '#7F793B',
  chai: '#220000',
}
```

**3. Replace hardcoded hex usage with tokens**
Sweep these files to swap `bg-[#F8F6F1]` → `bg-background` and `bg-[#1C1C1C]` / `text-[#F8F6F1]` → `bg-foreground` / `text-background`:
- `src/components/AboutSection.tsx`, `Hero.tsx`, `IntroBlurb.tsx`, `Process.tsx`, `Community.tsx`, `Footer.tsx`, `Testimonials.tsx`, `WorkExperiencePanel.tsx`, `Header.tsx`
- `src/components/DarkSection.tsx` (inline style swap to `hsl(var(--foreground))` / `hsl(var(--background))`)
- `src/pages/Index.tsx`, `Work.tsx`, all `CaseStudy*.tsx` files

**4. Tag color refresh — `src/components/About.tsx`**
Alternate tag pills between Caramel and Matcha for a richer palette:
- Odd tags: `bg-brand-caramel text-brand-chai`
- Even tags: `bg-brand-matcha text-brand-foam`

**5. CTA buttons** stay on `bg-foreground text-background`, which now automatically renders as Chai-on-Foam (light) / Foam-on-Chai (dark) — no per-button edits needed.

### Visual flow after change

```text
Light pages:  Foam bg  →  Chai text  →  Chai CTA w/ Foam text
Dark sections: Chai bg →  Foam text  →  Foam CTA w/ Chai text
Tags:         Caramel + Matcha pills (alternating)
```

### Out of scope
- No layout, spacing, or typography changes.
- Component-specific colors (e.g., FAQ's `bg-white`, Packages' card `bg-white`) will be updated to `bg-card` so they pick up the new tokens automatically.
- Footer text colors flip from hardcoded `text-white` → `text-background` for token consistency.

