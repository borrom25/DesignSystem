# StepBar

Документация для связи Figma-компонента `StepBar (stepper/process)` с runtime-компонентом `StepBar`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `StepBar.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: StepBar
package: borrom-ds-test
import: import { StepBar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/StepBar/StepBar.tsx
types: src/components/StepBar/StepBar.types.ts
localExport: src/components/StepBar/index.ts
publicExport: src/index.ts
storybook: src/stories/StepBar.stories.tsx
figmaComponent: StepBar
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1066-5093
figmaNodeId: 1066:5093
codeConnect: src/components/StepBar/StepBar.figma.js
```

## Public usage

```tsx
import { StepBar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { Check } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "step-1", label: "Шаг 1" },
  { id: "step-2", label: "Шаг 2", type: "successful", rightIcon: Check },
  { id: "step-3", label: "Шаг 3" },
  { id: "step-4", label: "Шаг 4" },
];

export function Example() {
  const [active, setActive] = useState("step-1");

  return (
    <StepBar
      items={items}
      active={active}
      onChangeStep={setActive}
      onClickSuccessButton={() => {}}
      successButtonText="Готово"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/StepBar/StepBar.tsx` |
| Public props | `src/components/StepBar/StepBar.types.ts` |
| Logic hook | `src/components/StepBar/hooks/useStepBar.ts` |
| Local export | `src/components/StepBar/index.ts` |
| Styles entry | `src/components/StepBar/styles/index.ts` |
| Storybook | `src/stories/StepBar.stories.tsx` |
| Code Connect | `src/components/StepBar/StepBar.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Result` | `Default` | `onClickSuccessButton` | `undefined` | `undefined` | Показывается правая стрелка навигации |
| `Result` | `Positive` | `onClickSuccessButton`, `successButtonText` | callback, `"Готово"` | - | На последнем шаге показывается action-кнопка |
| `Media` | `Desktop`, `Mobile` | `className` | `w-[1000px]`, `w-[512px]` | - | Temporary mapping: у runtime нет отдельного `media` prop |
| `nameStep1` | `true/false` | `items[].label` | `string \| ReactNode` | required | Temporary mapping: runtime не поддерживает скрытие шагов через boolean |
| `<Stepslot>` | slot | `items` | `StepBarItem[]` | required | Основной источник шагов и иконок |
| active step line | visual state | `active` | `StepBarItem["id"]` | first item | Активный шаг управляется внешним состоянием |
| left/right buttons | visual state | `onChangeStep` | `(id) => void` | required | Навигация назад/вперед через хук `useStepBar` |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | задать `items`, `active`, `onChangeStep` |
| Positive (final action) | Yes | `onClickSuccessButton` и `active` на последнем шаге |
| Error step | Yes | `items[i].type = "error"` |
| Successful step | Yes | `items[i].type = "successful"` |
| Disabled step | Yes | `items[i].disabled = true` |
| Step icons | Yes | `leftIcon` / `rightIcon` на шаге |
| Long lists with horizontal scroll | Yes | передать больше шагов в `items` |

## Design matching notes

- `StepBar` — controlled-компонент: активный шаг задается через `active`, переключение приходит в `onChangeStep`.
- Левый/правый навигационные контролы встроены в компонент и работают по порядку `items`.
- Индикатор активного шага (`activeStepClasses`) вычисляется из фактической ширины/позиции кнопки шага в `useStepBar`.
- Variant `Result=Positive` в Figma соответствует состоянию `isLastStep` + `onClickSuccessButton`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Media` | через `className` ширины (`1000px`/`512px`) | В runtime API нет отдельного `media` prop | Если понадобится, вынести в отдельный layout wrapper |
| `nameStep1=false` | не скрывает шаги, используются fallback-labels | Runtime требует непустой `items` и не поддерживает boolean-тоггл пустого step-slot | При необходимости добавить явный API для empty-state |
| `Result=Positive` | `active` последнего шага + `onClickSuccessButton` | В runtime нет прямого `result` prop | Оставить как каноничный mapping через публичные props |

## Examples

### Basic

```tsx
<StepBar
  items={[
    { id: "1", label: "Шаг 1" },
    { id: "2", label: "Шаг 2" },
    { id: "3", label: "Шаг 3" },
  ]}
  active="1"
  onChangeStep={() => {}}
/>
```

### Final action

```tsx
<StepBar
  items={[
    { id: "1", label: "Шаг 1", type: "successful" },
    { id: "2", label: "Шаг 2", type: "successful" },
    { id: "3", label: "Шаг 3", type: "successful" },
  ]}
  active="3"
  onChangeStep={() => {}}
  onClickSuccessButton={() => {}}
  successButtonText="Готово"
/>
```

### With status and icons

```tsx
import { Check, CircleAlert } from "lucide-react";

<StepBar
  items={[
    { id: "1", label: "Черновик" },
    { id: "2", label: "Проверка", type: "successful", rightIcon: Check },
    { id: "3", label: "Ошибка", type: "error", leftIcon: CircleAlert },
  ]}
  active="2"
  onChangeStep={() => {}}
/>
```
