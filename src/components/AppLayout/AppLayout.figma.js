// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3124-20448
// urlMobile=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=3159-29
// source=src/components/AppLayout/AppLayout.tsx
// component=AppLayout
const figma = require("figma");
const instance = figma.selectedInstance;

const page = instance.getEnum("Page", {
  Main: "main",
  Inside: "inside",
  Process: "process",
});

const tabsItems = figma.tsx`[
  { label: "Tab", value: "tab-1" },
  { label: "Tab", value: "tab-2" },
  { label: "Tab", value: "tab-3" },
  { label: "Tab", value: "tab-4" },
]`;

const sidebarItems = figma.tsx`[
  { id: "home", icon: Home, label: "Главная" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "docs", icon: FileText, label: "Документы" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
]`;

const bottomBarItems = figma.tsx`[
  { id: "home", icon: Home, label: "Главная" },
  { id: "docs", icon: FileText, label: "Документы" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "settings", icon: Settings, label: "Настройки" },
]`;

const isProcess = page === "process";
const isMain = page === "main";

const headerCode = isMain
  ? figma.tsx`
      <Header title="Платформа" showMenuButton showNotification>
        <TabsOverflow
          items={${tabsItems}}
          value="tab-1"
          onValueChange={() => {}}
          size="sm"
          indicatorOffset={10}
        />
      </Header>
    `
  : figma.tsx`
      <HeaderInside
        title="Название страницы"
        subtitle="Название страницы"
        showActionButton
        actionIcon={Settings}
        showNotification
      >
        <TabsOverflow
          items={${tabsItems}}
          value="tab-1"
          onValueChange={() => {}}
          size="sm"
          indicatorOffset={10}
        />
      </HeaderInside>
    `;

const sidebarCode = isMain
  ? figma.tsx`
      <Sidebar
        title="Меню"
        activeItemId="home"
        items={${sidebarItems}}
      />
    `
  : figma.tsx`
      <InsideSidebar
        title="Разделы"
        actionSlot={
          <Button
            iconOnly={Plus}
            size={Size.Xs}
            type={Type.Flat}
            color={Color.Brand}
          />
        }
        headSlot={<div style={{ height: 36 }} />}
        slotContent={<div style={{ minHeight: 240 }} />}
      />
    `;

const processChildren = figma.tsx`
  <>
    <div style={{ minHeight: 320 }}>Process content</div>

    {/* Temporary mapping: mobile bottom bar is outside AppLayout API. */}
    <BarMenu
      value="home"
      onSelect={() => {}}
      onMoreClick={() => {}}
      items={${bottomBarItems}}
    />
  </>
`;

const childrenCode = isProcess
  ? processChildren
  : figma.tsx`<div style={{ minHeight: 320 }}>Page content</div>`;

export default {
  example: figma.tsx`
    <AppLayout
      container="640"
      header={${headerCode}}
      sidebar={${sidebarCode}}
    >
      ${childrenCode}
    </AppLayout>
  `,
  imports: [
    'import { AppLayout, Header, HeaderInside, Sidebar, InsideSidebar, TabsOverflow, BarMenu, Button, Color, Size, Type } from "borrom-ds-test"',
    'import { BarChart3, FileText, Home, Plus, Settings, Users } from "lucide-react"',
  ],
  id: "applayout",
  metadata: {
    nestable: true,
    props: {
      page,
      hasTemporaryProcessMapping: isProcess,
      hasTemporaryBottomBarMapping: isProcess,
      hasTemporarySideMenuToggleMapping: true,
    },
  },
};
