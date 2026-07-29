# 19. Code Review Standard

Review for behaviour, maintainability, security, and operational impact.

## Review checklist

- Does the implementation respect module boundaries?
- Are permissions enforced server-side?
- Are external inputs validated?
- Are loading, empty, error, and permission states handled?
- Is the bundle impact justified?
- Can the behaviour be tested at a cheaper layer?
- Are accessibility and keyboard interactions correct?
- Is observability sufficient for production support?
