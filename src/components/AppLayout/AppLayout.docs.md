# AppLayout

Документация для связи Figma-компонентов `App / Desktop` и `AppMobile` с runtime-компонентом `AppLayout`.

Ссылку из Figma можно вести на этот файл, если нужна документация, или на `AppLayout.figma.js`, если нужен Code Connect.

## Machine-readable summary

```yaml
component: AppLayout
package: borrom-ds-test
import: import { AppLayout } from "borrom-ds-test";
stylesImport: import "borrom-ds-test/styles.css";
runtime: src/components/AppLayout/AppLayout.tsx
types: src/components/AppLayout/AppLayout.types.ts
localExport: src/components/AppLayout/index.ts
publicExport: src/index.ts
storybook: src/stories/AppLayout.stories.tsx
figmaComponent: App / Desktop, AppMobile
figmaUrls:
  - https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3124-20448
  - https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3159-29
figmaNodeIds:
  - 3124:20448
  - 3159:29
codeConnect: src/components/AppLayout/AppLayout.figma.js
```

## Public usage

```tsx
import { AppLayout, Header, Sidebar } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
import { Home, Settings, Users } from "lucide-react";

const items = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "settings", icon: Settings, label: "Настройки" },
];

export function Example() {
  return (
    <AppLayout
      container="640"
      header={<Header title="Платформа" showNotification />}
      sidebar={<Sidebar title="Меню" activeItemId="home" items={items} />}
    >
      <div style={{ minHeight: 320 }}>Контент страницы</div>
    </AppLayout>
  );
}
```

## Source files

| Purpose | Path |
| --- | --- |
| Runtime component | `src/components/AppLayout/AppLayout.tsx` |
| Public props | `src/components/AppLayout/AppLayout.types.ts` |
| Sidebar width hook | `src/components/AppLayout/hooks/useSidebarWidth.ts` |
| Local export | `src/components/AppLayout/index.ts` |
| Styles entry | `src/components/AppLayout/styles/index.ts` |
| Storybook | `src/stories/AppLayout.stories.tsx` |
| Code Connect | `src/components/AppLayout/AppLayout.figma.js` |

## Figma to props mapping

| Figma property / variant | Figma values | Code prop | Code values | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| `Page` | `Main` | `header`, `sidebar`, `children` | `Header` + `Sidebar` + контент | - | Composition mapping через slots |
| `Page` | `Inside` | `header`, `sidebar`, `children` | `HeaderInside` + `InsideSidebar` + контент | - | Composition mapping через slots |
| `Page` | `Process` | `header`, `sidebar`, `children` | `HeaderInside` + `InsideSidebar` + контент | - | Step bar в макете не отдельный prop `AppLayout` |
| `slotContent` | slot | `children` | `ReactNode` | required | Основной контент страницы |
| `sideMenu` (desktop layout) | visual toggle | `sidebar` | `ReactNode` / `undefined` | `undefined` | Sidebar передается как узел, не через boolean prop |
| Container width (desktop) | 640 area | `container` | `"640"`, `"720"`, `"fill"` | `"fill"` | Для макетов Figma обычно подходит `container="640"` |
| Mobile/Desktop | adaptive | - | provider-driven | - | Переключение делается через `ScreenProvider`, не через prop |
| Mobile `bottomBar` | visual slot | - | external composition | - | Не входит в API `AppLayout`, подключается соседним компонентом (`BarMenu`) |

## Supported states

| State | Supported in code | How to use |
| --- | --- | --- |
| Header + content | Yes | передать `header` и `children` |
| Header + sidebar + content | Yes | передать `header`, `sidebar`, `children` |
| No sidebar | Yes | не передавать `sidebar` |
| Desktop width 640 | Yes | `container="640"` |
| Desktop width 720 | Yes | `container="720"` |
| Fill container | Yes | `container="fill"` |
| Mobile layout | Yes | автоматически через `ScreenProvider` |

## Design matching notes

- `AppLayout` в runtime — композиционный контейнер, а не готовый page-template со встроенными `Header`, `Sidebar`, `BarMenu` и `StepBar`.
- Макеты `App / Desktop` и `AppMobile` собираются из одного `AppLayout` плюс дочерних компонентов, которые передаются в `header`, `sidebar` и `children`.
- На desktop ширина sidebar вычисляется автоматически через `useSidebarWidth` по фактической ширине переданного узла.
- На mobile ширина sidebar не фиксируется через inline width; layout переключается через `useScreenSize`.

## Temporary mappings / assumptions

| Item | Current mapping | Reason | Follow-up |
| --- | --- | --- | --- |
| `Page=Process` step bar | Рендерится внутри `children` как композиция | У `AppLayout` нет отдельного `stepBar` prop | Если нужен first-class API, добавить отдельный layout preset или slot |
| Mobile `bottomBar` | Подключается отдельным `BarMenu` рядом с `AppLayout` | `AppLayout` не содержит встроенный нижний бар | Добавить внешний shell-компонент, если нужен единый API страницы |
| `sideMenu` toggle из Figma | Преобразуется в наличие/отсутствие `sidebar` узла | В runtime нет boolean-пропа `sideMenu` | При необходимости добавить `withSidebar` только если будет подтвержден use-case |

## Examples

### Main page

```tsx
<AppLayout
  container="640"
  header={<Header title="Платформа" showNotification />}
  sidebar={<Sidebar title="Меню" activeItemId="home" items={items} />}
>
  <div style={{ minHeight: 320 }}>Контент main page</div>
</AppLayout>
```

### Inside page

```tsx
<AppLayout
  container="640"
  header={<HeaderInside title="Название страницы" subtitle="Подзаголовок" />}
  sidebar={<InsideSidebar title="Разделы" />}
>
  <div style={{ minHeight: 320 }}>Контент inside page</div>
</AppLayout>
```

### Mobile composition

```tsx
<>
  <AppLayout container="fill" header={<Header title="Платформа" />}>
    <div style={{ minHeight: 320 }}>Контент mobile page</div>
  </AppLayout>
  <BarMenu
    value="home"
    onSelect={() => {}}
    onMoreClick={() => {}}
    items={[
      { id: "home", icon: Home, label: "Главная" },
      { id: "profile", icon: User, label: "Профиль" },
    ]}
  />
</>
```
