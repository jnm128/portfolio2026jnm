

## Plan: Update Book Club page styling

### 1. Center-align "A Look at Our Past Reads" section (lines 120-127)
- Add `text-center` to the label and subtitle wrapper

### 2. Make book carousel larger
- Change carousel container from `max-w-4xl` to `max-w-6xl` to give books more space
- Keep `basis-1/2 lg:basis-1/4` but the wider container makes each book bigger

### 3. Make "What We Do" section dark (lines 163-210)
- Change section background from `bg-[#F8F6F1]` to `bg-[#1C1C1C]`
- Invert all text colors: `text-foreground` → `text-white`, `text-muted-foreground` → `text-white/70`
- Invert borders: `border-foreground/10` → `border-white/15`
- Invert icon containers: `bg-foreground` → `bg-white` with `text-background` → `text-[#1C1C1C]`

### 4. Make CTA section dark, matching homepage Collab style (lines 212-245)
- Change section background to `bg-[#1C1C1C]`
- Remove the inner `bg-[#EFECE6]` rounded card -- make it flat like Collab component
- Center-aligned text with white heading, white/70 body text
- Primary CTA button: `bg-white text-black` (matching Collab's "Get in Touch" style)
- Secondary button: `border-white/20 text-white`

### Files modified
- `src/pages/BookClub.tsx`

