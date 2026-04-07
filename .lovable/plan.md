

## Style Arrow Circles to Match Avatar Circle

### Change
In the previous plan for `src/components/Testimonials.tsx`, update the arrow button styling to match the avatar circle: `w-10 h-10 rounded-full bg-white/10 border border-white/20` instead of plain `w-8 h-8 rounded-full bg-white/10`.

### Updated arrow button styling
```tsx
<button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
  <ChevronLeft size={16} className="text-white/80" />
</button>
```

This matches the existing avatar: `w-10 h-10 rounded-full bg-white/10 border border-white/20` with `text-white/80` for the icon color (matching the avatar's text).

### File modified
- `src/components/Testimonials.tsx`

