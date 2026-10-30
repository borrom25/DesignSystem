# ProgressPie

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: ProgressPie
package: borrom-ds-test
packageVersion: 0.0.72
import: import { ProgressPie } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/ProgressPie/ProgressPie.tsx
types: src/components/ProgressPie/ProgressPie.types.ts
localExport: src/components/ProgressPie/index.ts
publicExport: src/index.ts
storybook: src/stories/ProgressPie.stories.tsx
figmaComponent: ProgressPie
figmaNodeId: 2824:14826
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=2824-14826
codeConnect: src/components/ProgressPie/ProgressPie.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { ProgressPie } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<ProgressPie size="lg" progress={100} showIcon={false} showProgress={false} />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/ProgressPie/ProgressPie.tsx](ProgressPie.tsx) |
| Props / shared types | [src/components/ProgressPie/ProgressPie.types.ts](ProgressPie.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/ProgressPie.stories.tsx](../../stories/ProgressPie.stories.tsx) |
| Code Connect | [src/components/ProgressPie/ProgressPie.figma.js](ProgressPie.figma.js) |

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

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `Icon` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `↳ Icon` | INSTANCE_SWAP | Композиция / нет прямого prop; см. template и Temporary mappings |
| `%` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Progress` | 100%, 75%, 50%, 0% | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Lg, Md, Sm, Xs | `size`; значения см. template |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: runtime icon is a LucideIcon constructor, not rendered JSX.
The Figma icon swap is not forwarded; the runtime's default ChartPie is used.
To use another icon, supply the corresponding public lucide-react constructor.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
