# Geometry Map

Используй этот шаблон перед page-level версткой экрана.

## Source

```yaml
figmaFile: <file key>
figmaNode: <node id>
screen: <screen name>
viewport: desktop | mobile
theme: themes_light | themes_dark
```

## Critical Measurements

| Area | Figma px | Token variable | Class / CSS | Status | Notes |
| --- | ---: | --- | --- | --- | --- |
| Main container width | `<px>` | `<token>` | `<class>` | pending |  |
| Header height | `<px>` | `<token>` | `<class>` | pending |  |
| PageHeader -> next section | `40px` | `--generic-spacing-15` | `gap-15` | pending | desktop example |
| Section vertical gap | `<px>` | `<token>` | `<class>` | pending |  |
| Columns horizontal gap | `<px>` | `<token>` | `<class>` | pending |  |
| Card padding | `<px>` | `<token>` | `<class>` | pending |  |

## Spacing Scale Reference

Use real project tokens, not visual guessing.

| Figma px | Token variable | Class |
| ---: | --- | --- |
| `22px` | `--generic-spacing-10` | `gap-10` |
| `40px` | `--generic-spacing-15` | `gap-15` |

## Critical Spacing Parity Check

Before final delivery:

- Check every `pending` row above.
- Compare local screenshot against Figma screenshot only for critical gap/offset first.
- If the local value differs intentionally, change status to `temporary mapping` and explain why.
- Do not mark the screen done while critical spacing rows are still `pending`.
