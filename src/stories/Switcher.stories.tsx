import { Switcher } from "@/components";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Switcher",
  component: Switcher,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    type: {
      control: "select",
      options: ["default", "minus"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    checked: true,
  },

  render: (args) => (
    <div className="flex gap-10 flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Switcher {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <div className="flex gap-2">
          <Switcher {...args} disabled />
          <Switcher disabled checked={false} />
        </div>
      </div>
    </div>
  ),
};

export const MinusPlayground: Story = {
  args: {
    checked: false,
    defaultChecked: false,
    type: "minus",
  },

  render: (args) => (
    <div className="flex gap-10 flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-xs">default</span>
        <Switcher {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">disabled</span>
        <div className="flex gap-2">
          <Switcher {...args} disabled />
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    checked: true,
  },

  render: (args) => {
    const sizes = ["xs", "sm", "md"] as const;
    const states = [
      { label: "default", disabled: false },
      { label: "disabled", disabled: true },
    ];

    const RenderGroup = ({
      type,
      title,
    }: {
      type?: "minus";
      title: string;
    }) => (
      <div className="flex gap-10 flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        {states.map(({ label, disabled }) => (
          <div key={label} className="flex flex-col gap-2">
            <span className="text-xs">{label}</span>
            {sizes.map((size) => (
              <div
                key={size}
                className="flex gap-3 items-center justify-between w-[100px]"
              >
                <span>{size}</span>
                <Switcher
                  {...args}
                  size={size}
                  disabled={disabled}
                  type={type}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    return (
      <div className="flex gap-20">
        <RenderGroup title="Default" />
        <RenderGroup title="Minus" type="minus" />
      </div>
    );
  },
};
