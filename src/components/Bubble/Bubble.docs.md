# Bubble

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Bubble
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Bubble } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Bubble/Bubble.tsx
types: src/components/Bubble/Bubble.types.ts
localExport: src/components/Bubble/index.ts
publicExport: src/index.ts
storybook: src/stories/Bubble.stories.tsx
figmaComponent: Bubble
figmaNodeId: 4096:23125
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=4096-23125
codeConnect: src/components/Bubble/Bubble.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Bubble } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Bubble side="incoming"><Bubble.Text>Пример</Bubble.Text></Bubble>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Bubble/Bubble.tsx](Bubble.tsx) |
| Props / shared types | [src/components/Bubble/Bubble.types.ts](Bubble.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Bubble.stories.tsx](../../stories/Bubble.stories.tsx) |
| Code Connect | [src/components/Bubble/Bubble.figma.js](Bubble.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `side` | `BubbleSide \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `State` | Left, Right | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Messages, Img, Messages+File, Messages+Img, Messages+rowImg, File | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma image fills are not application media URLs.
Supply real imageUrls for image variants; empty array avoids invented URLs.
Editable text layers have no root TEXT properties; the observed layer names
are used. Runtime manages spacing and file/image composition.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
