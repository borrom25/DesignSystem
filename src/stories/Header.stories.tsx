import type { HeaderProps } from "@/components";
import { Button, Header, TabsOverflow } from "@/components";
import { useLanguage, useScreenSize } from "@/providers";
import { Color, Size, Type } from "@/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleUser, Plus, Settings } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    showThemeSwitcher: {
      control: "boolean",
      description: "Показать переключатель темы в хедере",
    },
    showMenuButton: {
      control: "boolean",
      description: "Показать кнопку меню",
    },
    showNotification: {
      control: "boolean",
      description: "Показать кнопку уведомлений",
    },
    title: {
      control: "text",
      description: "Текст заголовка",
    },
    onMenuClick: {
      action: "menu clicked",
      description: "Обработчик клика по кнопке меню",
    },
    onNotificationClick: {
      action: "notification clicked",
      description: "Обработчик клика по кнопке уведомлений",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const AVATAR_URL = "https://i.pravatar.cc/160?img=68";

const TAB_ITEMS = [
  { label: "Дашборд", value: "dashboard" },
  { label: "Аналитика", value: "analytics" },
  { label: "Отчеты", value: "reports" },
  { label: "Настройки", value: "settings" },
  { label: "Пользователи", value: "users" },
  { label: "Интеграции", value: "integrations" },
  { label: "Безопасность", value: "security" },
  { label: "Логи", value: "logs" },
];

const ACCOUNT_MENU_PROPS = {
  src: AVATAR_URL,
  fullName: "Константинов К.К.",
  role: "Product Designer",
  languages: [
    { value: "ru", label: "Ru" },
    { value: "en", label: "En" },
    { value: "fr", label: "FR" },
  ],
  showTheme: true,
  actions: [
    { iconLeft: CircleUser, title: "Профиль" },
    { iconLeft: Settings, title: "Настройки" },
  ],
  logoutFn: () => {},
};

const TOP_SLOT = (
  <Button type={Type.Flat} color={Color.Brand} size={Size.Xs} iconLeft={Plus}>
    Создать
  </Button>
);

const HeaderWithTabs = (args: HeaderProps) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { isMobile } = useScreenSize();
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-page">
      <Header
        {...args}
        accountMenuProps={
          args.accountMenuProps
            ? {
                ...args.accountMenuProps,
                language,
                onChangeLanguage: setLanguage,
              }
            : undefined
        }
        menuItems={[
          { key: "profile", label: "Профиль", onClick: () => {} },
          { key: "settings", label: "Настройки", onClick: () => {} },
          { key: "logout", label: "Выйти", onClick: () => {} },
        ]}
      >
        <TabsOverflow
          items={TAB_ITEMS}
          value={activeTab}
          onValueChange={setActiveTab}
          size={Size.Sm}
          indicatorOffset={isMobile ? 6 : 9}
        />
      </Header>
      <div className="px-(--spacing-9) pt-[76px] pb-(--spacing-9)">
        <p className="text-secondary">Контент страницы</p>
      </div>
    </div>
  );
};

export const Playground: Story = {
  args: {
    showMenuButton: true,
    showNotification: true,
    topSlot: TOP_SLOT,
    accountMenuProps: ACCOUNT_MENU_PROPS,
    onMenuClick: () => {},
    onNotificationClick: () => {},
  },
  render: HeaderWithTabs,
};

export const WithTopSlot: Story = {
  args: {
    showMenuButton: true,
    showNotification: true,
    topSlot: TOP_SLOT,
    accountMenuProps: ACCOUNT_MENU_PROPS,
  },
  render: HeaderWithTabs,
};
