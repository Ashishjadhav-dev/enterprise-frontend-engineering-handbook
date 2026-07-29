# 13. Accessibility

Make keyboard, screen reader, contrast, and motion support part of normal engineering.

## Standards

- Target WCAG 2.2 AA.
- Use semantic HTML before ARIA.
- Trap and restore focus in modal experiences.
- Associate labels, help text, required state, and errors correctly.
- Expose table headers, sort state, row actions, and responsive alternatives.
- Provide text or tabular alternatives for charts.
- Respect reduced motion and never communicate status by colour alone.

## Accessibility review flow

- Keyboard-only pass
- Screen-reader name and role check
- Automated axe scan
- Contrast verification
- Zoom and reflow check
- Error-state review
