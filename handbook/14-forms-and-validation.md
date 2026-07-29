# 14. Forms and Validation

Build predictable forms that scale from simple settings to multi-step workflows.

## Form architecture

- Choose one primary form library.
- Define runtime schemas shared with server contracts where practical.
- Keep field components responsible for labels, help text, errors, and accessibility relationships.
- Separate draft state from submitted server state.

## Validation rules

- Validate on the server regardless of client validation.
- Show field-level errors near the field and a summary for large forms.
- Do not block typing with expensive synchronous validation.
- Preserve user input after recoverable server errors.
