# 12. Testing Strategy

Protect critical behaviours at the most cost-effective test layer.

## Test pyramid

| Layer | Primary tools | Best targets |
| --- | --- | --- |
| Unit | Vitest/Jest | Pure business logic, reducers, mapping |
| Component | React Testing Library | Forms, tables, dialogs, states |
| Integration | MSW + app tests | API client, auth expiry, caching |
| End-to-end | Playwright | Login, create, publish, payment-critical flows |
| Accessibility | axe + keyboard checks | Navigation, modals, forms, tables |
| Visual | Storybook/Playwright | Shared UI and critical screens |

## Definition of done

- Every bug fix includes a regression test when feasible.
- Every new business rule has unit or integration coverage.
- Critical journeys run in CI against stable fixtures.
- Flaky tests are defects, not acceptable noise.
