

## Fix section spacing to 24px

**File:** `src/pages/BookClub.tsx`

### 1. Hero → Who We Are: 24px gap
- **Line 102**: Change hero bottom padding from `pb-16 md:pb-24` to `pb-6` (24px)
- **Line 145**: Change Who We Are top padding from `py-12 md:py-16` to `pt-6 pb-12 md:pb-16` (24px top)

### 2. Previous Reads → How the Community Works: 24px gap
- **Line 177**: Previous Reads already has `pb-0`, keep as is
- **Line 224**: Change How the Community Works top padding from `pt-12` to `pt-6` (24px, accounting for the carousel's `pb-4`)

