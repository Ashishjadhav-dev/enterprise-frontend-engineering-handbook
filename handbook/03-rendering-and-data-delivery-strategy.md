# 3. Rendering and Data Delivery Strategy

Choose SSR, static generation, streaming, and client rendering intentionally.

## Rendering decision matrix

| Scenario | Preferred strategy | Reason |
| --- | --- | --- |
| Public marketing page | Static generation | Fast, cacheable, stable content |
| Authenticated dashboard | Server rendering + client islands | Fresh data with limited hydration |
| Large interactive builder | Client component loaded dynamically | Heavy interaction and browser-only libraries |
| Frequently updated report | Server rendering with cache policy | Freshness and predictable request cost |
| Long-running data view | Streaming + Suspense | Progressive display and lower perceived latency |

## Caching rules

- Define freshness by data class rather than adding cache settings ad hoc.
- Use request memoization, route caching, CDN caching, and client caching only when ownership and invalidation are explicit.
- Mutations must invalidate or update every affected query deterministically.
