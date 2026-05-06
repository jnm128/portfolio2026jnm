## Problem

The current `useLockBodyScroll` hook applies `position: fixed` to `body`, which interferes with the slide-out panels' internal `overflow-y-auto` scrolling. Users can't scroll the Resume drawer content.

## Fix

Replace the `position: fixed` strategy with a simpler `overflow: hidden` lock on `<html>` and `<body>`. This prevents page scroll while leaving the portal-rendered drawer (which is `fixed` + `overflow-y-auto`) free to scroll its own content.

### File: `src/hooks/use-lock-body-scroll.ts`

```ts
import { useEffect } from 'react';

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      body.style.paddingRight = prevPad;
    };
  }, [locked]);
}
```

No changes needed to `WorkExperiencePanel`, `CommunityPanel`, or `ServicesPanel` — they already call the hook and have `overflow-y-auto` on the drawer container.
