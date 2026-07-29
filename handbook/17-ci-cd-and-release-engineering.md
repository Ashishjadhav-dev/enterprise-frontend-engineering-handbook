# 17. CI/CD and Release Engineering

Convert standards into automatic gates and safe deployment workflows.

## Pipeline

```text
1. Install locked dependencies
2. Validate environment schema
3. Lint with zero warnings
4. Typecheck
5. Unit and component tests
6. Production build
7. Bundle-budget check
8. Accessibility smoke tests
9. Critical E2E tests
10. Dependency and secret scans
11. Publish build metadata
12. Deploy with rollback support
```

## Release controls

- Preview environments for pull requests.
- Progressive rollouts for risky features.
- Documented smoke tests and rollback ownership.
- Release notes tied to observable behaviour and migrations.
