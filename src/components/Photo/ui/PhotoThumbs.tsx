import { cn } from "@/utils";
import type { PhotoItem } from "../Photo.types";
import { photoStyles } from "../styles";

export function PhotoThumbs({
  items,
  index,
  onSelect,
}: {
  items: PhotoItem[];
  index: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className={photoStyles.thumbs}
      onClick={(event) => event.stopPropagation()}
    >
      {items.map((photo, photoIndex) => {
        const selected = photoIndex === index;

        return (
          <button
            key={`${photo.src}-${photoIndex}`}
            type="button"
            className={cn(
              photoStyles.thumb,
              selected ? photoStyles.thumbSelected : photoStyles.thumbIdle
            )}
            aria-label={photo.alt ?? `Фото ${photoIndex + 1}`}
            aria-current={selected ? "true" : undefined}
            onClick={() => onSelect(photoIndex)}
          >
            <img
              src={photo.src}
              alt=""
              draggable={false}
              className={photoStyles.thumbImage}
            />
          </button>
        );
      })}
    </div>
  );
}
