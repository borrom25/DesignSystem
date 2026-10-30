import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Photo, Button } from "@/components";
import { Color, Type } from "@/types";
import { rotatePhotoSrc } from "@/components/Photo/Photo.utils";
import { photoDemoItems } from "./photoItems";

const meta = {
  title: "Components/Photo",
  component: Photo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Photo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    open: false,
    items: photoDemoItems,
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [photos, setPhotos] = useState(photoDemoItems);

    return (
      <>
        <Button
          type={Type.Flat}
          color={Color.Secondary}
          onClick={() => setOpen(true)}
        >
          Открыть фото
        </Button>
        <Photo
          open={open}
          onOpenChange={setOpen}
          items={photos}
          index={index}
          onIndexChange={setIndex}
          onDownload={(item) => {
            const link = document.createElement("a");
            link.href = item.src;
            link.download = item.alt ?? "photo";
            link.target = "_blank";
            link.rel = "noopener";
            link.click();
          }}
          onEdit={() => undefined}
          onDelete={(_item, itemIndex) => {
            setPhotos((current) =>
              current.filter((_, currentIndex) => currentIndex !== itemIndex)
            );
            setIndex((current) => Math.max(0, current - 1));
          }}
          onRotate={async (item, _index, delta) => {
            const src = await rotatePhotoSrc(item.src, delta);
            const image = new Image();
            image.src = src;
            try {
              await image.decode();
            } catch {
              return { ...item, src };
            }
            return { ...item, src };
          }}
        />
      </>
    );
  },
};
