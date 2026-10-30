import { useState } from "react";
import { Photo } from "@/components";
import { rotatePhotoSrc } from "@/components/Photo/Photo.utils";
import { PHOTO_DEMO_ITEMS } from "./items";
import type { PhotoPlaygroundState } from "./types";

export function PhotoPreview(state: PhotoPlaygroundState) {
  return <PhotoPreviewBody state={state} />;
}

function PhotoPreviewBody({ state }: { state: PhotoPlaygroundState }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(PHOTO_DEMO_ITEMS);

  return (
    <div className="flex max-w-full flex-col items-center gap-5">
      <div className="flex max-w-[280px] flex-wrap justify-center gap-4">
        {items.map((item, itemIndex) => (
          <button
            key={itemIndex}
            type="button"
            className="size-[72px] shrink-0 overflow-hidden rounded-scale-xl"
            onClick={() => {
              setIndex(itemIndex);
              setOpen(true);
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="size-full object-cover"
            />
          </button>
        ))}
      </div>
      <Photo
        open={open}
        onOpenChange={setOpen}
        items={items}
        index={index}
        onIndexChange={setIndex}
        onDownload={
          state.withDownload
            ? (item) => {
                const link = document.createElement("a");
                link.href = item.src;
                link.download = item.alt ?? "photo";
                link.target = "_blank";
                link.rel = "noopener";
                link.click();
              }
            : undefined
        }
        onEdit={state.withEdit ? () => undefined : undefined}
        onDelete={
          state.withDelete
            ? (_item, itemIndex) => {
                setItems((current) =>
                  current.filter(
                    (_, currentIndex) => currentIndex !== itemIndex
                  )
                );
                setIndex((current) =>
                  Math.max(0, Math.min(current, items.length - 2))
                );
                if (items.length <= 1) setOpen(false);
              }
            : undefined
        }
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
    </div>
  );
}
