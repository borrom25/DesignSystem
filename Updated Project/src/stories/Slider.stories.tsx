import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@/components";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "320px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    onValueChange: () => {},
    min: 0,
    max: 100,
    step: 1,
  },
  render: function DefaultStory() {
    const [value, setValue] = React.useState(50);

    return (
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 70,
    onValueChange: () => {},
    min: 0,
    max: 100,
    disabled: true,
  },
  render: function DisabledStory() {
    return (
      <Slider value={70} onValueChange={() => {}} min={0} max={100} disabled />
    );
  },
};

export const WithoutPopover: Story = {
  args: {
    value: 25,
    onValueChange: () => {},
    min: 0,
    max: 100,
    showValuePopover: false,
  },
  render: function WithoutPopoverStory() {
    const [value, setValue] = React.useState(25);

    return (
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        showValuePopover={false}
      />
    );
  },
};

export const CustomRange: Story = {
  args: {
    value: 150,
    onValueChange: () => {},
    min: 0,
    max: 500,
    step: 10,
  },
  render: function CustomRangeStory() {
    const [value, setValue] = React.useState(150);

    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm text-complementary">
          Диапазон 0-500, шаг 10: {value}
        </span>
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={500}
          step={10}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  args: {
    value: 40,
    onValueChange: () => {},
  },
  render: function AllStatesStory() {
    const [value1, setValue1] = React.useState(40);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(100);

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-complementary">Default: {value1}</span>
          <Slider value={value1} onValueChange={setValue1} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-complementary">
            Min value: {value2}
          </span>
          <Slider value={value2} onValueChange={setValue2} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-complementary">
            Max value: {value3}
          </span>
          <Slider value={value3} onValueChange={setValue3} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-complementary">Disabled: 50</span>
          <Slider value={50} onValueChange={() => {}} disabled />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-complementary">
            Always show popover: {value1}
          </span>
          <Slider value={value1} onValueChange={setValue1} alwaysShowPopover />
        </div>
      </div>
    );
  },
};
