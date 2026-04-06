

## Two Changes: Case Study Progress Bar + Light FAQ Section

### 1. Case Study Progress Bar

**New file: `src/components/CaseStudyProgressBar.tsx`**
- A thin (2px) progress bar that tracks scroll position
- Uses `useEffect` with a scroll listener + `requestAnimationFrame` for smooth performance
- Calculates `(scrollY / (documentHeight - viewportHeight)) * 100` and sets width via inline style
- Styled with `bg-foreground` and `transition-all duration-150`

**Modified: `src/components/Header.tsx`**
- Add `const isCaseStudy = location.pathname.startsWith('/case-study')`
- Import and render `<CaseStudyProgressBar />` as the last child inside `<header>`, only when `isCaseStudy`
- Position it with `absolute bottom-0 left-0` so it sits flush at the header's bottom edge

### 2. Book Club FAQ — Light Background

**Modified: `src/pages/BookClub.tsx` (lines 265–313)**

Switch the FAQ section from dark to cream to create a visual break after the dark CTA:
- Section: `bg-[#1C1C1C]` → `bg-[#F8F6F1]`
- Label: `text-white/60` → `text-foreground/60`
- Question text: `text-white` → `text-foreground`
- Chevron: `text-white/60` → `text-foreground/60`
- Answer text: `text-white/70` → `text-muted-foreground`
- Dividers: `border-white/15` → `border-foreground/10`

### Result
```text
Case study pages:
  Header [======progress bar======]
  Content...

Book Club page rhythm:
  Hero (cream)
  Who We Are (dark)
  Previous Reads (cream)
  How It Works (dark)
  CTA (dark)
  FAQ (cream)        ← changed
  Footer
```

