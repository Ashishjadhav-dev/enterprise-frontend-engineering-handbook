# 21. Reference Implementation Playbook

A practical sequence for establishing the architecture in a real repository.

## First 20 engineering tickets

- Inventory browser storage and session usage.
- Classify environment variables.
- Design server-backed session contract.
- Centralize unauthorized-session handling.
- Add CSP and security headers.
- Make lint and typecheck mandatory.
- Create a no-growth warning baseline.
- Add dependency and secret scans.
- Create design-token files.
- Move fonts to next/font.
- Create shared form primitives.
- Bridge tokens into the UI theme.
- Create normalized API errors.
- Consolidate HTTP clients.
- Introduce critical endpoint schemas.
- Adopt server-state caching.
- Publish feature-module template.
- Add bundle analysis.
- Lazy-load heavy dependencies.
- Add authentication and critical-flow tests.

## Professional definition of done

- Acceptance criteria and edge cases are documented.
- Protected operations enforce authorization server-side.
- No sensitive browser storage or public secrets are introduced.
- No new unsafe typing or hardcoded design values without justification.
- Loading, empty, success, error, permission, and timeout states are handled.
- Keyboard, focus, labels, and contrast are verified.
- Tests and monitoring are updated.
- CI passes with no quality-gate violations.
