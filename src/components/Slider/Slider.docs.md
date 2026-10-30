# Slider

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Slider
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Slider } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Slider/Slider.tsx
types: src/components/Slider/Slider.types.ts
localExport: src/components/Slider/index.ts
publicExport: src/index.ts
storybook: src/stories/Slider.stories.tsx
figmaComponent: null
figmaNodeId: null
figmaUrl: null
codeConnect: null
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: no confirmed mapping
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Slider } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Slider value={1} onValueChange={() => {}} />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Slider/Slider.tsx](Slider.tsx) |
| Props / shared types | [src/components/Slider/Slider.types.ts](Slider.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Slider.stories.tsx](../../stories/Slider.stories.tsx) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `number` | required (зависит от union) | См. типы и пример выше |
| `onValueChange` | `(value: number) => void` | required (зависит от union) | См. типы и пример выше |
| `min` | `number \| undefined` | optional | См. типы и пример выше |
| `max` | `number \| undefined` | optional | См. типы и пример выше |
| `step` | `number \| undefined` | optional | См. типы и пример выше |
| `showValuePopover` | `boolean \| undefined` | optional | См. типы и пример выше |
| `alwaysShowPopover` | `boolean \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `aria-label` | `string \| undefined` | optional | Defines a string value that labels the current element. |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
