# Alert

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Alert
package: borrom-ds-test
import: import { Alert } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Alert/Alert.tsx
types: src/components/Alert/Alert.types.ts
localExport: src/components/Alert/index.ts
publicExport: src/index.ts
storybook: src/stories/Alert.stories.tsx
figmaComponent: Аlert
figmaNodeId: 1216:1433
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1216-1433
codeConnect: src/components/Alert/Alert.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Alert, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Alert
      type="positive"
      title="Пример"

      onClose={() => {}}

      actions={
        <>
          <Button size="sm" color="info">Button</Button>
          <Button size="sm" color="positive">Button</Button>
        </>
      }

    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Alert/Alert.tsx](Alert.tsx) |
| Props / shared types | [src/components/Alert/Alert.types.ts](Alert.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Alert.stories.tsx](../../stories/Alert.stories.tsx) |
| Code Connect | [src/components/Alert/Alert.figma.js](Alert.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `type` | `AlertColor \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | required (зависит от union) | См. типы и пример выше |
| `description` | `ReactNode` | optional | См. типы и пример выше |
| `actions` | `ReactNode` | optional | См. типы и пример выше |
| `closable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClose` | `(() => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textSubtitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Subtitle` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Title` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotLeft>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotLeft` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotAction>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `closeButton` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Alert, Tost | `type`; значения см. template |
| `Result` | Positive, Danger, Info, Worning | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: runtime Alert has no explicit variant prop for Figma Type.

Temporary mapping: nested Figma Button instances are represented
by a stable demo actions slot in generated code.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
