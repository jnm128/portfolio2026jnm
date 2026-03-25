

## Widen Homepage Components to `max-w-[1600px]`

**Goal**: Change all homepage component containers from `max-w-4xl` back to `max-w-[1600px]`.

### Files to Update (8 files)

| File | Line | Change |
|------|------|--------|
| `src/components/Hero.tsx` | 55 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/IntroBlurb.tsx` | 20 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/BioBlurb.tsx` | 12 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/Projects.tsx` | 53 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/Testimonials.tsx` | 55 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/Community.tsx` | 13 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/Collab.tsx` | 13 | `max-w-4xl` → `max-w-[1600px]` |
| `src/components/Footer.tsx` | 26 | `max-w-4xl` → `max-w-[1600px]` |

`AboutSection.tsx` already uses `max-w-[1600px]` — no change needed.

Other pages (Work, About, Book Club) stay at `max-w-4xl`.

