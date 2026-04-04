

## Restructure Book Club: Split hero + reduce community section padding

### Layout

```text
┌──────────────────────────────┐
│  "Community" (sm uppercase   │
│   tracked label, cream bg)   │
│                              │
│  ┌────────────────────────┐  │
│  │   hero image            │  │
│  │   (rounded-3xl, no      │  │
│  │    overlay)             │  │
│  └────────────────────────┘  │
│                              │
│  Fresh Perspectives (h1)     │
│  Helper text paragraph       │
│  [Learn More] pill button    │
│                              │
│  ── metrics row ──           │
│  2025 · 8+ · Monthly         │
└──────────────────────────────┘
```

### Changes (1 file: `src/pages/BookClub.tsx`)

**1. Hero section (lines 100-145)** — Replace overlay hero with split layout:

- **Above image**: "Community" as a small uppercase tracked label (`text-sm font-medium uppercase tracking-widest text-foreground/60`) on cream background, with top padding for the header
- **Hero image**: Full-width rounded-3xl image, no dark overlay, no text on top. Aspect ratio container for consistent sizing
- **Below image**: "Fresh Perspectives" as large serif h1, helper text, Learn More button, and metrics row — all on cream background with standard container padding

**2. "How the Community Works" section (lines 202-208)** — Reduce padding:

- Section: change `pt-8 md:pt-12 pb-16 md:pb-24` → `py-16 md:py-24` (match carousel section)
- Label wrapper: `mb-16` → `mb-6` (match "Previous Reads" spacing)
- Container: switch to `container mx-auto px-8 md:px-16 max-w-[1600px]` (match carousel section)
- Card padding: `py-10` → `py-6` for tighter rhythm

