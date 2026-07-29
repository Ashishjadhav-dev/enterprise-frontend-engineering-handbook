# 10. Frontend Security

Apply practical controls against browser, dependency, and content threats.

## Security checklist

- No secrets in NEXT_PUBLIC variables or client bundles.
- No security claims based on client-side encryption with bundled keys.
- Sanitize user-generated HTML using allow-list policies.
- Validate upload type, extension, MIME, size, dimensions, and malware status.
- Pin and govern third-party scripts.
- Mask tokens, personal data, and message content from logs.

## Supply-chain security

Use locked dependencies, automated vulnerability scanning, secret scanning, provenance-aware packages, and deliberate upgrade windows.

Remove duplicate libraries to reduce attack surface and maintenance cost.
