import type { Meta, StoryObj } from "@storybook/react-vite";
import { MinusCheckBox } from "@/components/MinusCheckBox";
import type { MinusCheckBoxProps } from "@/components/MinusCheckBox";
import { Size } from "@/types";

const SIZES = Object.values(Size);

const meta = {
  title: "Components/MinusCheckBox",
  component: MinusCheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
    },
  },
} satisfies Meta<typeof MinusCheckBox>;

export default meta;
type Story = StoryObj<MinusCheckBoxProps>;

export const Playground: Story = {
  args: {
    size: Size.Md,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {SIZES.map((size) => (
        <MinusCheckBox key={size} size={size} aria-label={`Size ${size}`} />
      ))}
    </div>
  ),
};
