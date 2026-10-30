# ProgressPie

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: ProgressPie
package: borrom-ds-test
import: import { ProgressPie } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ProgressPie/ProgressPie.tsx
types: src/components/ProgressPie/ProgressPie.types.ts
localExport: src/components/ProgressPie/index.ts
publicExport: src/index.ts
storybook: src/stories/ProgressPie.stories.tsx
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
import { ProgressPie } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <ProgressPie size={"xs"} />;
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/ProgressPie/ProgressPie.tsx](ProgressPie.tsx) |
| Props / shared types | [src/components/ProgressPie/ProgressPie.types.ts](ProgressPie.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/ProgressPie.stories.tsx](../../stories/ProgressPie.stories.tsx) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `icon` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `progress` | `number \| undefined` | optional | См. типы и пример выше |
| `size` | `ProgressPieSize` | required (зависит от union) | См. типы и пример выше |
| `color` | `ProgressPieColors \| undefined` | optional | См. типы и пример выше |
| `showIcon` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showProgress` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Подтверждённые Figma properties для этого компонента недоступны. Mapping и `.figma.js` не создаются по имени или внешнему сходству.

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

**Blocker Code Connect:** для этого публичного компонента не подтверждена отдельная опубликованная Figma-связь. После поиска в библиотеке нельзя безопасно выдать mapping только по имени. Требуется точный опубликованный Figma component и его properties.

Для новых состояний/API, отсутствующих в сохранённом mapping, требуется отдельная сверка Figma. Публикация связок в Figma не выполнялась.
