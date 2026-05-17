# Implementation report template

Используй этот шаблон для отчетов по реализации Figma-экрана. Важно: решение должно быть описано в том же файле, где описана проблема.

## Контекст

- Figma URL:
- Figma file:
- Node:
- Экран / задача:
- Тема: `themes_light` / `themes_dark`

## Figma data и Code Connect

- `get_design_context`:
- Code Connect / docs / Git links:
- `componentProperties` / `variantProperties`:
- Если root-контекст был слишком сжат: использован Figma Plugin API read-only / `get_metadata`.

## Geometry map

| Area | Figma px | Token variable | Class / CSS | Status | Notes |
| --- | ---: | --- | --- | --- | --- |
| `<area>` | `<px>` | `<token>` | `<class>` | ok / temporary | `<notes>` |

## Использованные DS-компоненты

| Figma component | Source | Runtime import | Props / composition | Status |
| --- | --- | --- | --- | --- |
| `<component>` | Code Connect / docs / metadata | `borrom-ds-test` | `<props>` | used / fallback |

## Problems, decisions and prevention

| Symptom | Cause | Decision | Code change / no-change reason | Prevention |
| --- | --- | --- | --- | --- |
| `<what was wrong>` | `<why>` | `<accepted solution>` | `<what changed>` | `<future rule>` |

## Assumptions / temporary mappings

| Item | Type | Reason | Follow-up |
| --- | --- | --- | --- |
| `<item>` | Assumption / Temporary mapping | `<why>` | `<what to clarify>` |

## Checks

- `npm run lint`:
- `npm run build`:
- `npm run encoding:check`:
- `npm run server:start`:
- Visual parity-pass:
- Critical spacing parity check:

## Итог

- Что реализовано:
- Что осталось проверить:
- Какие правила стоит перенести в `PROJECT_RULES.md` / `AGENTS.md`:
