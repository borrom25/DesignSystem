import type { Meta, StoryObj } from "@storybook/react-vite";
import { Block, BlockVariant, Button, Label } from "@/components";
import { Color, Size, Type } from "@/types";

const meta = {
  title: "Components/Block",
  component: Block,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Чистый контейнер, который рендерит только div. Поддерживает вариант фона через variant, остальная стилизация задается снаружи.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    size: { control: "select", options: Object.values(Size) },
    variant: { control: "select", options: Object.values(BlockVariant) },
    className: { control: "text" },
  },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Md,
    variant: BlockVariant.Basic,
    children: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-primary text-base font-medium">
            Кастомный контент
          </h3>
          <Label>Draft</Label>
        </div>
        <p className="text-secondary text-sm">
          Block выступает только как визуальная обертка, а все содержимое вы
          передаете сами через children.
        </p>
        <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
          Действие
        </Button>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-4 rounded-scale-3xl bg-page p-6">
      <Block variant={BlockVariant.Basic}>
        <span className="text-secondary text-sm">
          Basic задается через variant
        </span>
      </Block>
      <Block variant={BlockVariant.Secondary}>
        <span className="text-secondary text-sm">
          Secondary задается через variant
        </span>
      </Block>
    </div>
  ),
};
