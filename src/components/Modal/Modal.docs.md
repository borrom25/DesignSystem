# Modal

Документация для связи Figma component set `Modal` с runtime-компонентом `Modal`.

`Modal` - базовый overlay-компонент дизайн-системы. Он рендерится через portal в `document.body`, управляется пропсами `open` / `onOpenChange`, поддерживает варианты `modal`, `dialog`, `iceBox`, адаптируется под mobile через `useScreenSize` и закрывается по overlay / Escape / close button.

## Machine-readable summary

```yaml
component: Modal
package: borrom-ds-test
import: import { Modal, ModalType } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Modal/Modal.tsx
types: src/components/Modal/Modal.types.ts
localExport: src/components/Modal/index.ts
publicExport: src/index.ts
storybook: src/stories/Modal.stories.tsx
figmaComponent: Modal
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1941-2233
figmaNodeId: 1941:2233
codeConnect: src/components/Modal/Modal.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { Button, Modal, ModalType } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        type={ModalType.modal}
        title="Title"
        subtitle="Subtitle"
        bottomSlot={<Button onClick={() => setOpen(false)}>Сохранить</Button>}
      >
        Контент модального окна
      </Modal>
    </>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/Modal/Modal.tsx` |
| Public props | `src/components/Modal/Modal.types.ts` |
| Content / header / footer parts | `src/components/Modal/ui/*` |
| Visibility hook | `src/components/Modal/hooks/useModalVisibility.ts` |
| Escape / close hook | `src/components/Modal/hooks/useModal.ts` |
| Modal store / provider | `src/components/Modal/model/*` |
| Local export | `src/components/Modal/index.ts` |
| Styles entry | `src/components/Modal/styles/index.ts` |
| Size tokens | `src/tokens/Modal.css` |
| Storybook | `src/stories/Modal.stories.tsx` |
| Code Connect | `src/components/Modal/Modal.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Type` | `Modal` | `type` | `ModalType.modal` | `ModalType.modal` | Modal with header, body and footer slots |
| `Type` | `Dialogue` | `type` | `ModalType.dialog` | `ModalType.modal` | Dialog has header/footer but no body render branch in current runtime |
| `Type` | `Icebox` | `type` | `ModalType.iceBox` | `ModalType.modal` | Side panel-like modal; action bar is rendered via `actionSlot` |
| `Height` | `Content size` | `fullScreen` | `false` | `false` | Content height follows children up to max viewport height |
| `Height` | `Full height` | `fullScreen` | `true` | `false` | For `iceBox`, runtime is already full height by type |
| `Media` | `Desktop` | runtime responsive behavior | - | - | Desktop layout comes from `useScreenSize` |
| `Media` | `Mobile` | runtime responsive behavior | - | - | Mobile bottom-sheet layout comes from `useScreenSize`, not a public prop |
| `headModal` | boolean | `title`, `subtitle`, `actionSlot` | `ReactNode` | - | Header exists when at least one of these props is passed |
| `actionBar` | boolean | `bottomSlot` / `actionSlot` | `ReactNode` | - | For `modal` / `dialog` use `bottomSlot`; for `iceBox` use `actionSlot` |
| `<slotBody>` | slot | `children` | `ReactNode` | - | Rendered only for `type=modal` and `type=iceBox` |
| `<slotActionBar>` | slot | `bottomSlot` / `actionSlot` | `ReactNode` | - | Maps to footer/action area depending on modal type |
| `<slotHead>` | slot | no exact head slot | - | - | Runtime has structured header props, not arbitrary header slot |
| Overlay instance | nested component | internal `ModalOverlay` | - | always rendered | Overlay is owned by runtime and closes when `closeOnOverlayClick=true` |
| Close icon | nested icon | `showCloseButton` | `boolean` | `true` | Desktop close button is rendered by `ModalContent`; mobile close action is in `ModalHeader` |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Controlled open state | Yes | `open`, `onOpenChange` |
| Modal variant | Yes | `type={ModalType.modal}` |
| Dialog variant | Yes | `type={ModalType.dialog}` |
| Icebox variant | Yes | `type={ModalType.iceBox}` |
| Content height | Yes | omit `fullScreen` |
| Full height | Yes | `fullScreen` |
| Responsive mobile layout | Yes | Runtime uses `useScreenSize` |
| Header title/subtitle | Yes | `title`, `subtitle` |
| Header action | Yes | `actionSlot` |
| Body content | Yes | `children` |
| Footer action bar | Yes | `bottomSlot` |
| Close on overlay click | Yes | `closeOnOverlayClick` |
| Close on Escape | Yes | `closeOnEscape` |
| Hide desktop close button | Yes | `showCloseButton={false}` |
| Side menu / drawer usage | Yes | `sideMenu`; used by `Sidebar`, not represented by this Figma set |

## Runtime behavior

- `Modal` returns `null` until `open` becomes true and uses `useModalVisibility(open, 500)` for open/close animation state.
- The modal content is rendered with `createPortal(..., document.body)`.
- `ModalOverlay` is always rendered while the modal is mounted.
- `ModalContent` owns the desktop close button and applies size, full-screen and animation classes.
- `ModalHeader` renders only when `title`, `subtitle` or `actionSlot` exists.
- `ModalFooter` renders only when `bottomSlot` exists.
- `children` is rendered for `type=modal` and `type=iceBox`; `type=dialog` intentionally skips the body branch in the current implementation.
- `iceBox` ignores normal centered width behavior and uses its own full-height side panel sizing.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma `Type=Dialogue` spelling | `ModalType.dialog` | Runtime enum is named `dialog`, Figma variant is `Dialogue` | Keep spelling difference documented |
| Figma `Media` | metadata only | Runtime media behavior is responsive, not chosen by prop | Test in Storybook/browser when changing modal breakpoints |
| `<slotHead>` | documented only | Runtime exposes `title`, `subtitle`, `actionSlot`, but no arbitrary header slot | Add `headerSlot` only if custom header composition becomes a product need |
| `headModal=Off` | omit `title` / `subtitle` / `actionSlot` | `ModalHeader` returns `null` when it has no content | Use structured header props instead of mounting header manually |
| `actionBar=On` for `iceBox` | `actionSlot` | Runtime renders Icebox actions through `actionSlot`, not `bottomSlot` | Keep this distinction in generated snippets |
| Figma button/text child instances | slot or fallback snippets | Nested components may have their own Code Connect, but Modal API only needs ReactNode slots | Replace fallback content with product actions/body |

## Examples

### Modal

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  type={ModalType.modal}
  title="Title"
  subtitle="Subtitle"
  bottomSlot={<Button onClick={() => setOpen(false)}>Сохранить</Button>}
>
  Контент модального окна
</Modal>
```

### Full Height Modal

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  type={ModalType.modal}
  fullScreen
  title="Title"
>
  Контент модального окна
</Modal>
```

### Dialog

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  type={ModalType.dialog}
  title="Подтвердить действие"
  subtitle="Изменения применятся после подтверждения."
  bottomSlot={<Button onClick={() => setOpen(false)}>Подтвердить</Button>}
/>
```

### Icebox

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  type={ModalType.iceBox}
  title="Настройки"
  actionSlot={<Button onClick={() => setOpen(false)}>Применить</Button>}
>
  Контент панели
</Modal>
```
