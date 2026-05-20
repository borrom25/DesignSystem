import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "lucide-react";
import { Button, InsideSidebar, Header } from "@/components";
import { Color, Size, Type } from "@/types";

const meta = {
  title: "Components/InsideSidebar",
  component: InsideSidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InsideSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div className="min-h-screen bg-page flex">
      <Header title="платформа" showMenuButton={false} />
      <InsideSidebar
        title="Title sideMenu"
        actionSlot={
          <div className="flex items-center gap-(--spacing-2)">
            <Button
              iconOnly={Plus}
              type={Type.Flat}
              color={Color.Brand}
              size={Size.Xs}
            />
            <Button
              iconOnly={Plus}
              type={Type.Flat}
              color={Color.Brand}
              size={Size.Xs}
            />
          </div>
        }
        headSlot={
          <div className="flex h-[36px] items-center justify-center rounded-[8px] border border-line bg-generic-medium text-sm text-primary">
            headSlot
          </div>
        }
        slotContent={
          <div className="flex h-full w-full items-center justify-center rounded-[8px] border border-line bg-generic-medium text-sm text-primary">
            slotContent
          </div>
        }
        bottomSlotAction={
          <>
            <Button type={Type.Flat} color={Color.Inverse} size={Size.Sm}>
              Button
            </Button>
            <Button type={Type.Fill} color={Color.Brand} size={Size.Sm}>
              Button
            </Button>
          </>
        }
      />
      <div className="pl-[280px] pt-[76px] p-(--spacing-9)">
        <h1 className="text-primary text-xl font-semibold mb-4">
          Контент страницы
        </h1>
        <p className="text-secondary">
          InsideSidebar прижат к левому краю с фиксированной шириной 280px
        </p>
      </div>
    </div>
  ),
};
