import type { Meta, StoryObj } from "@storybook/react-vite";
import { Line } from "@/components/Line";
import { Button } from "@/components";

const meta = {
  title: "Components/Line",
  component: Line,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "background", "border"],
    },
    position: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    labelGroup: {
      control: "text",
    },
    leftSlot: {
      control: "text",
    },
    rightSlot: {
      control: "text",
    },
    src: {
      control: "text",
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Фамилия И. О.",
    subtitle: "Изменения успешно сохранены и уже доступны в системе.",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=size-48",
    leftSlot: (
      <Button color="brand" size="sm">
        leftSlot
      </Button>
    ),
    rightSlot: (
      <Button color="positive" size="sm">
        rightSlot
      </Button>
    ),
    labelGroup: ["label 1", "label 2", "label 3"],
    type: "background",
  },

  render: (args) => (
    <div className="flex gap-12 flex-col">
      <span className="text-xl font-bold">Horizontal</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled />
      </div>
      <hr className="border-t border-gray-300" />
      <span className="text-xl font-bold">Vertical</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} position="vertical" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled position="vertical" />
      </div>
    </div>
  ),
};

export const PlaygroundBackground: Story = {
  args: {
    title: "Фамилия И. О.",
    subtitle: "Изменения успешно сохранены и уже доступны в системе.",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=size-48",
    leftSlot: (
      <Button color="brand" size="sm">
        leftSlot
      </Button>
    ),
    rightSlot: (
      <Button color="positive" size="sm">
        rightSlot
      </Button>
    ),
    labelGroup: ["label 1", "label 2", "label 3"],
    type: "background",
  },

  render: (args) => (
    <div className="flex gap-12 flex-col">
      <span className="text-xl font-bold">Horizontal</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled />
      </div>
      <hr className="border-t border-gray-300" />
      <span className="text-xl font-bold">Vertical</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} position="vertical" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled position="vertical" />
      </div>
    </div>
  ),
};

export const PlaygroundBorder: Story = {
  args: {
    title: "Фамилия И. О.",
    subtitle: "Изменения успешно сохранены и уже доступны в системе.",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=size-48",
    leftSlot: (
      <Button color="brand" size="sm">
        leftSlot
      </Button>
    ),
    rightSlot: (
      <Button color="positive" size="sm">
        rightSlot
      </Button>
    ),
    labelGroup: ["label 1", "label 2", "label 3"],
    type: "border",
  },

  render: (args) => (
    <div className="flex gap-12 flex-col">
      <span className="text-xl font-bold">Horizontal</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled />
      </div>
      <hr className="border-t border-gray-300" />
      <span className="text-xl font-bold">Vertical</span>
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Line {...args} position="vertical" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <Line {...args} disabled position="vertical" />
      </div>
    </div>
  ),
};
