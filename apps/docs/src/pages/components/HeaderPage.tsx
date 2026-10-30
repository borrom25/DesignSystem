import { useState } from "react";
import { CircleUser, Plus, Settings } from "lucide-react";
import { Button, Header, TabsOverflow } from "@/components";
import { Color, Size, Type } from "@/types";
import { useScreenSize } from "@/providers";
import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";

type HeaderPlaygroundState = {
  title: string;
  showMenuButton: boolean;
  showNotification: boolean;
  withAccountMenu: boolean;
  withTopSlot: boolean;
  withTabs: boolean;
};

const HEADER_DEFAULT_STATE: HeaderPlaygroundState = {
  title: "платформа",
  showMenuButton: true,
  showNotification: true,
  withAccountMenu: true,
  withTopSlot: true,
  withTabs: true,
};

const TAB_ITEMS = [
  { label: "Дашборд", value: "dashboard" },
  { label: "Аналитика", value: "analytics" },
  { label: "Отчеты", value: "reports" },
  { label: "Настройки", value: "settings" },
  { label: "Пользователи", value: "users" },
  { label: "Интеграции", value: "integrations" },
];

const AVATAR_URL = "https://i.pravatar.cc/160?img=68";

const HEADER_ACCOUNT_MENU_PROPS = {
  src: AVATAR_URL,
  fullName: "Константинов К.К.",
  role: "Product Designer",
  actions: [
    { iconLeft: CircleUser, title: "Профиль" },
    { iconLeft: Settings, title: "Настройки" },
  ],
  logoutFn: () => {},
};

const HEADER_TOP_SLOT = (
  <Button type={Type.Flat} color={Color.Brand} size={Size.Xs} iconLeft={Plus}>
    Создать
  </Button>
);

const HEADER_PROPS: readonly PropDefinition[] = [
  {
    name: "logo",
    type: "ReactNode",
    description:
      "Кастомный логотип. По умолчанию используется логотип библиотеки.",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Текст рядом с логотипом.",
    defaultValue: '"платформа"',
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Контент в центральной зоне (например TabsOverflow).",
  },
  {
    name: "topSlot",
    type: "ReactNode",
    description:
      "Слот в правой части хедера (перед уведомлениями и AccountMenu).",
  },
  {
    name: "showMenuButton",
    type: "boolean",
    description: "Показать кнопку меню слева от логотипа.",
    defaultValue: "true",
  },
  {
    name: "menuItems",
    type: "MenuItem[]",
    description: "Пункты выпадающего меню кнопки Menu (key, label, onClick).",
  },
  {
    name: "onMenuClick",
    type: "() => void",
    description: "Колбэк клика по кнопке меню (если menuItems не переданы).",
  },
  {
    name: "showNotification",
    type: "boolean",
    description: "Показать кнопку уведомлений.",
    defaultValue: "true",
  },
  {
    name: "onNotificationClick",
    type: "() => void",
    description: "Колбэк клика по кнопке уведомлений.",
  },
  {
    name: "accountMenuProps",
    type: 'Omit<AccountMenuProps, "trigger">',
    description: "Пропсы AccountMenu в правой части хедера.",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные классы корневого контейнера.",
  },
];

function HeaderPreviewContent({ state }: { state: HeaderPlaygroundState }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { isMobile } = useScreenSize();

  return (
    <div className="flex h-full min-h-[420px] w-full flex-col overflow-hidden bg-page">
      <Header
        className="!static !top-auto !right-auto !left-auto !z-auto"
        title={state.title || undefined}
        showMenuButton={state.showMenuButton}
        showNotification={state.showNotification}
        menuItems={[
          { key: "profile", label: "Профиль", onClick: () => {} },
          { key: "settings", label: "Настройки", onClick: () => {} },
          { key: "logout", label: "Выйти", onClick: () => {} },
        ]}
        topSlot={state.withTopSlot ? HEADER_TOP_SLOT : undefined}
        accountMenuProps={
          state.withAccountMenu ? HEADER_ACCOUNT_MENU_PROPS : undefined
        }
      >
        {state.withTabs ? (
          <TabsOverflow
            items={TAB_ITEMS}
            value={activeTab}
            onValueChange={setActiveTab}
            size={Size.Sm}
            indicatorOffset={isMobile ? 0 : 9}
          />
        ) : undefined}
      </Header>
      <div className="flex flex-1 items-center justify-center px-(--spacing-6) py-(--spacing-5)">
        <p className="text-secondary text-xs">Контент страницы</p>
      </div>
    </div>
  );
}

function HeaderPreview(state: HeaderPlaygroundState) {
  return <HeaderPreviewContent state={state} />;
}

function renderHeaderControls(
  state: HeaderPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<HeaderPlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundSwitchControl
        label="Show menu button"
        checked={state.showMenuButton}
        onChange={(showMenuButton) => updateState({ showMenuButton })}
      />
      <PlaygroundSwitchControl
        label="Show notification"
        checked={state.showNotification}
        onChange={(showNotification) => updateState({ showNotification })}
      />
      <PlaygroundSwitchControl
        label="Show top slot"
        checked={state.withTopSlot}
        onChange={(withTopSlot) => updateState({ withTopSlot })}
      />
      <PlaygroundSwitchControl
        label="Show AccountMenu"
        checked={state.withAccountMenu}
        onChange={(withAccountMenu) => updateState({ withAccountMenu })}
      />
      <PlaygroundSwitchControl
        label="Show tabs"
        checked={state.withTabs}
        onChange={(withTabs) => updateState({ withTabs })}
      />
    </>
  );
}

function createHeaderUsageCode(
  packageName: string,
  state: HeaderPlaygroundState
) {
  return `import { useState } from "react";
import { CircleUser, Plus, Settings } from "lucide-react";
import {
  Button,
  Color,
  Header,
  Size,
  TabsOverflow,
  Type,
} from "${packageName}";
import "${packageName}/styles.css";

const AVATAR_URL = "https://i.pravatar.cc/160?img=68";

export function Example() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Header
      title="${state.title}"
      showMenuButton={${state.showMenuButton}}
      showNotification={${state.showNotification}}${
        state.withTopSlot
          ? `
      topSlot={
        <Button type={Type.Flat} color={Color.Brand} size={Size.Xs} iconLeft={Plus}>
          Создать
        </Button>
      }`
          : ""
      }${
        state.withAccountMenu
          ? `
      accountMenuProps={{
        src: AVATAR_URL,
        fullName: "Константинов К.К.",
        role: "Product Designer",
        actions: [
          { iconLeft: CircleUser, title: "Профиль" },
          { iconLeft: Settings, title: "Настройки" },
        ],
        logoutFn: () => {},
      }}`
          : ""
      }
    >${
      state.withTabs
        ? `
      <TabsOverflow
        items={[
          { label: "Дашборд", value: "dashboard" },
          { label: "Аналитика", value: "analytics" },
        ]}
        value={activeTab}
        onValueChange={setActiveTab}
        size={Size.Sm}
      />`
        : ""
    }
    </Header>
  );
}`;
}

const headerDocsConfig: ComponentDocsConfig<HeaderPlaygroundState> = {
  title: "Header",
  previewLayout: "stretch",
  description:
    "Header — верхняя шапка приложения: логотип, меню, центральный слот (табы) и правые действия (topSlot, уведомления, AccountMenu).",
  props: HEADER_PROPS,
  initialState: HEADER_DEFAULT_STATE,
  createUsageCode: createHeaderUsageCode,
  renderPreview: HeaderPreview,
  renderControls: renderHeaderControls,
};

const HeaderPage = createComponentDocsPage(headerDocsConfig);

export default HeaderPage;
