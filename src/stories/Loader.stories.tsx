import { Loader, LoaderVariantType } from "@/components/Loader";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Loader,
  title: "Components/Loader",
  argTypes: {
    variant: {
      options: LoaderVariantType,
      control: { type: "select" },
    },
    size: { control: { type: "number" } },
    ariaLabel: { control: { type: "text" } },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

export const Colors: Story = {
  args: { size: 32 },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: 40,
        alignItems: "center",
        background: "#1e1e1e",
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Loader {...args} variant="default" />
        <span style={{ color: "#fff", fontSize: 14 }}>Default</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Loader {...args} variant="white" />
        <span style={{ color: "#fff", fontSize: 14 }}>White</span>
      </div>
    </div>
  ),
};
