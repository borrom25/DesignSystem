# Switcher

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Switcher
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { Switcher } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Switcher/Switcher.tsx
types: src/components/Switcher/Switcher.types.ts
localExport: src/components/Switcher/index.ts
publicExport: src/index.ts
storybook: src/stories/Switcher.stories.tsx
figmaComponent: Switch
figmaNodeId: 1425:3616
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1425-3616
codeConnect: src/components/Switcher/Switcher.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { Switcher } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<Switcher
      size="xs"
      type="default"
      checked={false}

    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Switcher/Switcher.tsx](Switcher.tsx) |
| Props / shared types | [src/components/Switcher/Switcher.types.ts](Switcher.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Switcher.stories.tsx](../../stories/Switcher.stories.tsx) |
| Code Connect | [src/components/Switcher/Switcher.figma.js](Switcher.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `type` | `SwitcherType \| undefined` | optional | См. типы и пример выше |
| `value` | `T \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `T \| undefined` | optional | См. типы и пример выше |
| `onClick` | `((e: ChangeEvent<HTMLInputElement> \| MouseEvent) => void) \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textTitle` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Title` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Disable, Selected | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Xs, Sm, Md | `size`; значения см. template |
| `Checked` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Indefinite` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Figma keeps both Disable and State=Disable.
Runtime has one disabled prop, so we merge both into a single boolean.

Temporary mapping: Figma Title/textTitle are layout-level label controls.
Switcher API has no label/text prop, so snippet outputs Switcher only.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
