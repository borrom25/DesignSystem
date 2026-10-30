# Calendar

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Calendar
package: borrom-ds-test
import: import { Calendar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Calendar/Calendar.tsx
types: src/components/Calendar/Calendar.types.ts
localExport: src/components/Calendar/index.ts
publicExport: src/index.ts
storybook: src/stories/Calendar.stories.tsx
figmaComponent: Calendar
figmaNodeId: 643:5569
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=643-5569
codeConnect: src/components/Calendar/Calendar.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Calendar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Calendar
    mode="range"
    defaultValue={{
      from: new Date(2026, 1, 18),
      to: new Date(2026, 1, 24),
    }}
    displayMonth={new Date(2026, 1, 1)}
  />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Calendar/Calendar.tsx](Calendar.tsx) |
| Props / shared types | [src/components/Calendar/Calendar.types.ts](Calendar.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Calendar.stories.tsx](../../stories/Calendar.stories.tsx) |
| Code Connect | [src/components/Calendar/Calendar.figma.js](Calendar.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `mode` | `"range"` | required (зависит от union) | См. типы и пример выше |
| `value` | `DateRange \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `DateRange \| undefined` | optional | См. типы и пример выше |
| `onChange` | `((range: DateRange) => void) \| undefined` | optional | См. типы и пример выше |
| `disabled` | `DisabledDates \| undefined` | optional | См. типы и пример выше |
| `minDate` | `Date \| undefined` | optional | См. типы и пример выше |
| `maxDate` | `Date \| undefined` | optional | См. типы и пример выше |
| `displayMonth` | `Date \| undefined` | optional | См. типы и пример выше |
| `locale` | `Locale \| undefined` | optional | См. типы и пример выше |
| `numberOfMonths` | `number \| undefined` | optional | См. типы и пример выше |
| `weekStartsOn` | `WeekStartsOn \| undefined` | optional | См. типы и пример выше |
| `showSelectedDate` | `boolean \| undefined` | optional | См. типы и пример выше |
| `pickerType` | `CalendarPickerType \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `State` | Range, Month, Year, Standard | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Связки в Figma не изменялись и не публиковались.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
