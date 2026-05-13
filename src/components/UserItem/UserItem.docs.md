# UserItem

Документация для связи Figma-компонента `User Item` с runtime-компонентом `UserItem`.

```text
src/components/UserItem/UserItem.docs.md
```

Парный Code Connect файл:

```text
src/components/UserItem/UserItem.figma.js
```

## Machine-readable summary

```yaml
component: UserItem
package: borrom-ds-test
import: import { UserItem, Label } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/UserItem/UserItem.tsx
types: src/components/UserItem/UserItem.types.ts
localExport: src/components/UserItem/index.ts
publicExport: src/index.ts
storybook: src/stories/UserItem.stories.tsx
figmaComponent: User Item
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1352-28686
figmaNodeId: 1352:28686
codeConnect: src/components/UserItem/UserItem.figma.js
```

## Public usage

```tsx
import { UserItem, Label } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <UserItem size="sm" avatarPosition="left">
      <UserItem.Avatar
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
        alt="User"
        withBorder
      />
      <UserItem.Content>
        <UserItem.Title>Иванов И.И.</UserItem.Title>
        <UserItem.Subtitle>caption</UserItem.Subtitle>
        <UserItem.Labels>
          <Label>label 1</Label>
          <Label>label 2</Label>
        </UserItem.Labels>
      </UserItem.Content>
    </UserItem>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime root | `src/components/UserItem/UserItem.tsx` |
| Public props | `src/components/UserItem/UserItem.types.ts` |
| Avatar wrapper | `src/components/UserItem/ui/Avatar.tsx` |
| Text blocks | `src/components/UserItem/ui/Title.tsx`, `src/components/UserItem/ui/Subtitle.tsx` |
| Labels block | `src/components/UserItem/ui/Labels.tsx` |
| Storybook | `src/stories/UserItem.stories.tsx` |

## Figma to props mapping

| Figma property / variant | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Size` | `size` | `xs`, `sm`, `md` | `md` | `Xs -> xs`, `Sm -> sm`, `Md -> md` |
| `positionAvatar` | `avatarPosition` | `left`, `top` | `left` | `Left -> left`, `Top -> top`, `Center -> top` (temporary mapping) |
| `Title` | `UserItem.Title` children | `string` | - | Текст заголовка пользователя |
| `Avatar` | `UserItem.Avatar` | boolean presence | on | При `Avatar=On` рендерится `UserItem.Avatar` |
| `Caption` + `<slotCaptio>` | `UserItem.Subtitle` | boolean + text | off | При `Caption=On` рендерится `Subtitle` |
| `label` + `<slotLabel>` | `UserItem.Labels` | boolean + nodes | off | При `label=On` рендерятся `Label`-элементы |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Layout avatar left/top | Yes | `avatarPosition="left" | "top"` |
| Size presets | Yes | `size="xs" | "sm" | "md"` |
| Optional avatar | Yes | подключать/не подключать `UserItem.Avatar` |
| Optional caption | Yes | подключать/не подключать `UserItem.Subtitle` |
| Optional labels | Yes | подключать/не подключать `UserItem.Labels` |

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `positionAvatar=Center` | `avatarPosition="top"` | В runtime API есть только `left` и `top` | Если нужен центр, расширить API `UserItemAvatarPosition` |
| `<slotCaptio>` / `<slotLabel>` | demo-текст и demo-Label элементы | Slot-поля не дают прямого runtime snippet | Подменять контент на проектные данные при использовании |
