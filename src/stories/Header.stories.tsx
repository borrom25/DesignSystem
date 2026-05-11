import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { AccountMenu, Header, TabsOverflow } from "@/components";
import type { HeaderProps } from "@/components";
import { CircleUser, Settings } from "lucide-react";
import { Size } from "@/types";
import { useScreenSize } from "@/providers";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
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
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
  { label: "Логи", value: "logs" },
];

const HeaderWithTabs = (args: HeaderProps) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { isMobile } = useScreenSize();

  return (
    <div className="min-h-screen bg-page">
      <Header {...args}>
        <TabsOverflow
          items={TAB_ITEMS}
          value={activeTab}
          onValueChange={setActiveTab}
          size={Size.Sm}
          indicatorOffset={isMobile ? 6 : 10}
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
    accountMenu: (
      <AccountMenu
        src={AVATAR_URL}
        fullName="Константинов К.К."
        role="Product Designer"
        actions={[
          { iconLeft: CircleUser, title: "Профиль" },
          { iconLeft: Settings, title: "Настройки" },
        ]}
        logoutFn={() => {}}
      />
    ),
    onMenuClick: () => {},
    onNotificationClick: () => {},
  },
  render: HeaderWithTabs,
};
