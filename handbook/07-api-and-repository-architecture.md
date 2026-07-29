# 7. API and Repository Architecture

Standardise data access, error behaviour, cancellation, retries, and contracts.

## Central client requirements

- Base URL resolution, credentials, timeout, request ID, cancellation, normalized errors, and observability hooks.
- Safe GET requests may retry transient failures; mutations must never retry blindly.
- High-impact create or send actions should use idempotency keys when supported.

## Normalized error contract

```text
type AppError = {
  code: string;
  message: string;
  status?: number;
  fieldErrors?: Record<string, string>;
  correlationId?: string;
  retryable: boolean;
};
```

## Repository example

```text
export async function getReport(input: ReportQuery): Promise<Report> {
  const response = await httpClient.get('/reports', { params: input });
  const parsed = ReportResponseSchema.parse(response.data);
  return mapReportResponse(parsed);
}
```
