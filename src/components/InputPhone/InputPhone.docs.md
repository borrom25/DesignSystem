# InputPhone

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: InputPhone
package: borrom-ds-test
documentedApiVersion: 0.0.72
install: npm install borrom-ds-test@latest
import: import { InputPhone } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputPhone/InputPhone.tsx
types: src/components/InputPhone/InputPhone.types.ts
localExport: src/components/InputPhone/index.ts
publicExport: src/index.ts
storybook: src/stories/InputPhone.stories.tsx
figmaComponent: InputPhone
figmaNodeId: 4602:3679
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4602-3679
codeConnect: src/components/InputPhone/InputPhone.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { InputPhone } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (<InputPhone
      size="md"






      placeholder="Пример"
      showFlagIsland={true}

    />);
}
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/InputPhone/InputPhone.tsx](InputPhone.tsx) |
| Props / shared types | [src/components/InputPhone/InputPhone.types.ts](InputPhone.types.ts) |
| Props / shared types | [src/components/Input/Input.types.ts](../Input/Input.types.ts) |
| Props / shared types | [src/types/field.ts](../../types/field.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/InputPhone.stories.tsx](../../stories/InputPhone.stories.tsx) |
| Code Connect | [src/components/InputPhone/InputPhone.figma.js](InputPhone.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `value` | `string \| undefined` | optional | См. типы и пример выше |
| `defaultValue` | `string \| undefined` | optional | См. типы и пример выше |
| `onChange` | `ChangeEventHandler<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `inputMode` | `"none" \| "text" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" \| "search" \| undefined` | optional | См. типы и пример выше |
| `showFlagIsland` | `boolean \| undefined` | optional | См. типы и пример выше |
| `country` | `import("libphonenumber-js/core").CountryCode \| undefined` | optional | См. типы и пример выше |
| `defaultCountry` | `import("libphonenumber-js/core").CountryCode \| undefined` | optional | См. типы и пример выше |
| `countries` | `readonly import("libphonenumber-js/core").CountryCode[] \| undefined` | optional | См. типы и пример выше |
| `valueFormat` | `InputPhoneValueFormat \| undefined` | optional | См. типы и пример выше |
| `onCountryChange` | `((country: Country) => void) \| undefined` | optional | См. типы и пример выше |
| `onValueChange` | `InputPhoneValueChangeHandler \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `label` | `string \| undefined` | optional | См. типы и пример выше |
| `hint` | `string \| undefined` | optional | См. типы и пример выше |
| `hintError` | `string \| undefined` | optional | См. типы и пример выше |
| `iconLeft` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `iconRight` | `LucideIcon \| undefined` | optional | См. типы и пример выше |
| `suffix` | `ReactNode` | optional | См. типы и пример выше |
| `count` | `number \| undefined` | optional | См. типы и пример выше |
| `variant` | `InputVariant \| undefined` | optional | См. типы и пример выше |
| `error` | `boolean \| undefined` | optional | См. типы и пример выше |
| `maxCount` | `number \| undefined` | optional | См. типы и пример выше |
| `inputClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `clearable` | `boolean \| undefined` | optional | См. типы и пример выше |
| `onClear` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `labelActive` | `boolean \| undefined` | optional | См. типы и пример выше |
| `ref` | `Ref<HTMLInputElement> \| undefined` | optional | См. типы и пример выше |
| `subtitle` | `string \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `textHint` | TEXT | `hint`; значения см. template |
| `Hint` | BOOLEAN | `hint / hintError`; значения см. template |
| `textError` | TEXT | `hintError`; значения см. template |
| `requiredMark` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textPlaceholder` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `textLabel` | TEXT | `label`; значения см. template |
| `textFilled` | TEXT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Label` | BOOLEAN | `label`; значения см. template |
| `slotRight` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotRight>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `State` | Default, Hover, Selected, Input text, Filled in, Filled in Hover | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Size` | Md, Sm, Xs | `size`; значения см. template |
| `Error` | Off, On | `error`; значения см. template |
| `Disable` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Filled` | Off, On | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- `error`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `value`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- `defaultValue`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: country flag belongs to the runtime phone input chrome.

Temporary mapping: runtime country selection owns the dial code and flag.
There is no slotLeft property in the current Figma component.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
