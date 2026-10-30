# Modal

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: Modal
package: borrom-ds-test
packageVersion: 0.0.72
import: import { Modal } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/Modal/Modal.tsx
types: src/components/Modal/Modal.types.ts
localExport: src/components/Modal/index.ts
publicExport: src/index.ts
storybook: src/stories/Modal.stories.tsx
figmaComponent: Modal
figmaNodeId: 1941:2233
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1941-2233
codeConnect: src/components/Modal/Modal.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { useState } from "react";
import { Button, Modal, ModalType } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

function ModalExample() {
      const [isModalOpen, setModalOpen] = useState(true);
      return (
    <Modal
      open={isModalOpen}
      onOpenChange={setModalOpen}
      type={ModalType.modal}




    >
      <div>Контент модального окна</div>
    </Modal>
      );
    }
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/Modal/Modal.tsx](Modal.tsx) |
| Props / shared types | [src/components/Modal/Modal.types.ts](Modal.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/Modal.stories.tsx](../../stories/Modal.stories.tsx) |
| Code Connect | [src/components/Modal/Modal.figma.js](Modal.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `type` | `ModalType \| undefined` | optional | См. типы и пример выше |
| `size` | `Size \| undefined` | optional | См. типы и пример выше |
| `fullScreen` | `boolean \| undefined` | optional | См. типы и пример выше |
| `open` | `boolean` | required (зависит от union) | См. типы и пример выше |
| `onOpenChange` | `((open: boolean) => void) \| undefined` | optional | См. типы и пример выше |
| `title` | `ReactNode` | optional | См. типы и пример выше |
| `subtitle` | `ReactNode` | optional | См. типы и пример выше |
| `actionSlot` | `ReactNode` | optional | См. типы и пример выше |
| `children` | `ReactNode` | optional | См. типы и пример выше |
| `bottomSlot` | `ReactNode` | optional | См. типы и пример выше |
| `closeOnOverlayClick` | `boolean \| undefined` | optional | См. типы и пример выше |
| `closeOnEscape` | `boolean \| undefined` | optional | См. типы и пример выше |
| `showCloseButton` | `boolean \| undefined` | optional | См. типы и пример выше |
| `animationClassName` | `string \| undefined` | optional | См. типы и пример выше |
| `sideMenu` | `boolean \| undefined` | optional | См. типы и пример выше |
| `withBodyPadding` | `boolean \| undefined` | optional | См. типы и пример выше |
| `headBottomSlot` | `ReactNode` | optional | См. типы и пример выше |
| `slotHead` | `ReactNode` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotBody>` | SLOT | `children`; значения см. template |
| `actionBar` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotActionbar>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `slotHead` | BOOLEAN | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotHead>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Type` | Modal, Dialogue, Icebox | `type`; значения см. template |

## Supported states

- `open`: см. тип в Public API; управляемые значения требуют соответствующего обработчика из API.
- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping: Height is no longer a Figma variant.

Temporary mapping: Modal runtime has structured header props
(`title`, `subtitle`, `actionSlot`), not an arbitrary header slot.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Code Connect опубликован и прочитан обратно для 1 Figma node; подробности в docs/figma-publication-results.json.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
