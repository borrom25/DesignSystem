# AccountMenu

Документация для связи Figma component set `menuAccount` с runtime-компонентом `AccountMenu`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `AccountMenu.figma.js`, если нужен Code Connect в Dev Mode.

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
figmaUrl: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1998-5763
figmaNodeId: 1998:5763
codeConnect: src/components/AccountMenu/AccountMenu.figma.js
```

## Public usage

```tsx
import { useState } from "react";
import { CircleQuestionMark, CircleUserRound, Settings } from "lucide-react";
import { AccountMenu, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

const languages = [
  { value: "ru", label: "Ru" },
  { value: "en", label: "En" },
  { value: "fr", label: "FR" },
  { value: "ch", label: "CH" },
];

export function Example() {
  const [language, setLanguage] = useState("ru");

  return (
    <AccountMenu
      src="https://i.pravatar.cc/160?img=68"
      fullName="Name User"
      role="Caption Caption Caption Caption Caption"
      languages={languages}
      language={language}
      onChangeLanguage={setLanguage}
      showTheme
      actions={[
        { iconLeft: CircleUserRound, title: "Сменить роль" },
        { iconLeft: Settings, title: "Настройки" },
        { iconLeft: CircleQuestionMark, title: "Поддержка" },
      ]}
      logoutFn={() => {
        console.log("logout");
      }}
      trigger={<Button>Открыть меню аккаунта</Button>}
    />
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/AccountMenu/AccountMenu.tsx` |
| Public props | `src/components/AccountMenu/AccountMenu.types.ts` |
| Content UI | `src/components/AccountMenu/ui/AccountMenuContent.tsx` |
| Local export | `src/components/AccountMenu/index.ts` |
| Styles entry | `src/components/AccountMenu/styles/index.ts` |
| Storybook | `src/stories/AccountMenu.stories.tsx` |
| Code Connect | `src/components/AccountMenu/AccountMenu.figma.js` |

## Figma to props mapping

| Figma property / layer | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- |
| `Props` | metadata only | `1` | `1` | Единственный вариант component set; runtime не принимает `props` |
| User avatar | `src` | `string` | required | Runtime передает картинку в `Avatar size={80}` |
| User title | `fullName` | `string` | required | В Code Connect demo: `Name User` |
| User captions | `role` | `string` | - | Figma показывает caption-строку; runtime хранит ее одним `role` |
| Language segmented | `languages`, `language`, `onChangeLanguage` | `SegmentedOption[]`, `string`, callback | - | Runtime рендерит `Segmented shape="round"` только если есть все три значения |
| Theme segmented | `showTheme` | `boolean` | `false` | Runtime сам берет `theme`/`setTheme` из `useTheme` и показывает sun/moon |
| `<slotContent>` / ListItem rows | `actions` | `ListItemProps[]` | `[]` | Основные строки меню лучше задавать data-driven через `actions`, а не ручной версткой slot |
| Logout row | `logoutFn` | `() => void` | - | Если задан, runtime добавляет danger `ListItem` с `LogOut` и `ChevronRight` |
| Trigger | `trigger` | `ReactNode` | - | На desktop открывает `Popover`, на mobile открывает `Modal` |
| Open state | `isOpen`, `setIsOpen` | `boolean`, setter | uncontrolled | Можно контролировать извне, иначе компонент управляет состоянием сам |

## Supported behavior

| Behavior | Supported in code | How to use |
| --- | --- | --- |
| Desktop popover | Yes | `<AccountMenu trigger={...} />` |
| Mobile modal | Yes | Runtime переключается через `useScreenSize` |
| User header | Yes | `src`, `fullName`, `role` |
| Language switcher | Yes | `languages`, `language`, `onChangeLanguage` |
| Theme switcher | Yes | `showTheme` |
| Action rows | Yes | `actions={[{ iconLeft, title, onClick }]}` |
| Custom switcher content | Yes | `switchersSlot` |
| Custom actions content | Yes | `actionSlot` |
| Logout row | Yes | `logoutFn` |
| Controlled open state | Yes | `isOpen`, `setIsOpen` |

## Runtime behavior

- `AccountMenu` является overlay-компонентом: на desktop использует `Popover`, на mobile - `Modal`.
- `trigger` клонируется и получает обработчик открытия меню.
- Контент вынесен в `AccountMenuContent` и строится из `Avatar`, `Segmented` и `ListItem`.
- `actions` должны быть данными для `ListItem`, а не готовой разметкой. Для полностью кастомного блока есть `actionSlot`.
- `showTheme` не требует внешних options: компонент сам собирает переключатель `light` / `dark` из `useTheme`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| Figma name `menuAccount` | `AccountMenu` | В коде публичный компонент называется `AccountMenu`; отдельного `Account` нет | Использовать `AccountMenu` во всех imports |
| `Props=1` | metadata only | В Figma есть единственный variant, который не соответствует runtime prop | Оставить как служебный variant |
| `<slotContent>` | `actions` + `logoutFn` | Runtime уже умеет строить функциональные строки меню из данных | Использовать `actionSlot` только если нужен кастомный JSX |
| User text from nested `User Item` | demo values | Figma не вынесла `fullName`/`role` как top-level properties | Добавить top-level text properties в Figma, если нужны точные значения из инстанса |
| Nested `Line` | runtime layout | Runtime не использует отдельный public `Line` prop для меню | Не маппить как отдельный consumer API |

## Examples

### Open By Button

```tsx
<AccountMenu
  src="https://i.pravatar.cc/160?img=68"
  fullName="Name User"
  role="Product Designer"
  trigger={<Button>Аккаунт</Button>}
/>
```

### With Actions

```tsx
import { CircleQuestionMark, CircleUserRound, Settings } from "lucide-react";

<AccountMenu
  src="https://i.pravatar.cc/160?img=68"
  fullName="Name User"
  actions={[
    { iconLeft: CircleUserRound, title: "Сменить роль" },
    { iconLeft: Settings, title: "Настройки" },
    { iconLeft: CircleQuestionMark, title: "Поддержка" },
  ]}
  logoutFn={() => console.log("logout")}
/>;
```

### With Language And Theme

```tsx
<AccountMenu
  src="https://i.pravatar.cc/160?img=68"
  fullName="Name User"
  languages={[
    { value: "ru", label: "Ru" },
    { value: "en", label: "En" },
  ]}
  language="ru"
  onChangeLanguage={setLanguage}
  showTheme
/>;
```
