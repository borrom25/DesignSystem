# Carousel

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Carousel
package: borrom-ds-test
import: import { Carousel } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Carousel/Carousel.tsx
types: src/components/Carousel/Carousel.types.ts
localExport: src/components/Carousel/index.ts
publicExport: src/index.ts
storybook: src/stories/Carousel.stories.tsx
figmaComponent: Carousel
figmaNodeId: 6649:1327
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=6649-1327
codeConnect: src/components/Carousel/Carousel.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Carousel } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Carousel orientation="horizontal" showIndicators={false}>
      <Carousel.Track>
        <Carousel.Item><div>Слайд 1</div></Carousel.Item>
        <Carousel.Item><div>Слайд 2</div></Carousel.Item>
      </Carousel.Track>


    </Carousel>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Carousel/Carousel.tsx](Carousel.tsx) |
| Props / shared types | [src/components/Carousel/Carousel.types.ts](Carousel.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Carousel.stories.tsx](../../stories/Carousel.stories.tsx) |
| Code Connect | [src/components/Carousel/Carousel.figma.js](Carousel.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `defaultValue` | `number \| undefined` | optional | См. типы и пример выше |
| `orientation` | `CarouselOrientation \| undefined` | optional | См. типы и пример выше |
| `children` | `import("react").ReactNode` | required (зависит от union) | См. типы и пример выше |
| `width` | `number \| undefined` | optional | См. типы и пример выше |
| `height` | `number \| undefined` | optional | См. типы и пример выше |
| `autoSwipeDuration` | `number \| undefined` | optional | См. типы и пример выше |
| `showIndicators` | `boolean \| undefined` | optional | См. типы и пример выше |
| `zoomEnabled` | `boolean \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotContent>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Pagintaion` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `controlContainer` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Deirection` | Horizontal, Vertical | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Controls Position` | Outside | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: freeform slot content is represented by sample items.
Controls Position=Outside is owned by the runtime layout.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
