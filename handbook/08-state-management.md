# 8. State Management

Assign every state value to the smallest correct owner.

## Ownership model

| State type | Preferred owner | Examples |
| --- | --- | --- |
| Server state | TanStack Query or server-data pattern | Lists, reports, profiles |
| URL state | Search params | Filters, sort, pagination, tabs |
| Global workflow state | Redux Toolkit | Multi-route builder draft |
| Local state | Component or reducer | Dialog, selection, transient UI |
| Form state | One approved form library | Create/edit workflows |
| Session state | Server-backed provider | User, account, permissions |

## Rules

- Do not duplicate server state in Redux.
- Do not use global state for values that can live in a URL or component.
- Persist only intentional, versioned, non-sensitive state.
- Selectors should expose domain meaning rather than store shape.
