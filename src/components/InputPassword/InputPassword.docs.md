# InputPassword

Документация для связи Figma-компонента `🚧 InputPassword` с runtime-компонентом `InputPassword`.

```text
src/components/InputPassword/InputPassword.docs.md
```

Парный Code Connect файл:

```text
src/components/InputPassword/InputPassword.figma.js
```

## Machine-readable summary

```yaml
component: InputPassword
package: borrom-ds-test
import: import { InputPassword } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/InputPassword/InputPassword.tsx
types: src/components/InputPassword/InputPassword.types.ts
localExport: src/components/InputPassword/index.ts
publicExport: src/index.ts
storybook: src/stories/InputPassword.stories.tsx
figmaComponent: 🚧 InputPassword
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=4607-6301
figmaNodeId: 4607:6301
codeConnect: src/components/InputPassword/InputPassword.figma.js
```

## Public usage

```tsx
import { InputPassword } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <InputPassword
      size="md"
      label="Пароль"
      placeholder="Введите пароль"
      hint="Минимум 8 символов"
      defaultValue="secret123"
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/InputPassword/InputPassword.tsx` |
| Public props | `src/components/InputPassword/InputPassword.types.ts` |
| Local export | `src/components/InputPassword/index.ts` |
| Hooks | `src/components/InputPassword/hooks/usePasswordVisibility.ts` |
| Utils | `src/components/InputPassword/utils/getToggleButtonMargin.ts` |
| Storybook | `src/stories/InputPassword.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `Error` | `error` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `Disable` | `disabled` | `boolean` | `false` | `Off -> false`, `On -> true` |
| `icon-left`, `↳ Icon-left` | `iconLeft` | `LucideIcon` | `Check` | Temporary mapping: используется `Check` |
| `textLabel` | `label` | `string` | - | Текст подписи поля |
| `requiredMark` | `required` | `boolean` | `false` | Required mark через API `Input` |
| `Hint` + `textHint` / `textError` | `hint` / `hintError` | `string` | - | При `Error=On` используется `hintError=textError` |
| `Placeholder` + `textPlaceholder` | `placeholder` | `string` | - | При `Placeholder=On` отображается placeholder |
| `Filled` + `textFilled` | `defaultValue` | `string` | - | Маппится в начальное значение пароля |
| `Mask` | `showPasswordByDefault` | `boolean` | `false` | `Mask=On -> false`, `Mask=Off + value -> true` |
| `State=Selected` | `autoFocus` | `boolean` | `false` | Temporary mapping для focus-состояния |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Default | Yes | без специальных props |
| Hover | Runtime CSS | отдельный prop не нужен |
| Selected | Partial | `autoFocus` для стартового фокуса |
| Input text | Partial | `defaultValue` + `showPasswordByDefault` |
| Filled in | Partial | `defaultValue` + `showPasswordByDefault` |
| Filled in-Hover | Partial | `defaultValue` + runtime CSS |
| Mask | Yes | `showPasswordByDefault={false}` |
| Disabled | Yes | `disabled` |
| Error | Yes | `error` + `hintError` |

## Design matching notes

- `InputPassword` построен на `Input` и всегда рендерит правый toggle-контрол видимости пароля.
- В текущем API нет отдельного персистентного `state`-prop: визуальные состояния из Figma частично маппятся через `autoFocus`, `defaultValue`, `showPasswordByDefault`, `disabled`, `error`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `↳ Icon-left` instance swap | `iconLeft={Check}` | Runtime принимает `LucideIcon`, Figma swap не маппится в импорт автоматически | При появлении стабильного icon-mapping заменить на точный импорт |
| `State=Selected` | `autoFocus` | Нет персистентного selected-state prop | Управлять фокусом на уровне интеграции |
| `State=Input text/Filled in` | `showPasswordByDefault` + `defaultValue` | В Figma состояние текста/маски отделено от runtime toggle-кнопки | Уточнить с фронтами единое поведение маски и раскрытого текста |
