

## Update Work Page to Wide Container Layout

### Change
Switch all section containers in `src/pages/Work.tsx` from `max-w-4xl` to `max-w-[1600px]` while keeping `mx-auto px-8 md:px-16`.

### File: `src/pages/Work.tsx`
- **Hero section** (line ~49): `max-w-4xl mx-auto px-8 md:px-16` → `max-w-[1600px] mx-auto px-8 md:px-16`
- **Project cards section** (line ~59): `max-w-4xl mx-auto px-8 md:px-16` → `max-w-[1600px] mx-auto px-8 md:px-16`
- **Dark CTA section** (line ~96): `max-w-4xl mx-auto px-8 md:px-16` → `max-w-[1600px] mx-auto px-8 md:px-16`

