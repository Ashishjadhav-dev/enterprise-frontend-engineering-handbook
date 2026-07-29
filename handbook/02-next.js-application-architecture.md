# 2. Next.js Application Architecture

A feature-oriented, server-first architecture for modern Next.js applications.

## Target structure

Route files compose features and enforce route boundaries. Feature modules own business capabilities. Shared modules contain intentionally generic primitives only.

## Recommended folder tree

```text
src/
  app/
    (public)/
    (authenticated)/
    api/
    layout.tsx
  features/
    accounts/
    reporting/
    workflows/
  shared/
    api/ auth/ config/ ui/ styles/ types/
  store/
  tests/
  middleware.ts
```

## Boundary rules

- Features may import shared modules; shared modules must not import features.
- Cross-feature usage must go through a public index.ts.
- Components do not call arbitrary endpoints directly.
- Transport types are mapped to domain models.
- Legacy code is isolated behind adapters with removal targets.

## Server and client components

Default to Server Components for read-heavy routes and layout composition. Use Client Components only where browser APIs, event handlers, local interaction state, or client libraries require them.

Keep client boundaries narrow to reduce hydration cost and bundle size.
