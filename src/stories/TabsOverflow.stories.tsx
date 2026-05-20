import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Bell, FileText, Settings, Users } from "lucide-react";
import { TabsOverflow } from "@/components";
import type { TabsOverflowItem, TabsOverflowProps } from "@/components";
import { Size } from "@/types";

const sizes = Object.values(Size);

const items: TabsOverflowItem<string>[] = [
  { value: "overview", label: "Обзор" },
  { value: "students", label: "Студенты" },
  { value: "payments", label: "Оплаты" },
  { value: "documents", label: "Документы" },
  { value: "schedule", label: "Расписание" },
  { value: "settings", label: "Настройки" },
  { value: "history", label: "История" },
];

const itemsWithCounter: TabsOverflowItem<string>[] = [
  {
    value: "overview",
    label: "Обзор",
    counterProps: { count: 12 },
  },
  {
    value: "students",
    label: "Студенты",
    counterProps: { count: 248 },
  },
  {
    value: "payments",
    label: "Оплаты",
    counterProps: { count: 4 },
  },
  {
    value: "documents",
    label: "Документы",
    counterProps: { count: 18 },
  },
  {
    value: "schedule",
    label: "Расписание",
    counterProps: { count: 2 },
  },
  { value: "settings", label: "Настройки" },
  {
    value: "history",
    label: "История",
    counterProps: { count: 103 },
  },
];

const itemsWithSlots: TabsOverflowItem<string>[] = [
  {
    value: "overview",
    label: "Обзор",
    leftSlot: <FileText className="size-4" />,
  },
  {
    value: "students",
    label: "Студенты",
    leftSlot: <Users className="size-4" />,
    counterProps: { count: 248 },
  },
  {
    value: "documents",
    label: "Документы",
    rightSlot: <Bell className="size-4" />,
    counterProps: { count: 18 },
  },
  {
    value: "settings",
    label: "Настройки",
    leftSlot: <Settings className="size-4" />,
  },
];

const meta = {
  title: "Components/TabsOverflow",
  component: TabsOverflow,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Составной компонент табов с responsive overflow. Если элементы не помещаются по ширине контейнера, скрытые табы попадают в пункт `Еще`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: sizes,
      description: "Размер табов",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить весь компонент",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    moreLabel: {
      control: "text",
      description: "Текст кнопки overflow",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Еще" },
      },
    },
  },
} satisfies Meta<TabsOverflowProps<string>>;

export default meta;
type Story = StoryObj<TabsOverflowProps<string>>;

export const Playground: Story = {
  args: {
    size: Size.Md,
    items,
    moreLabel: "Еще",
  },
  render: (args) => {
    const [value, setValue] = useState("documents");

    return (
      <div className="w-[360px]">
        <TabsOverflow {...args} value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const Overflow: Story = {
  args: {
    size: Size.Sm,
    items,
    moreLabel: "Еще",
  },
  render: (args) => {
    const [value, setValue] = useState("history");

    return (
      <div className="w-[240px]">
        <TabsOverflow {...args} value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const WithCounter: Story = {
  args: {
    size: Size.Sm,
    items: itemsWithCounter,
    moreLabel: "Еще",
  },
  render: (args) => {
    const [value, setValue] = useState("students");

    return (
      <div className="w-[280px]">
        <TabsOverflow {...args} value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const WithSlots: Story = {
  args: {
    size: Size.Sm,
    items: itemsWithSlots,
    moreLabel: "Еще",
  },
  render: (args) => {
    const [value, setValue] = useState("students");

    return (
      <div className="w-[280px]">
        <TabsOverflow {...args} value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const DisabledStates: Story = {
  args: {
    size: Size.Xs,
    moreLabel: "Еще",
    items: [
      { value: "overview", label: "Обзор" },
      { value: "students", label: "Студенты", disabled: true },
      { value: "payments", label: "Оплаты" },
      { value: "documents", label: "Документы" },
      { value: "schedule", label: "Расписание", disabled: true },
      { value: "settings", label: "Настройки" },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState("settings");

    return (
      <div className="w-[220px]">
        <TabsOverflow {...args} value={value} onValueChange={setValue} />
      </div>
    );
  },
};
