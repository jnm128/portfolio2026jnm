

## Make Stats Row on Mobile

Change the stats grid from `grid-cols-2 md:grid-cols-4` to `grid-cols-4` so all 4 stats display in a single row on all screen sizes. Reduce gap and text sizes on small screens for fit.

### File: `src/pages/BookClub.tsx` (line 113)

- Change grid class from `grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8` to `grid grid-cols-4 gap-3 md:gap-8`
- Optionally reduce the smallest text size from `text-xl` to `text-lg` so values fit comfortably on narrow screens

