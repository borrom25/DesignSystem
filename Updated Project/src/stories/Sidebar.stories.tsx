import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Shield,
  Database,
  LogOut,
} from "lucide-react";
import { Sidebar, Header } from "@/components";
import type { SidebarProps, SidebarItem } from "@/components";
import { Color, Type } from "@/types";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultCollapsed: {
      control: "boolean",
      description: "Начальное состояние сворачивания",
    },
    title: {
      control: "text",
      description: "Заголовок sidebar",
    },
    activeItemId: {
      control: "text",
      description: "ID активного пункта меню",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "analytics", icon: BarChart3, label: "Аналитика" },
  { id: "users", icon: Users, label: "Пользователи", disabled: true },
  { id: "reports", icon: FileText, label: "Отчёты", disabled: true },
  { id: "notifications", icon: Bell, label: "Уведомления" },
  { id: "security", icon: Shield, label: "Безопасность", disabled: true },
  { id: "database", icon: Database, label: "База данных" },
  { id: "settings", icon: Settings, label: "Настройки", disabled: true },
];

const SidebarInteractive = (args: SidebarProps) => {
  const [activeId, setActiveId] = useState(args.activeItemId || "home");

  return (
    <div className="min-h-screen bg-page">
      <Header title="платформа" />
      <Sidebar
        {...args}
        activeItemId={activeId}
        onItemClick={(id) => setActiveId(id)}
        action={{
          icon: LogOut,
          label: "Выйти",
          ariaLabel: "Выйти",
          buttonProps: {
            type: Type.Flat,
            color: Color.Inverse,
          },
        }}
      />
      <div className="pl-[240px] pt-[76px] p-(--spacing-9) transition-[padding] duration-300 ease-in-out">
        <h1 className="text-primary text-xl font-semibold mb-4">
          Контент страницы
        </h1>
        <p className="text-secondary">Активный пункт: {activeId}</p>
      </div>
    </div>
  );
};

export const Playground: Story = {
  args: {
    title: "Навигация",
    items: SIDEBAR_ITEMS,
    defaultCollapsed: false,
    activeItemId: "home",
  },
  render: SidebarInteractive,
};

export const Collapsed: Story = {
  args: {
    title: "Навигация",
    items: SIDEBAR_ITEMS,
    defaultCollapsed: true,
    activeItemId: "analytics",
  },
  render: SidebarInteractive,
};

export const WithLinks: Story = {
  args: {
    title: "Навигация",
    items: [
      { id: "home", icon: Home, label: "Главная", href: "#home" },
      {
        id: "analytics",
        icon: BarChart3,
        label: "Аналитика",
        href: "#analytics",
      },
      { id: "users", icon: Users, label: "Пользователи", href: "#users" },
      { id: "settings", icon: Settings, label: "Настройки", href: "#settings" },
    ],
    defaultCollapsed: false,
    activeItemId: "home",
  },
  render: (args) => (
    <div className="min-h-screen bg-page">
      <Header title="платформа" showMenuButton={false} />
      <Sidebar {...args} />
      <div className="pl-[240px] pt-[76px] p-(--spacing-9)">
        <h1 className="text-primary text-xl font-semibold mb-4">
          Sidebar с ссылками
        </h1>
        <p className="text-secondary">Пункты меню как ссылки (href)</p>
      </div>
    </div>
  ),
};

export const WithAsChild: Story = {
  args: {
    title: "Навигация",
    items: [
      {
        id: "home",
        icon: Home,
        label: "Главная",
        href: "/home",
        asChild: true,
      },
      {
        id: "analytics",
        icon: BarChart3,
        label: "Аналитика",
        href: "/analytics",
        asChild: true,
      },
      {
        id: "users",
        icon: Users,
        label: "Пользователи",
        href: "/users",
        asChild: true,
      },
    ],
    defaultCollapsed: false,
    activeItemId: "home",
  },
  render: (args) => (
    <div className="min-h-screen bg-page">
      <Header title="платформа" showMenuButton={false} />
      <Sidebar {...args} />
      <div className="pl-[240px] pt-[76px] p-(--spacing-9)">
        <h1 className="text-primary text-xl font-semibold mb-4">
          Sidebar с asChild
        </h1>
        <p className="text-secondary">
          Пункты меню через asChild паттерн (для React Router / Next.js Link)
        </p>
      </div>
    </div>
  ),
};

export const NoTitle: Story = {
  args: {
    items: SIDEBAR_ITEMS.slice(0, 5),
    defaultCollapsed: false,
    activeItemId: "home",
  },
  render: SidebarInteractive,
};

export const LongLabels: Story = {
  args: {
    title: "Меню",
    items: [
      { id: "dashboard", icon: Home, label: "Главная панель управления" },
      {
        id: "analytics",
        icon: BarChart3,
        label: "Детальная аналитика и отчётность",
      },
      { id: "users", icon: Users, label: "Управление пользователями системы" },
      {
        id: "settings",
        icon: Settings,
        label: "Расширенные настройки приложения",
      },
    ],
    defaultCollapsed: false,
    activeItemId: "dashboard",
  },
  render: SidebarInteractive,
};
