# TabsOverflow

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: TabsOverflow
package: borrom-ds-test
import: import { TabsOverflow } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/TabsOverflow/TabsOverflow.tsx
types: src/components/TabsOverflow/TabsOverflow.types.ts
localExport: src/components/TabsOverflow/index.ts
publicExport: src/index.ts
storybook: src/stories/TabsOverflow.stories.tsx
figmaComponent: tabsOverflow
figmaNodeId: 19497:1623
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=19497-1623
codeConnect: src/components/TabsOverflow/TabsOverflow.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { TabsOverflow } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<div className="w-[245px]">
      <TabsOverflow
        size="xs"
        items={[
  { value: "tab-1", label: "Tab" },
  { value: "tab-2", label: "Tab" },
  { value: "tab-3", label: "Tab" }
]}
        value="tab-1"
        onValueChange={() => {}}
        moreLabel="Ещё"
      />
    </div>);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/TabsOverflow/TabsOverflow.tsx](TabsOverflow.tsx) |
| Props / shared types | [src/components/TabsOverflow/TabsOverflow.types.ts](TabsOverflow.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/TabsOverflow.stories.tsx](../../stories/TabsOverflow.stories.tsx) |
| Code Connect | [src/components/TabsOverflow/TabsOverflow.figma.js](TabsOverflow.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `items` | `TabsOverflowItem<T>[]` | required (зависит от union) | См. типы и пример выше |
| `value` | `T \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `T \| undefined` | optional | См. типы и пример выше |
| `onValueChange` | `((value: T) => void) \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `disabled` | `boolean \| undefined` | optional | См. типы и пример выше |
| `sideMenu` | `boolean \| undefined` | optional | См. типы и пример выше |
| `moreLabel` | `string \| undefined` | optional | См. типы и пример выше |
| `indicatorOffset` | `number \| undefined` | optional | См. типы и пример выше |
| `itemWrapper` | `TabsOverflowItemWrapper<T> \| undefined` | optional | См. типы и пример выше |
| `placeholder` | `ReactNode` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLDivElement> \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<Slot>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `More` | BOOLEAN | `moreLabel`; значения см. template |
| `Size` | Xs, Sm, Md | `size`; значения см. template |

## Supported states

- `disabled`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma boolean "Ещё" has no direct runtime prop.
We emulate this by changing items count so overflow appears/disappears.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Публикация текущего template ещё не подтверждена.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
