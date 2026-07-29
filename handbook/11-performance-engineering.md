# 11. Performance Engineering

Establish measurable budgets and optimise the routes that matter most.

## Core practices

- Publish route bundle reports for production builds.
- Dynamically load editors, builders, charts, media tools, and large dialogs.
- Virtualize large tables, logs, dropdowns, and node lists.
- Use next/image and next/font correctly.
- Debounce searches, cancel stale requests, and deduplicate stable reference data.

## Suggested budgets

| Metric | Initial gate | Target |
| --- | --- | --- |
| LCP p75 | < 3.0 s | < 2.5 s |
| INP p75 | < 300 ms | < 200 ms |
| CLS p75 | < 0.15 | < 0.10 |
| Largest route JS | Baseline - 15% | No unapproved regression |
| Duplicate requests | Measured | Zero per interaction |

## Performance review questions

- What JavaScript is required before the user can act?
- Which data can be fetched on the server?
- Which dependency dominates the bundle?
- Does the component render thousands of DOM nodes?
- Can the route stream useful content earlier?
