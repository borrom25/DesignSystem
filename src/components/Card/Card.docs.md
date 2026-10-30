# Card

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Card
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Card } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Card/Card.tsx
types: src/components/Card/Card.types.ts
localExport: src/components/Card/index.ts
publicExport: src/index.ts
storybook: src/stories/Card.stories.tsx
figmaComponent: Card
figmaNodeId: 4436:8329
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4436-8329
codeConnect: src/components/Card/Card.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Card } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Card
      size="xs"

    >
      <div>Content</div>
    </Card>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Card/Card.tsx](Card.tsx) |
| Props / shared types | [src/components/Card/Card.types.ts](Card.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Card.stories.tsx](../../stories/Card.stories.tsx) |
| Code Connect | [src/components/Card/Card.figma.js](Card.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `variant` | `CardVariant \| undefined` | optional | См. типы и пример выше |
| `padding` | `VerticalPaddingStyle \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `titleProps` | `CardTextProps \| undefined` | optional | См. типы и пример выше |
| `subtitleProps` | `CardTextProps \| undefined` | optional | См. типы и пример выше |
| `actionSlot` | `ReactNode` | optional | См. типы и пример выше |
| `hoverable` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotBody>` | SLOT | `children`; значения см. template |
| `Type` | Basic, Secondary | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping:
Figma exposes Type=Secondary, but the runtime Card API only has size and
standard div attributes. Use className for the secondary background until a
dedicated public variant prop exists.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
