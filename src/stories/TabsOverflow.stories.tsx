import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Counter, TabsOverflow } from "@/components";
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
    counter: <Counter count={12} size={Size.Xs} />,
  },
  {
    value: "students",
    label: "Студенты",
    counter: <Counter count={248} size={Size.Xs} />,
  },
  {
    value: "payments",
    label: "Оплаты",
    counter: <Counter count={4} size={Size.Xs} />,
  },
  {
    value: "documents",
    label: "Документы",
    counter: <Counter count={18} size={Size.Xs} />,
  },
  {
    value: "schedule",
    label: "Расписание",
    counter: <Counter count={2} size={Size.Xs} />,
  },
  { value: "settings", label: "Настройки" },
  {
    value: "history",
    label: "История",
    counter: <Counter count={103} size={Size.Xs} />,
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
