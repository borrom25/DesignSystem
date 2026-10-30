import type { PhotoPlaygroundState } from "./types";

export function createPhotoUsageCode(
  packageName: string,
  state: PhotoPlaygroundState
) {
  const handlers = [
    state.withDownload
      ? `        onDownload={(item) => {
          const link = document.createElement("a");
          link.href = item.src;
          link.download = item.alt ?? "photo";
          link.target = "_blank";
          link.rel = "noopener";
          link.click();
        }}`
      : "",
    state.withEdit
      ? "        onEdit={(item, index) => editPhoto(item, index)}"
      : "",
    state.withDelete
      ? `        onDelete={(_item, itemIndex) => {
          setItems((current) => current.filter((_, index) => index !== itemIndex));
        }}`
      : "",
    `        onRotate={async (item, _index, delta) => {
          return rotateAndSave(item, delta);
        }}`,
  ].filter(Boolean);

  return `import { useState } from "react";
import { Photo } from "${packageName}";
import "${packageName}/styles.css";

const items = [
  { src: "/photos/1.jpg", alt: "Озеро в горах" },
  { src: "/photos/2.jpg", alt: "Солнце над холмами" },
];

export function Example() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [photos, setItems] = useState(items);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Открыть фото
      </button>
      <Photo
        open={open}
        onOpenChange={setOpen}
        items={photos}
        index={index}
        onIndexChange={setIndex}
${handlers.join("\n")}
      />
    </>
  );
}`;
}
