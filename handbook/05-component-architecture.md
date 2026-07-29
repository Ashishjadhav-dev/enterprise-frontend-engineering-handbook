# 5. Component Architecture

Build components that remain understandable, composable, and testable.

## Layer model

| Layer | Responsibility | Example |
| --- | --- | --- |
| Route shell | Routing, metadata, authorization, initial orchestration | page.tsx |
| Feature container | Coordinates use case and state | ReportContainer |
| Presentational component | Typed rendering and events | ReportTable |
| Hook | Reusable UI orchestration | useReportFilters |
| Domain function | Pure business transformation | buildReportQuery |
| Repository | Endpoint access and mapping | reportRepository |

## Component standards

- Prefer explicit props over broad context.
- Avoid components that fetch, transform, validate, navigate, and render simultaneously.
- Use controlled primitives for forms and reusable compound components only when they improve ergonomics.
- Define loading, empty, success, error, disabled, permission, and offline states.
