import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Plug } from "@/components";
import { Color, Size, Type } from "@/types";

const meta = {
  title: "Components/Plug",
  component: Plug,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageItem: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    title: {
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    subtitle: {
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    actionSlot: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Plug>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Доступ закрыт",
    subtitle: "Заполнение документов без реферальной ссылки недосупно",
    imageItem: (
      <img
        src="https://img.freepik.com/premium-vector/forbidden-stampforbidden-grunge-square-sign_822766-11341.jpg"
        alt=""
        style={{ width: "300px", height: "150px" }}
      />
    ),
    actionSlot: (
      <>
        <Button color={Color.Info} type={Type.Flat} size={Size.Sm}>
          Добавить
        </Button>
        <Button color={Color.Brand} type={Type.Fill} size={Size.Sm}>
          Добавить
        </Button>
      </>
    ),
  },
};
