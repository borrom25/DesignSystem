import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CircleUser, Settings } from "lucide-react";
import { AccountMenu, TabsOverflow, HeaderInside } from "@/components";
import { Size } from "@/types";
import { useScreenSize } from "@/providers";

const meta = {
  title: "Components/HeaderInside",
  component: HeaderInside,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
      description: "URL изображения в слоте",
    },
    title: {
      control: "text",
      description: "Заголовок",
    },
    subtitle: {
      control: "text",
      description: "Подзаголовок",
    },
    showActionButton: {
      control: "boolean",
      description: "Показать кнопку действия (настройки)",
    },
    actionIcon: {
      control: false,
      description: "Иконка для кнопки iconOnly flat brand",
    },
    showNotification: {
      control: "boolean",
      description: "Показать кнопку уведомлений",
    },
    onBackClick: {
      action: "back clicked",
    },
    onActionClick: {
      action: "action clicked",
    },
    onNotificationClick: {
      action: "notification clicked",
    },
  },
} satisfies Meta<typeof HeaderInside>;

export default meta;
type Story = StoryObj<typeof meta>;

const AVATAR_URL =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces";
const SLOT_IMAGE_URL =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=72&h=72&fit=crop";

const TAB_ITEMS = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Files", value: "files" },
  { label: "Members", value: "members" },
  { label: "Settings", value: "settings" },
  { label: "Integrations", value: "integrations" },
  { label: "Analytics", value: "analytics" },
  { label: "Logs", value: "logs" },
];

const HeaderInsideWithTabs = (args: Story["args"]) => {
  const [activeTab, setActiveTab] = useState("overview");
  const { isMobile } = useScreenSize();

  return (
    <div className="min-h-screen w-full bg-page">
      <HeaderInside {...args}>
        <TabsOverflow
          items={TAB_ITEMS}
          value={activeTab}
          onValueChange={setActiveTab}
          size={Size.Sm}
          indicatorOffset={isMobile ? 2 : 10}
        />
      </HeaderInside>
      <div className="px-(--spacing-9) pt-[76px] pb-(--spacing-9)">
        <p className="text-secondary">Контент страницы</p>
      </div>
    </div>
  );
};

export const Playground: Story = {
  args: {
    title: "Проект",
    subtitle: "Описание проекта",
    imageSrc: SLOT_IMAGE_URL,
    showActionButton: true,
    actionIcon: Settings,
    showNotification: true,
    accountMenu: (
      <AccountMenu
        src={AVATAR_URL}
        fullName="Константинов К.К."
        role="Product Designer"
        actions={[
          { iconLeft: CircleUser, title: "Профиль" },
          { iconLeft: Settings, title: "Настройки аккаунта" },
        ]}
        logoutFn={() => {}}
      />
    ),
  },
  render: HeaderInsideWithTabs,
};

export const BackTitleAndTabs: Story = {
  args: {
    title: "Проект",
    showActionButton: false,
    showNotification: false,
  },
  render: HeaderInsideWithTabs,
};
