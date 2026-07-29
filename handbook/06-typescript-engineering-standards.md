# 6. TypeScript Engineering Standards

Use TypeScript as a design tool rather than a syntax layer.

## Compiler policy

- Enable strict, strictNullChecks, noUncheckedIndexedAccess, exactOptionalPropertyTypes, and noImplicitOverride progressively.
- Create a no-growth baseline for any, unsafe casts, @ts-ignore, and eslint-disable.

## Boundary validation

Treat external input as unknown. Validate API responses, search params, local persistence, file content, and postMessage events at runtime.

Map transport contracts into domain types before exposing data to complex UI.

## Naming and exports

- PascalCase for components and types, camelCase for functions and values, predictable handler prefixes, and one agreed folder naming convention.
- Prefer named exports for shared modules and public barrel files only at feature boundaries.
