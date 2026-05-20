import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Home,
  Settings,
  Users,
  FolderOpen,
  FileText,
  Bell,
} from "lucide-react";
import { Cascader, Button } from "@/components";
import { Color, Type } from "@/types";

const meta: Meta<typeof Cascader> = {
  title: "Components/Cascader",
  component: Cascader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Cascader - компонент каскадного меню, который отображает вложенную структуру навигации или настроек в виде выпадающего дерева",
      },
    },
  },
  argTypes: {
    options: { control: "object" },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

const defaultOptions = [
  { id: "home", icon: Home, label: "Главная" },
  { id: "settings", icon: Settings, label: "Настройки", nested: [] },
  {
    id: "users",
    icon: Users,
    label: "Пользователи",
    nested: [
      { id: "profiles", icon: FileText, label: "Профили" },
      { id: "roles", icon: FolderOpen, label: "Роли" },
    ],
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Уведомления",
    disabled: true,
  },
];

export const Playground: Story = {
  args: {
    options: defaultOptions,
    children: (
      <Button color={Color.Brand} type={Type.Fill}>
        Открыть меню
      </Button>
    ),
  },
};
