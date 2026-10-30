# AccountMenu

Актуальный публичный компонент пакета `borrom-ds-test`. API сверено с GitLab `c277eef5`; документация предназначена для ссылки из Figma и использования библиотеки.

## Machine-readable summary

```yaml
component: AccountMenu
package: borrom-ds-test
import: import { AccountMenu } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/AccountMenu/AccountMenu.tsx
types: src/components/AccountMenu/AccountMenu.types.ts
localExport: src/components/AccountMenu/index.ts
publicExport: src/index.ts
storybook: src/stories/AccountMenu.stories.tsx
figmaComponent: menuAccount
figmaNodeId: 1998:5763
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1998-5763
codeConnect: src/components/AccountMenu/AccountMenu.figma.js
apiSource: GitLab c277eef53c8f0b655064d3c67855f2df70ddfccd
validation: TypeScript public API and synthetic Code Connect scenarios
liveFigmaMetadata: verified 2026-10-30
```

## Public usage

Пример использует публичные импорты. Для темы, языка, модальных окон и уведомлений оберните приложение в `UIKitProvider`.

```tsx
import { useState } from "react";
import { AccountMenu, Button } from "borrom-ds-test";
import { CircleQuestionMark, CircleUserRound, Settings } from "lucide-react";
import "borrom-ds-test/styles.css";

function AccountMenuExample() {
      const [language, setLanguage] = useState("ru");
      return (
    <AccountMenu
      isOpen
      src="https://i.pravatar.cc/160?img=68"
      fullName="Name User"
      role="Caption Caption Caption Caption Caption"
      languages={[
        { value: "ru", label: "Ru" },
        { value: "en", label: "En" },
        { value: "fr", label: "FR" },
        { value: "ch", label: "CH" },
      ]}
      language={language}
      onChangeLanguage={(nextLanguage) => {
        setLanguage(nextLanguage);
      }}
      showTheme
      actions={[
        { iconLeft: CircleUserRound, title: "Сменить роль" },
        { iconLeft: Settings, title: "Настройки" },
        { iconLeft: CircleQuestionMark, title: "Поддержка" },
      ]}
      logoutFn={() => {
        console.info("Выход из аккаунта: подключите обработчик приложения");
      }}
      trigger={<Button>Аккаунт</Button>}
    />
      );
    }
```

## Source files

| Назначение | Путь |
| --- | --- |
| Runtime | [src/components/AccountMenu/AccountMenu.tsx](AccountMenu.tsx) |
| Props / shared types | [src/components/AccountMenu/AccountMenu.types.ts](AccountMenu.types.ts) |
| Public export | [src/index.ts](../../index.ts) |
| Storybook | [src/stories/AccountMenu.stories.tsx](../../stories/AccountMenu.stories.tsx) |
| Code Connect | [src/components/AccountMenu/AccountMenu.figma.js](AccountMenu.figma.js) |

## Public API

Свойства ниже получены из текущих TypeScript declarations. Наследуемые HTML/React props смотрите в исходных типах; взаимоисключающие комбинации определяются union-типом, а не этой сводной таблицей. Значения по умолчанию определены в runtime и показаны в Storybook/плейграунде.

| Prop | Тип | Обязательность в объявлении | Описание |
| --- | --- | --- | --- |
| `actionSlot` | `ReactNode` | optional | См. типы и пример выше |
| `switchersSlot` | `ReactNode` | optional | См. типы и пример выше |
| `avatarProps` | `Omit<AvatarProps, "size" \| "src"> \| undefined` | optional | См. типы и пример выше |
| `languages` | `SegmentedOption<T>[] \| undefined` | optional | См. типы и пример выше |
| `language` | `T \| undefined` | optional | См. типы и пример выше |
| `onChangeLanguage` | `((value: T) => void) \| undefined` | optional | См. типы и пример выше |
| `themes` | `SegmentedOption<string>[] \| undefined` | optional | См. типы и пример выше |
| `showTheme` | `boolean \| undefined` | optional | См. типы и пример выше |
| `src` | `string \| null \| undefined` | optional | См. типы и пример выше |
| `fullName` | `string` | required (зависит от union) | См. типы и пример выше |
| `role` | `string \| undefined` | optional | См. типы и пример выше |
| `actions` | `ListItemProps[] \| undefined` | optional | См. типы и пример выше |
| `logoutFn` | `(() => void) \| undefined` | optional | См. типы и пример выше |
| `accountMenuProps` | `Omit<AccountMenuProps<string>, "trigger"> \| undefined` | optional | См. типы и пример выше |
| `trigger` | `ReactNode` | optional | См. типы и пример выше |
| `isOpen` | `boolean \| undefined` | optional | См. типы и пример выше |
| `setIsOpen` | `Dispatch<SetStateAction<boolean>> \| undefined` | optional | См. типы и пример выше |

## Figma to props mapping

Снимок текущих properties прочитан через Figma MCP 30.10.2026. Точные enum-преобразования, условные props и композиция находятся в `.figma.js`; пример выше взят из этого template. Псевдосостояния не становятся props автоматически.

| Figma property | Тип / значения | Runtime API / ограничение |
| --- | --- | --- |
| `<slotContent>` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `<slotContent>2` | SLOT | Композиция / нет прямого prop; см. template и Temporary mappings |
| `Media` | Desktop, Mobile | Композиция / нет прямого prop; см. template и Temporary mappings |

## Supported states

- Hover/focus/pressed проверяются в runtime и Storybook; не добавляйте несуществующие props для имитации CSS-состояний.

## Design matching notes

Визуальные значения берутся из токенов и локальных style helpers актуальной версии GitLab. Существующие Figma URL и node ID сохранены; визуальное совпадение с изменившейся библиотекой Figma автоматически не подразумевается.

## Temporary mappings / assumptions

Temporary mapping:
Figma exposes menu rows through <slotContent>, while AccountMenu runtime owns
functional rows through actions/logoutFn. Prefer data-driven actions so the
generated snippet keeps real click handlers and menu behavior.

Properties сверены с текущим снимком Figma MCP; snippets проверяются командой `yarn figma:check`. Link на документацию прочитан обратно и подтверждён для 1 Figma node. Публикация исполняемого template не подтверждена; ограничение MCP описано в docs/figma-publication.md.

Для неподдерживаемых Figma states и slots ограничения явно указаны в Temporary mapping. Статус публикации проверяется отдельно от наличия файлов.
