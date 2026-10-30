import { BarChart3, Bell, FileText, Home, Settings, Users } from "lucide-react";
import { BarMenu } from "@/components";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";

type BarMenuItemId =
  | "overview"
  | "analytics"
  | "reports"
  | "users"
  | "notifications"
  | "settings";

type BarMenuPlaygroundState = {
  value: BarMenuItemId;
  disableReports: boolean;
};

const BAR_MENU_DEFAULT_STATE: BarMenuPlaygroundState = {
  value: "overview",
  disableReports: false,
};

const BAR_MENU_VALUE_OPTIONS = [
  { value: "overview", label: "Overview" },
  { value: "analytics", label: "Analytics" },
  { value: "reports", label: "Reports" },
  { value: "users", label: "Users" },
  { value: "notifications", label: "Notifications" },
  { value: "settings", label: "Settings" },
] as const;

const BAR_MENU_PROPS: readonly PropDefinition[] = [
  {
    name: "items",
    type: "BarMenuItem[]",
    description: "Набор пунктов нижней navigation-панели с иконкой и label.",
  },
  {
    name: "value",
    type: "string",
    description: "Текущий выбранный пункт.",
  },
  {
    name: "onSelect",
    type: "(value: string) => void",
    description: "Колбэк выбора пункта (visible или из Popover).",
  },
  {
    name: "className",
    type: "string",
    description:
      "Дополнительный класс контейнера (например, absolute в превью).",
  },
  {
    name: "BarMenuItem.id / label / icon",
    type: "string / ReactNode / LucideIcon",
    description: "Базовые поля пункта меню.",
  },
  {
    name: "BarMenuItem.disabled / href / asChild / onClick",
    type: "boolean / string / boolean / () => void",
    description: "Опциональные настройки поведения пункта.",
  },
];

function createBarMenuItems(disableReports: boolean) {
  return [
    { id: "overview", icon: Home, label: "Overview" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    {
      id: "reports",
      icon: FileText,
      label: "Reports",
      disabled: disableReports,
    },
    { id: "users", icon: Users, label: "Users" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];
}

function BarMenuPreview(
  state: BarMenuPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<BarMenuPlaygroundState>) => void }
) {
  return (
    <div className="relative h-full min-h-[320px] w-full max-w-[420px]">
      <p className="p-4 text-sm text-secondary">
        Сузьте превью — лишние пункты уйдут в Popover у кнопки Menu.
      </p>
      <BarMenu
        className="!absolute"
        items={createBarMenuItems(state.disableReports)}
        value={state.value}
        onSelect={(value) =>
          updateState({ value: value as BarMenuPlaygroundState["value"] })
        }
      />
    </div>
  );
}

function renderBarMenuControls(
  state: BarMenuPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<BarMenuPlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Selected value"
        options={BAR_MENU_VALUE_OPTIONS}
        value={state.value}
        onChange={(value) =>
          updateState({ value: value as BarMenuPlaygroundState["value"] })
        }
      />
      <PlaygroundSwitchControl
        label="Disable Reports item"
        checked={state.disableReports}
        onChange={(disableReports) => updateState({ disableReports })}
      />
    </>
  );
}

function createBarMenuUsageCode(
  packageName: string,
  state: BarMenuPlaygroundState
) {
  return `import { useState } from "react";
import { Home, BarChart3, FileText, Users } from "lucide-react";
import { BarMenu } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { id: "overview", icon: Home, label: "Overview" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "reports", icon: FileText, label: "Reports"${state.disableReports ? ", disabled: true" : ""} },
  { id: "users", icon: Users, label: "Users" },
];

export function Example() {
  const [value, setValue] = useState("${state.value}");

  return (
    <div className="relative min-h-[320px]">
      <BarMenu items={items} value={value} onSelect={setValue} />
    </div>
  );
}`;
}

const barMenuDocsConfig: ComponentDocsConfig<BarMenuPlaygroundState> = {
  title: "BarMenu",
  description:
    "Плавающий островок нижней навигации (40px от низа). При нехватке ширины скрытые пункты открываются в Popover.",
  props: BAR_MENU_PROPS,
  initialState: BAR_MENU_DEFAULT_STATE,
  createUsageCode: createBarMenuUsageCode,
  renderPreview: BarMenuPreview,
  renderControls: renderBarMenuControls,
};

const BarMenuPage = createComponentDocsPage(barMenuDocsConfig);

export default BarMenuPage;
