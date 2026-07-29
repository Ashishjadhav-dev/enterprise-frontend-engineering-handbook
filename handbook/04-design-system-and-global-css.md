# 4. Design System and Global CSS

Create a single visual language shared by custom components and third-party UI libraries.

## Style layers

- globals.css for reset, base typography, document defaults, focus style, and truly global utilities.
- tokens.css for semantic colours, spacing, type, radius, shadow, motion, z-index, and dimensions.
- themes.css for light and dark overrides.
- Feature-level CSS Modules for local layout only.

## Token example

```text
@layer reset, tokens, base, components, utilities;

@layer tokens {
  :root {
    --font-sans: var(--font-inter), Arial, sans-serif;
    --color-primary: #1646d8;
    --text-primary: #0f1d2e;
    --surface-page: #f6f8fb;
    --surface-card: #ffffff;
    --border-default: #d9e0e8;
    --space-1: .25rem;
    --space-2: .5rem;
    --space-4: 1rem;
    --radius-md: .5rem;
    --shadow-sm: 0 1px 2px rgb(15 29 46 / 8%);
  }
}
```

## Governance

- No new hardcoded brand colours, spacing, shadows, or z-index values without a token proposal.
- Use semantic names such as status-error and text-secondary.
- Bridge tokens into MUI, Tailwind, or other component foundations.
- Document every shared component state in Storybook.
