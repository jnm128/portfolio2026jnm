

## Redesign Contact Page: Split Layout with Dark Left Panel

**Goal**: Transform the Contact page into a two-panel split layout inspired by the reference image. Left side is dark (`bg-[#1C1C1C]`) with a tagline. Right side has "Get in touch" and "Currently" info styled with `border-t border-white/15` flat rows (matching "Beyond the Pixels").

### Layout Structure

```text
┌─────────────────────┬─────────────────────────┐
│                     │                         │
│  (dark #1C1C1C)     │  (cream #F8F6F1)        │
│                     │                         │
│  "Let's create      │  Get in touch           │
│   something         │  ─────────────────────  │
│   meaningful        │  Email                  │
│   together"         │  hello@joannaminott.com │
│                     │  ─────────────────────  │
│                     │  LinkedIn               │
│                     │  Connect with me        │
│                     │  ─────────────────────  │
│                     │  Schedule               │
│                     │  Book a 30-min call     │
│                     │                         │
│                     │  Currently              │
│                     │  ─────────────────────  │
│                     │  Location               │
│                     │  New York, NY           │
│                     │  ─────────────────────  │
│                     │  Availability           │
│                     │  Open for new projects  │
└─────────────────────┴─────────────────────────┘
```

### Changes to `src/pages/Contact.tsx`

1. **Split into two-column layout**: `grid md:grid-cols-2 min-h-screen`. On mobile, stack vertically (dark panel on top, content below).

2. **Left panel** (`bg-[#1C1C1C]`): Full height, contains the tagline "Let's create something meaningful together" in `text-white font-serif text-3xl md:text-5xl`, vertically centered or near-bottom. Sticky on desktop (`md:sticky md:top-0 md:h-screen`).

3. **Right panel** (`bg-[#F8F6F1]`): Contains all contact info and availability, styled with flat border-separated rows:
   - Section header "Get in touch" as `text-3xl md:text-4xl font-serif mb-8`
   - Each contact method (Email, LinkedIn, Schedule) as a `border-t border-foreground/10 py-8` row — remove card wrappers, rounded corners, icon circles. Use `text-xs uppercase tracking-widest text-muted-foreground` for labels, `text-lg font-serif` for values.
   - Section header "Currently" as `text-xl font-serif mt-16 mb-8`
   - Location and Availability as `border-t border-foreground/10 py-8` rows — remove `rounded-2xl bg-secondary/30`. Same label/value typography. Last row gets `border-b`.
   - Remove the response time card.

4. **Remove** the circular icon containers and the two-column grid within the content area — everything flows as a single column of border-separated rows on the right side.

### Files Modified
- `src/pages/Contact.tsx`

