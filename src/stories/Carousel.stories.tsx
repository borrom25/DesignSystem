import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@/components";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      table: { defaultValue: { summary: "horizontal" } },
    },
    actionsPosition: {
      control: { type: "select" },
      options: ["within", "without"],
    },
    defaultValue: {
      control: { type: "number", min: 0 },
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Playground: Story = {
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Track>
        <Carousel.Item className={"bg-generic"}>1</Carousel.Item>
        <Carousel.Item className={"bg-warning-heavy"}>2</Carousel.Item>
        <Carousel.Item className={"bg-action-heavy"}>3</Carousel.Item>
        <Carousel.Item className={"bg-action-heavy-hover"}>4</Carousel.Item>
        <Carousel.Item className={"bg-brand-medium"}>5</Carousel.Item>
        <Carousel.Item className={"bg-fuchsia-300"}>6</Carousel.Item>
        <Carousel.Item className={"bg-danger-heavy"}>7</Carousel.Item>
        <Carousel.Item className={"bg-radial"}>8</Carousel.Item>
        <Carousel.Item className={"bg-olive-500"}>9</Carousel.Item>
        <Carousel.Item className={"bg-secondary"}>10</Carousel.Item>
        <Carousel.Item className={"bg-hint"}>11</Carousel.Item>
        <Carousel.Item className={"bg-emerald-300"}>12</Carousel.Item>
        <Carousel.Item className={"bg-danger-light"}>13</Carousel.Item>
        <Carousel.Item className={"bg-blend-saturation"}>14</Carousel.Item>
      </Carousel.Track>
      <Carousel.PrevButton />
      <Carousel.NextButton />
      <Carousel.Indicators />
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <Carousel {...args}>
      <Carousel.Track>
        <Carousel.Item className={"bg-generic"}>1</Carousel.Item>
        <Carousel.Item className={"bg-warning-heavy"}>2</Carousel.Item>
        <Carousel.Item className={"bg-action-heavy"}>3</Carousel.Item>
        <Carousel.Item className={"bg-action-heavy-hover"}>4</Carousel.Item>
        <Carousel.Item className={"bg-brand-medium"}>5</Carousel.Item>
        <Carousel.Item className={"bg-fuchsia-300"}>6</Carousel.Item>
      </Carousel.Track>
      <Carousel.PrevButton />
      <Carousel.NextButton />
      <Carousel.Indicators />
    </Carousel>
  ),
};
