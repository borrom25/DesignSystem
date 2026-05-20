import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Segmented } from "@/components";
import { SegmentedProps } from "@/components/Segmented/Segmented.types";

const meta = {
  title: "Components/Segmented",
  component: Segmented,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    shape: {
      control: "radio",
      options: ["default", "round"],
    },
    defaultValue: {
      control: "text",
    },
    value: {
      control: "text",
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: SegmentedProps["options"] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Pineapple", value: "pineapple" },
];

const withDisabledOptions: SegmentedProps["options"] = [
  { label: "Active", value: "active" },
  { label: "Disabled", value: "disabled", disabled: true },
  { label: "Also active", value: "also" },
];

export const Playground: Story = {
  args: {
    options: defaultOptions,
    position: "horizontal",
    shape: "default",
    defaultValue: "apple",
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue);

    return (
      <div className="flex flex-col items-center gap-4">
        <Segmented {...args} value={value} onChange={setValue} />
        <p className="text-sm text-gray-500">
          Selected: <span className="font-medium">{value}</span>
        </p>
      </div>
    );
  },
};

export const Vertical: Story = {
  args: {
    options: defaultOptions,
    position: "vertical",
    shape: "default",
    defaultValue: "banana",
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue);
    return (
      <div className="flex flex-col items-center gap-4">
        <Segmented {...args} value={value} onChange={setValue} />
        <p className="text-sm text-gray-500 w-[200px]">
          Selected: <span className="font-medium]">{value}</span>
        </p>
      </div>
    );
  },
};

export const RoundShape: Story = {
  args: {
    options: defaultOptions,
    position: "horizontal",
    shape: "round",
    defaultValue: "pineapple",
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue);
    return <Segmented {...args} value={value} onChange={setValue} />;
  },
};

export const WithDisabledItems: Story = {
  args: {
    options: withDisabledOptions,
    position: "horizontal",
    shape: "default",
    defaultValue: "active",
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue);
    return <Segmented {...args} value={value} onChange={setValue} />;
  },
};

export const Controlled: Story = {
  args: {
    options: defaultOptions,
    position: "horizontal",
    shape: "default",
    value: "apple",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div className="flex flex-col gap-4">
        <Segmented {...args} value={value} onChange={setValue} />
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => setValue("banana")}
        >
          Switch to Banana
        </button>
      </div>
    );
  },
};
