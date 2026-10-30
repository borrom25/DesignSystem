import { useState } from "react";
import { CircleUser, Plus, Settings } from "lucide-react";
import { Button, HeaderInside, TabsOverflow } from "@/components";
import { Color, Size, Type } from "@/types";
import { ScreenContext, useScreenSize } from "@/providers";
import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";
import { cn } from "@/utils";

type HeaderInsidePlaygroundState = {
  title: string;
  subtitle: string;
  showActionButton: boolean;
  showNotification: boolean;
  withImage: boolean;
  withAccountMenu: boolean;
  withTabs: boolean;
  withTopSlot: boolean;
  mobilePreview: boolean;
};

const HEADER_INSIDE_DEFAULT_STATE: HeaderInsidePlaygroundState = {
  title: "Проект",
  subtitle: "Описание проекта",
  showActionButton: true,
  showNotification: true,
  withImage: true,
  withAccountMenu: true,
  withTabs: true,
  withTopSlot: true,
  mobilePreview: false,
};

const TAB_ITEMS = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Files", value: "files" },
  { label: "Members", value: "members" },
  { label: "Settings", value: "settings" },
  { label: "Integrations", value: "integrations" },
];

const AVATAR_URL =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces";
const SLOT_IMAGE_URL =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=72&h=72&fit=crop";

const HEADER_INSIDE_ACCOUNT_MENU_PROPS = {
  src: AVATAR_URL,
  fullName: "Константинов К.К.",
  role: "Product Designer",
  actions: [
    { iconLeft: CircleUser, title: "Профиль" },
    { iconLeft: Settings, title: "Настройки аккаунта" },
  ],
  logoutFn: () => {},
};

const HEADER_INSIDE_PROPS: readonly PropDefinition[] = [
  {
    name: "title",
    type: "ReactNode",
    description: "Основной заголовок страницы.",
  },
  {
    name: "subtitle",
    type: "ReactNode",
    description: "Подзаголовок под title.",
  },
  {
    name: "imageSrc",
    type: "string",
    description: "URL изображения слева от заголовка.",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Контент в центральной зоне (например TabsOverflow). На мобиле уходит во вторую строку.",
  },
  {
    name: "topSlot",
    type: "ReactNode",
    description:
      "Слот в правой части хедера (перед уведомлениями и AccountMenu). На мобиле остаётся сверху и не уезжает вниз.",
  },
  {
    name: "onBackClick",
    type: "() => void",
    description: "Колбэк клика по кнопке «Назад».",
  },
  {
    name: "showActionButton",
    type: "boolean",
    description: "Показать кнопку действия рядом с заголовком.",
    defaultValue: "true",
  },
  {
    name: "actionIcon",
    type: "LucideIcon",
    description: "Иконка для кнопки действия (iconOnly flat brand).",
  },
  {
    name: "onActionClick",
    type: "() => void",
    description: "Колбэк клика по кнопке действия.",
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

function HeaderInsidePreviewContent({
  state,
}: {
  state: HeaderInsidePlaygroundState;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const { isMobile } = useScreenSize();

  return (
    <div
      className={cn(
        "flex h-full min-h-[420px] w-full flex-col overflow-hidden bg-page",
        state.mobilePreview && "mx-auto max-w-[390px] border-x border-line"
      )}
    >
      <HeaderInside
        className="!static !top-auto !right-auto !left-auto !z-auto"
        title={state.title}
        subtitle={state.subtitle || undefined}
        imageSrc={state.withImage ? SLOT_IMAGE_URL : undefined}
        showActionButton={state.showActionButton}
        actionIcon={Settings}
        showNotification={state.showNotification}
        onBackClick={() => {}}
        onActionClick={() => {}}
        topSlot={
          state.withTopSlot ? (
            <Button
              type={Type.Flat}
              color={Color.Brand}
              size={Size.Xs}
              iconLeft={Plus}
            >
              Создать
            </Button>
          ) : undefined
        }
        accountMenuProps={
          state.withAccountMenu ? HEADER_INSIDE_ACCOUNT_MENU_PROPS : undefined
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
      </HeaderInside>
      <div className="flex flex-1 items-center justify-center px-(--spacing-6) py-(--spacing-5)">
        <p className="text-secondary text-xs">Контент страницы</p>
      </div>
    </div>
  );
}

function HeaderInsidePreview(state: HeaderInsidePlaygroundState) {
  return (
    <ScreenContext.Provider
      value={{
        isMobile: state.mobilePreview,
        isTablet: false,
        isDesktop: !state.mobilePreview,
      }}
    >
      <HeaderInsidePreviewContent state={state} />
    </ScreenContext.Provider>
  );
}

function renderHeaderInsideControls(
  state: HeaderInsidePlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<HeaderInsidePlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(subtitle) => updateState({ subtitle })}
      />
      <PlaygroundSwitchControl
        label="Mobile preview"
        checked={state.mobilePreview}
        onChange={(mobilePreview) => updateState({ mobilePreview })}
      />
      <PlaygroundSwitchControl
        label="Show image"
        checked={state.withImage}
        onChange={(withImage) => updateState({ withImage })}
      />
      <PlaygroundSwitchControl
        label="Show action button"
        checked={state.showActionButton}
        onChange={(showActionButton) => updateState({ showActionButton })}
      />
      <PlaygroundSwitchControl
        label="Show notification"
        checked={state.showNotification}
        onChange={(showNotification) => updateState({ showNotification })}
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
      <PlaygroundSwitchControl
        label="Show topSlot"
        checked={state.withTopSlot}
        onChange={(withTopSlot) => updateState({ withTopSlot })}
      />
    </>
  );
}

function createHeaderInsideUsageCode(
  packageName: string,
  state: HeaderInsidePlaygroundState
) {
  return `import { useState } from "react";
import { CircleUser, Plus, Settings } from "lucide-react";
import {
  Button,
  Color,
  HeaderInside,
  Size,
  TabsOverflow,
  Type,
} from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <HeaderInside
      title="${state.title}"${state.subtitle ? `\n      subtitle="${state.subtitle}"` : ""}${state.withImage ? '\n      imageSrc="https://example.com/image.jpg"' : ""}
      showActionButton={${state.showActionButton}}
      actionIcon={Settings}
      showNotification={${state.showNotification}}
      onBackClick={() => {}}${
        state.withTopSlot
          ? `
      topSlot={
        <Button type={Type.Filled} color={Color.Brand} size={Size.Xs} iconLeft={Plus}>
          Создать
        </Button>
      }`
          : ""
      }${
        state.withAccountMenu
          ? `
      accountMenuProps={{
        fullName: "Константинов К.К.",
        role: "Product Designer",
        actions: [
          { iconLeft: CircleUser, title: "Профиль" },
          { iconLeft: Settings, title: "Настройки аккаунта" },
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
          { label: "Overview", value: "overview" },
          { label: "Activity", value: "activity" },
        ]}
        value={activeTab}
        onValueChange={setActiveTab}
        size={Size.Sm}
      />`
        : ""
    }
    </HeaderInside>
  );
}`;
}

const headerInsideDocsConfig: ComponentDocsConfig<HeaderInsidePlaygroundState> =
  {
    title: "HeaderInside",
    previewLayout: "stretch",
    description:
      "HeaderInside — внутренний хедер раздела: кнопка «Назад», заголовок/подзаголовок, опциональное изображение, action-кнопка и правые действия.",
    props: HEADER_INSIDE_PROPS,
    initialState: HEADER_INSIDE_DEFAULT_STATE,
    createUsageCode: createHeaderInsideUsageCode,
    renderPreview: HeaderInsidePreview,
    renderControls: renderHeaderInsideControls,
  };

const HeaderInsidePage = createComponentDocsPage(headerInsideDocsConfig);

export default HeaderInsidePage;
