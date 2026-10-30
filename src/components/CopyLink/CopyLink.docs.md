# CopyLink

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: CopyLink
package: borrom-ds-test
import: import { CopyLink } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/CopyLink/CopyLink.tsx
types: src/components/CopyLink/CopyLink.types.ts
localExport: src/components/CopyLink/index.ts
publicExport: src/index.ts
storybook: null
figmaComponent: сopyLink
figmaNodeId: 8576:2288
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=8576-2288
codeConnect: src/components/CopyLink/CopyLink.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { CopyLink } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<CopyLink value="https://example.com/" defaultText="Копировать" successText="Скопировано" />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/CopyLink/CopyLink.tsx](CopyLink.tsx) |
| Props / shared types | [src/components/CopyLink/CopyLink.types.ts](CopyLink.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Code Connect | [src/components/CopyLink/CopyLink.figma.js](CopyLink.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `string` | required (зависит от union) | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `htmlType` | `HtmlType \| undefined` | optional | См. типы и пример выше |
| `scaling` | `boolean \| undefined` | optional | См. типы и пример выше |
| `defaultText` | `ReactNode` | optional | См. типы и пример выше |
| `successText` | `ReactNode` | optional | См. типы и пример выше |
| `icon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `successIcon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `successDuration` | `number \| undefined` | optional | См. типы и пример выше |
| `onCopy` | `((value: string) => void \| Promise<void>) \| undefined` | optional | См. типы и пример выше |
| `onCopyError` | `((error: unknown) => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `State` | Копировать, Скопировано | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: copied state is controlled internally after a click.
Replace the example value with the application's actual link.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
