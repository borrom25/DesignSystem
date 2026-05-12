// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=788-7497
// source=src/components/Sidebar/Sidebar.tsx
// component=Sidebar
const figma = require("figma");
const instance = figma.selectedInstance;

const media = instance.getEnum("Media", {
  Desktop: "desktop",
  Mobile: "mobile",
});

const close = instance.getEnum("Close", {
  Off: "off",
  On: "on",
});

const showBottomAction = instance.getBoolean("bottomSlotAction");
const defaultCollapsed = close === "on";

// Temporary mapping: Figma sideMenu has a visual <slotBody>, while the
// runtime Sidebar API expects structured SidebarItem[] data.
const itemsCode = figma.tsx`[
  { id: "home", icon: Home, label: "Главная" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
]`;

// Temporary mapping: bottomSlotAction exposes only visibility on the root
// component, so Code Connect emits a placeholder action.
const actionProp = showBottomAction
  ? figma.tsx`action={{ icon: Plus, label: "Создать", ariaLabel: "Создать" }}`
  : "";

export default {
  example: figma.tsx`
    <Sidebar
      title="Меню"
      activeItemId="home"
      items={${itemsCode}}
      ${defaultCollapsed ? "defaultCollapsed" : ""}
      ${actionProp}
    />
  `,
  imports: [
    'import { Sidebar } from "borrom-ds-test"',
    'import { BarChart3, Home, Plus, Settings } from "lucide-react"',
  ],
  id: "sidebar",
  metadata: {
    nestable: false,
    props: {
      media,
      hasTemporaryItemMapping: true,
    },
  },
};
