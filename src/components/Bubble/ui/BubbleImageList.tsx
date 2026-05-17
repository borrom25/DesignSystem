import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { BubbleImageItemProps } from "../Bubble.types.ts";

export function BubbleImageList({
  displayed,
  gridCols,
  layout,
  wrapperClassName,
  total,
  setOpenImage,
  alt,
  className,
  size,
  ...restProps
}: BubbleImageItemProps) {
  const imageStyles = bubbleStyles.image;

  return (
    <div className={cn(imageStyles.grid, gridCols)}>
      {displayed?.map((src, i) => {
        const cfg = layout[i];
        return (
          <div
            key={`${src}-${i}`}
            className={cn(
              cfg?.aspect,
              imageStyles.wrapper,
              wrapperClassName,
              total === 1 && imageStyles.size[size]
            )}
            style={{ gridColumn: `span ${cfg?.colSpan || 1}` }}
          >
            <img
              alt={alt}
              src={src}
              onClick={() => setOpenImage(src)}
              className={cn(
                cfg?.img,
                imageStyles.base,
                imageStyles.image,
                className
              )}
              {...restProps}
            />
          </div>
        );
      })}
    </div>
  );
}
