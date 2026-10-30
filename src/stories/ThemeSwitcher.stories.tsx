import { ThemeSwitcher, type ThemeSwitcherProps } from "@/components";
import { useTheme } from "@/providers";
import type { StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ThemeSwitcherDemo = (args: ThemeSwitcherProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      <ThemeSwitcher {...args} />
      <p className="text-sm text-secondary">
        Current theme: <span className="font-medium text-primary">{theme}</span>
      </p>
    </div>
  );
};

export const Playground: Story = {
  args: { size: "sm" },
  render: (args) => <ThemeSwitcherDemo {...args} />,
};
