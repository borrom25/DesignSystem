import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "lucide-react";
import { AppLayout, Button, InsideSidebar, HeaderInside } from "@/components";
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
    <AppLayout
      header={<HeaderInside title="Платформа" showThemeSwitcher />}
      sidebar={
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
              <Button type={Type.Flat} color={Color.Secondary} size={Size.Sm}>
                Button
              </Button>
              <Button type={Type.Fill} color={Color.Brand} size={Size.Sm}>
                Button
              </Button>
            </>
          }
        />
      }
    >
      <div>
        <h1 className="text-primary text-xl font-semibold mb-4">
          Контент страницы
        </h1>
        <p className="text-secondary">
          InsideSidebar шириной 300px с внешним отступом и скруглениями.
        </p>
      </div>
    </AppLayout>
  ),
};
