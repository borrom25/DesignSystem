# Avatar

Документация для связи Figma component `Avatar` с runtime-компонентом `Avatar`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `Avatar.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: Avatar
package: borrom-ds-test
import: import { Avatar } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Avatar/Avatar.tsx
types: src/components/Avatar/Avatar.types.ts
localExport: src/components/Avatar/index.ts
publicExport: src/index.ts
storybook: src/stories/Avatar.stories.tsx
figmaComponent: Avatar
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=21593-5299
figmaNodeId: 21593:5299
codeConnect: src/components/Avatar/Avatar.figma.js
```

## Public usage

```tsx
import { Avatar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <Avatar
      size={64}
      src="https://api.dicebear.com/7.x/avataaars/svg?seed=avatar"
      alt="User avatar"
    />
  );
}
```

## Source files

| Purpose           | Path                                    |
| ----------------- | --------------------------------------- |
| Runtime component | `src/components/Avatar/Avatar.tsx`      |
| Public props      | `src/components/Avatar/Avatar.types.ts` |
| Local export      | `src/components/Avatar/index.ts`        |
| Styles entry      | `src/components/Avatar/styles/index.ts` |
| Storybook         | `src/stories/Avatar.stories.tsx`        |
| Code Connect      | `src/components/Avatar/Avatar.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values                                                                  | Code prop       | Code values            | Default  | Notes                                                                           |
| ------------------------ | ----------------------------------------------------------------------------- | --------------- | ---------------------- | -------- | ------------------------------------------------------------------------------- |
| `Size`                   | `28`, `32`, `36`, `40`, `44`, `48`, `56`, `64`, `72`, `80`, `88`, `96`, `120` | `size`          | `number`               | required | Direct numeric mapping                                                          |
| `Content`                | `picture`                                                                     | `src`           | `string`               | required | Temporary mapping: Figma does not expose an image URL                           |
| `Content`                | `initials`                                                                    | `initials`      | `string`               | -        | Uses `Initials` text property and an empty `src`                                |
| `Content`                | `icon`                                                                        | -               | built-in fallback icon | -        | Temporary mapping: runtime has no public icon prop                              |
| `Initials`               | text                                                                          | `initials`      | `string`               | -        | Used only when `Content=initials`                                               |
| `Editing`                | boolean                                                                       | `showEditBadge` | `false`, `true`        | `false`  | Direct boolean mapping                                                          |
| `Stroke`                 | `default`                                                                     | `withBorder`    | `false`                | `false`  | No border                                                                       |
| `Stroke`                 | `stroke`                                                                      | `withBorder`    | `true`                 | `false`  | Direct boolean mapping                                                          |
| `Stroke`                 | `group`                                                                       | `withBorder`    | `true`                 | `false`  | Temporary mapping: runtime has no separate group stroke prop                    |
| `icon`                   | instance swap                                                                 | -               | -                      | -        | Runtime icon content is fixed fallback when `src` fails and `initials` is empty |

## Supported states

| State         | Supported in code | How to use                                                       |
| ------------- | ----------------- | ---------------------------------------------------------------- |
| Picture       | Yes               | `<Avatar size={64} src="..." alt="..." />`                       |
| Initials      | Yes               | `<Avatar size={64} src="" initials="PR" />`                      |
| Icon fallback | Partial           | `<Avatar size={64} src="" />`; icon is fixed to runtime fallback |
| Border        | Yes               | `<Avatar size={64} src="..." withBorder />`                      |
| Editing badge | Yes               | `<Avatar size={64} src="..." showEditBadge />`                   |
| Group stroke  | Partial           | Currently maps to `withBorder`                                   |

## Design matching notes

- Figma `Avatar` maps to the public `Avatar` export from `borrom-ds-test`.
- Runtime visual values come from `src/components/Avatar/styles` and typography tokens selected by `Avatar.utils.ts`.
- `size` is a number in the public API, so Figma size variants are converted directly to numeric JSX values.
- Figma picture variants do not expose an image URL. Code Connect uses a stable placeholder image URL so the generated snippet is runnable.
- Figma icon variants expose an `icon` instance swap, but `Avatar` currently has no public icon prop. Runtime icon content is the built-in fallback icon shown when `src` is empty or fails and `initials` is empty.
- `Stroke=group` is visually distinct in Figma, but runtime only has `withBorder`.

## Temporary mappings / assumptions

| Item                           | Current mapping                                   | Reason                                                 | Follow-up                                                                      |
| ------------------------------ | ------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `Content=picture`              | placeholder DiceBear `src`                        | Figma component does not provide an image URL property | Add a Figma text/property for image URL or replace placeholder after insertion |
| `Content=icon` and `icon` swap | empty `src`, no `initials`, runtime fallback icon | `AvatarProps` has no public icon prop                  | Add an `icon` prop or keep icon avatar as fixed fallback behavior              |
| `Stroke=group`                 | `withBorder`                                      | `AvatarProps` has no separate group style prop         | Add a group/border variant if this state must be generated exactly             |

## Examples

### Picture

```tsx
<Avatar
  size={64}
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=avatar"
  alt="User avatar"
/>
```

### Initials

```tsx
<Avatar size={64} src="" initials="PR" />
```

### With border

```tsx
<Avatar size={64} src="" initials="PR" withBorder />
```

### With edit badge

```tsx
<Avatar
  size={64}
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=avatar"
  showEditBadge
/>
```
