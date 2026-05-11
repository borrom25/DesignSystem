import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressPie } from "@/components/ProgressPie";
import type {
  ProgressPieColors,
  ProgressPieProps,
  ProgressPieSize,
} from "@/components/ProgressPie";

const colors: ProgressPieColors[] = [
  "brand",
  "action",
  "danger",
  "positive",
  "warning",
  "info",
];

const sizes: ProgressPieSize[] = ["xs", "sm", "md", "lg"];

const baseArgs: ProgressPieProps = {
  size: "md",
  progress: 65,
  color: "brand",
};

const meta = {
  title: "Components/ProgressPie",
  component: ProgressPie,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "800px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizes,
      table: { type: { summary: "ProgressPieSize" } },
    },
    progress: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "Процент прогресса (0..100)",
      table: { type: { summary: "number | undefined" } },
    },
    color: {
      control: "select",
      options: colors,
      description: "Цветовой вариант",
      table: { type: { summary: "ProgressPieColors" } },
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ProgressPie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...baseArgs,
  },
};
