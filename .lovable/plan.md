

## Plan: Fix Process spacing and normalize heading sizes

### Issues found

1. **Process section spacing**: Uses `py-12 md:py-20` — should be `py-16 md:py-24` to match the standardized spacing. Also uses `bg-white` instead of `bg-[#F8F6F1]`, and `px-4 md:px-6` / `max-w-6xl` instead of the site-wide `px-6 md:px-10` / `max-w-[1600px]`.

2. **Heading size mismatch**: Hero h1 ("Joanna Minott, UX Designer") is `text-2xl md:text-3xl`, while AboutSection h2 ("Design, Tech & Intention") is `text-3xl md:text-5xl`. These should match.

### Changes

**`src/components/Process.tsx`**
- Change `py-12 md:py-20 bg-white` → `py-16 md:py-24 bg-[#F8F6F1]`
- Change container from `px-4 md:px-6` + `max-w-6xl` to `px-6 md:px-10` + `max-w-[1600px]` to match other sections

**`src/components/Hero.tsx`**
- Change h1 from `text-2xl md:text-3xl` → `text-3xl md:text-5xl` to match AboutSection heading size

