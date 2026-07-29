# 20. Legacy Modernization

Improve a large codebase while continuing product delivery.

## Migration sequence

- Baseline current risks and metrics.
- Stop new debt with CI gates.
- Build shared foundations: session, API, errors, tokens, testing.
- Migrate one business feature at a time.
- Remove adapters and duplicate libraries after consumers move.
- Track deprecations with owners and dates.

## Risk controls

| Risk | Control |
| --- | --- |
| Refactor delays delivery | Capacity allocation and feature-by-feature migration |
| Strict TypeScript creates noise | Baseline and touched-file policy |
| Design system becomes cosmetic | Connect tokens to primitives, tests, and accessibility |
| Session migration disrupts users | Staged rollout, telemetry, rollback |
| Tests become flaky | Stable data, ownership, deadlines |
| Legacy patterns keep growing | Import restrictions, templates, CODEOWNERS |
