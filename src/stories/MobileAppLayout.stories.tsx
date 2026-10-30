import {
  AppLayout,
  Header,
  HeaderInside,
  MobileAppLayout,
  Sidebar,
  SidebarItem,
} from "@/components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart, FileText, Home, Settings, Users } from "lucide-react";
import { useState, type ComponentProps } from "react";

const sidebarItems: SidebarItem[] = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "users", icon: Users, label: "Пользователи" },
  { id: "docs", icon: FileText, label: "Документы" },
  { id: "analytics", icon: BarChart, label: "Аналитика" },
  { id: "settings", icon: Settings, label: "Настройки" },
];

const meta: Meta<ComponentProps<typeof AppLayout>> = {
  title: "Layout/MobileAppLayout",
  component: AppLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Единый Playground для AppLayout: переключение container, варианты Header/Sidebar и контент с DataTable внутри.",
      },
    },
  },
  argTypes: {
    container: {
      control: "select",
      options: ["640", "720", "fill"],
    },
  },
};

export default meta;
type Story = StoryObj<ComponentProps<typeof AppLayout>>;

interface AppLayoutStoryContentProps {
  args: ComponentProps<typeof AppLayout>;
  sidebarType?: "process" | "inside" | "main";
  headerType?: "inside" | "default";
  showSidebar?: boolean;
  showHeader?: boolean;
}

function MobileAppLayoutStoryContent({
  args,
  showSidebar = true,
  showHeader = true,
  sidebarType = "main",
  headerType = "default",
}: AppLayoutStoryContentProps) {
  const [activeMenu, setActiveMenu] = useState("home");

  const sidebar = showSidebar && (
    <Sidebar
      type={sidebarType}
      items={sidebarItems.map((item) => ({
        ...item,
        onClick: () => setActiveMenu(item.id),
      }))}
      activeItemId={activeMenu}
      title="Меню"
    />
  );

  const header =
    showHeader &&
    (headerType === "inside" ? (
      <HeaderInside title="Платформа" showNotification={false} />
    ) : (
      <Header title="Платформа" showMenuButton showNotification />
    ));

  return <MobileAppLayout {...args} header={header} sidebar={sidebar} />;
}

export const HeaderAndSidebarInside: Story = {
  args: {
    container: "fill",
    children: null,
  },
  render: (args) => (
    <MobileAppLayoutStoryContent args={args} sidebarType="inside" />
  ),
};

export const InsideHeaderSidebar: Story = {
  args: {
    container: "fill",
    children: null,
  },
  render: (args) => (
    <MobileAppLayoutStoryContent args={args} headerType="inside" />
  ),
};

export const InsideHeaderAndSidebarProcess: Story = {
  args: {
    container: "fill",
    children: null,
  },
  render: (args) => (
    <MobileAppLayoutStoryContent
      args={args}
      sidebarType="process"
      headerType="inside"
    />
  ),
};
