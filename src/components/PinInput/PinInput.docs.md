# PinInput

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: PinInput
package: borrom-ds-test
import: import { PinInput } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/PinInput/PinInput.tsx
types: src/components/PinInput/PinInput.types.ts
localExport: src/components/PinInput/index.ts
publicExport: src/index.ts
storybook: src/stories/PinInput.stories.tsx
figmaComponent: PinInput
figmaNodeId: 1199:5009
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1199-5009
codeConnect: src/components/PinInput/PinInput.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { PinInput } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<PinInput
      size="xs"
      type="default"
      error={true}

      value=""
    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/PinInput/PinInput.tsx](PinInput.tsx) |
| Props / shared types | [src/components/PinInput/PinInput.types.ts](PinInput.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/PinInput.stories.tsx](../../stories/PinInput.stories.tsx) |
| Code Connect | [src/components/PinInput/PinInput.figma.js](PinInput.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `type` | `PinInputType \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((value: string) => void) \| undefined` | optional | См. типы и пример выше |
| `onComplete` | `((value: string) => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `pinInputItem` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Filled, Disable, Mask | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Result` | Error, Normal | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Mask` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: pinInputItem has no public runtime prop.

Temporary mapping: Figma "Filled" and "Mask" visual states imply value presence.
PinInput accepts explicit value string, so we use demo digit "9".

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
