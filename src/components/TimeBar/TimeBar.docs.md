# TimeBar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: TimeBar
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { TimeBar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TimeBar/TimeBar.tsx
types: src/components/TimeBar/TimeBar.types.ts
localExport: src/components/TimeBar/index.ts
publicExport: src/index.ts
storybook: src/stories/TimeBar.stories.tsx
figmaComponent: Time bar
figmaNodeId: 1670:1000
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1670-1000
codeConnect: src/components/TimeBar/TimeBar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { TimeBar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<TimeBar defaultValue={{ hours: 4, minutes: 4, seconds: 4 }} />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/TimeBar/TimeBar.tsx](TimeBar.tsx) |
| Props / shared types | [src/components/TimeBar/TimeBar.types.ts](TimeBar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/TimeBar.stories.tsx](../../stories/TimeBar.stories.tsx) |
| Code Connect | [src/components/TimeBar/TimeBar.figma.js](TimeBar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((value: TimeValue) => void) \| undefined` | optional | См. типы и пример выше |
| `onConfirm` | `((value: TimeValue) => void) \| undefined` | optional | См. типы и пример выше |
| `minTime` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `maxTime` | `TimeValue \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showSeconds` | `boolean \| undefined` | optional | См. типы и пример выше |
| `use24Hour` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showNowButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showConfirmButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `nowButtonText` | `string \| undefined` | optional | См. типы и пример выше |
| `confirmButtonText` | `string \| undefined` | optional | См. типы и пример выше |
| `className` | `string \| undefined` | optional | См. типы и пример выше |
| `columnsFillHeight` | `boolean \| undefined` | optional | См. типы и пример выше |
| `footerSlot` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slottimeСolumn>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slottimeСolumn>2` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slottimeСolumn>3` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Property 1` | Default | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping:
Figma exposes three column slots (<slottimeСolumn>*), while public
TimeBar API intentionally owns these columns internally.
To reproduce the current design sample, we provide defaultValue 04:04:04.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
