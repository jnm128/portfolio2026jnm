

## Plan: Convert book grid to 4-item carousel with arrows

### Changes to `src/pages/BookClub.tsx`

1. **Import** `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` from `@/components/ui/carousel` and `ArrowLeft`/`ArrowRight` from `lucide-react`

2. **Replace the 3x3 grid** (the `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` div) with an Embla carousel configured to show 4 items at a time:
   - Use `<Carousel>` with `opts={{ align: "start", slidesToScroll: 1 }}` 
   - Each `<CarouselItem>` gets `basis-1/4` (desktop), `basis-1/2` (mobile) so 4 books show on desktop, 2 on mobile
   - Add `<CarouselPrevious>` and `<CarouselNext>` arrow buttons, styled minimally (black outline, positioned outside or at edges)

3. **Keep** book card markup (image, title, author) as-is inside each carousel item

### Files modified
- `src/pages/BookClub.tsx`

