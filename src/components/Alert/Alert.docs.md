# Alert

Документация для связи Figma-компонента `Аlert` с runtime-компонентом `Alert`.

```text
src/components/Alert/Alert.docs.md
```

Парный Code Connect файл:

```text
src/components/Alert/Alert.figma.js
```

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
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1216-1433
figmaNodeId: 1216:1433
codeConnect: src/components/Alert/Alert.figma.js
```

## Public usage

```tsx
import { Alert, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Alert
      type="info"
      title="Заголовок"
      description="Описание"
      actions={
        <>
          <Button size="sm" color="info">
            Отмена
          </Button>
          <Button size="sm" color="positive">
            Подтвердить
          </Button>
        </>
      }
      onClose={() => {}}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Alert/Alert.tsx` |
| Public props | `src/components/Alert/Alert.types.ts` |
| Layout helpers | `src/components/Alert/Alert.utils.ts` |
| Local export | `src/components/Alert/index.ts` |
| Styles entry | `src/components/Alert/styles/index.ts` |
| Storybook | `src/stories/Alert.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Title` | `title` | `ReactNode` | - | Текст заголовка |
| `Subtitle` | `description` | `ReactNode \| undefined` | `undefined` | `On` + `textSubtitle` -> `description`; `Off` -> `undefined` |
| `textSubtitle` | `description` | `ReactNode` | - | Используется только при `Subtitle=On` |
| `Result` | `type` | `positive`, `danger`, `warning`, `info` | `positive` | `Worning -> warning` |
| `Type` | partial | - | `Alert` | Temporary mapping: отдельного runtime prop нет |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Positive / Danger / Warning / Info | Yes | `type` |
| With subtitle | Yes | `description` |
| Without subtitle (compact) | Yes | `description` omitted |
| Closable | Yes | `closable`, `onClose` |
| With actions | Yes | `actions` |

## Design matching notes

- Runtime не имеет отдельного `variant`-пропа для Figma `Type=Alert/Tost`.
- Компактный вид достигается автоматически при отсутствии `description` и `actions`.
- Для `Type=Alert` в Code Connect добавляется демонстрационный `actions`, потому что в макете есть вложенные кнопки.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Type=Alert/Tost` | `Alert -> closable + actions (+ optional description)`, `Tost -> closable={false}` | В `AlertProps` нет отдельного пропа `typeVariant`/`layout` | Если фронт добавит runtime variant prop, обновить docs + Code Connect |
| `Button 1` / `Button 2` из Figma | Статический `actions` с двумя `<Button size="sm" ... />` | Вложенные instance из Figma не дают безопасного универсального runtime payload | При появлении явного API для action-слотов расширить mapping |

## Examples

### Alert with subtitle and actions

```tsx
<Alert
  type="warning"
  title="Заголовок"
  description="Подзаголовок"
  actions={
    <>
      <Button size="sm" color="info">
        Отмена
      </Button>
      <Button size="sm" color="positive">
        Готово
      </Button>
    </>
  }
  onClose={() => {}}
/>
```

### Toast-like compact state

```tsx
<Alert type="info" title="Короткое сообщение" closable={false} />
```
