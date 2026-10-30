import {
  BarChart3,
  Bell,
  Database,
  Home,
  LogOut,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import type { SidebarItem } from "@/components";
import { Sidebar } from "@/components";
import { Color, Type } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";

type SidebarItemId =
  | "home"
  | "analytics"
  | "users"
  | "notifications"
  | "security"
  | "database"
  | "settings";

type SidebarPlaygroundState = {
  activeItemId: SidebarItemId;
  defaultCollapsed: boolean;
  withAction: boolean;
  withTitle: boolean;
};

const SIDEBAR_DEFAULT_STATE: SidebarPlaygroundState = {
  activeItemId: "home",
  defaultCollapsed: false,
  withAction: true,
  withTitle: true,
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "users", icon: Users, label: "Пользователи", disabled: true },
  { id: "notifications", icon: Bell, label: "Уведомления" },
  { id: "security", icon: Shield, label: "Безопасность", disabled: true },
  { id: "database", icon: Database, label: "База данных" },
  { id: "settings", icon: Settings, label: "Настройки" },
];

const SIDEBAR_ITEM_OPTIONS = [
  { value: "home", label: "Home" },
  { value: "analytics", label: "Analytics" },
  { value: "users", label: "Users" },
  { value: "notifications", label: "Notifications" },
  { value: "security", label: "Security" },
  { value: "database", label: "Database" },
  { value: "settings", label: "Settings" },
] as const;

const SIDEBAR_PROPS: readonly PropDefinition[] = [
  {
    name: "items",
    type: "SidebarItem[]",
    description: "Коллекция навигационных пунктов с id, иконкой и label.",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Заголовок в шапке сайдбара.",
  },
  {
    name: "defaultCollapsed",
    type: "boolean",
    description: "Начальное состояние (развернут/свернут).",
    defaultValue: "false",
  },
  {
    name: "activeItemId",
    type: "string",
    description: "ID активного пункта для controlled-подсветки.",
  },
  {
    name: "onItemClick",
    type: "(itemId: string) => void",
    description: "Колбэк выбора пункта навигации.",
  },
  {
    name: "action",
    type: "SidebarAction",
    description: "Кнопка действия в нижней части сайдбара.",
  },
  {
    name: "type",
    type: '"main" | "inside" | "process"',
    description: "Тип mobile-trigger кнопки.",
    defaultValue: '"main"',
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные классы корневого контейнера.",
  },
];

function SidebarPreview(
  state: SidebarPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<SidebarPlaygroundState>) => void }
) {
  return (
    <div className="h-[420px] w-full overflow-hidden bg-page">
      <div className="flex h-full">
        <Sidebar
          key={`${state.defaultCollapsed}`}
          items={SIDEBAR_ITEMS}
          title={state.withTitle ? "Навигация" : undefined}
          defaultCollapsed={state.defaultCollapsed}
          activeItemId={state.activeItemId}
          onItemClick={(itemId) =>
            updateState({
              activeItemId: itemId as SidebarPlaygroundState["activeItemId"],
            })
          }
          action={
            state.withAction
              ? {
                  icon: LogOut,
                  label: "Выйти",
                  ariaLabel: "Выйти",
                  buttonProps: {
                    type: Type.Flat,
                    color: Color.Secondary,
                  },
                }
              : undefined
          }
          className="!static !top-0 !left-0 !h-full"
        />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-primary text-sm font-medium">
              Активный пункт: {state.activeItemId}
            </p>
            <p className="text-secondary mt-1 text-xs">
              Используйте пункты в Sidebar для переключения activeItemId
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderSidebarControls(
  state: SidebarPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<SidebarPlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Active item"
        options={SIDEBAR_ITEM_OPTIONS}
        value={state.activeItemId}
        onChange={(value) =>
          updateState({
            activeItemId: value as SidebarPlaygroundState["activeItemId"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Default collapsed"
        checked={state.defaultCollapsed}
        onChange={(defaultCollapsed) => updateState({ defaultCollapsed })}
      />
      <PlaygroundSwitchControl
        label="Show title"
        checked={state.withTitle}
        onChange={(withTitle) => updateState({ withTitle })}
      />
      <PlaygroundSwitchControl
        label="Show action button"
        checked={state.withAction}
        onChange={(withAction) => updateState({ withAction })}
      />
    </>
  );
}

function createSidebarUsageCode(
  packageName: string,
  state: SidebarPlaygroundState
) {
  return `import { useState } from "react";
import { Home, BarChart3, Users, Bell } from "lucide-react";
import { Sidebar } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "notifications", icon: Bell, label: "Уведомления" },
];

export function Example() {
  const [activeItemId, setActiveItemId] = useState("${state.activeItemId}");

  return (
    <Sidebar
      items={items}${state.withTitle ? '\n      title="Навигация"' : ""}
      defaultCollapsed={${state.defaultCollapsed}}
      activeItemId={activeItemId}
      onItemClick={setActiveItemId}
    />
  );
}`;
}

const sidebarDocsConfig: ComponentDocsConfig<SidebarPlaygroundState> = {
  title: "Sidebar",
  previewLayout: "stretch",
  description:
    "Sidebar строит основную вертикальную навигацию приложения, поддерживает collapsed-режим, disabled-пункты, action-зону и mobile-поведение через side menu.",
  props: SIDEBAR_PROPS,
  initialState: SIDEBAR_DEFAULT_STATE,
  createUsageCode: createSidebarUsageCode,
  renderPreview: SidebarPreview,
  renderControls: renderSidebarControls,
};

const SidebarPage = createComponentDocsPage(sidebarDocsConfig);

export default SidebarPage;
