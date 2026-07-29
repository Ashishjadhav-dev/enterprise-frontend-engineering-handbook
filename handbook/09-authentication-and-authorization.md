# 9. Authentication and Authorization

Design sessions and permissions around server trust boundaries.

## Session architecture

- Use server-issued Secure, HttpOnly, SameSite cookies.
- Validate authentication and authorization on every protected server operation.
- Middleware may reject obvious unauthenticated navigation, but backend authorization remains final.
- Centralize 401/403 behaviour and clear only safe client caches.

## Authorization model

Model permissions as capabilities rather than scattered role string checks.

UI visibility improves experience but never replaces server enforcement.

Sensitive operations require explicit audit events.

## Threat controls

- CSRF protection for cookie-authenticated mutations, CSP, output encoding, HTML sanitization, clickjacking protection, safe redirects, and secure logout.
