import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { BubbleImageProps } from "../Bubble.types.ts";
import { useBubbleContext } from "../Bubble.context.ts";

export function BubbleImage({
  className,
  wrapperClassName,
  alt = "Bubble image",
  ...restProps
}: BubbleImageProps) {
  const { size, standaloneImage } = useBubbleContext();

  const imageStyles = {
    wrapper: standaloneImage
      ? bubbleStyles.image.standaloneWrapper
      : bubbleStyles.image.wrapper,
    size: standaloneImage
      ? bubbleStyles.image.standaloneSize[size]
      : bubbleStyles.image.bleed[size],
    image: standaloneImage
      ? bubbleStyles.image.standaloneImage
      : bubbleStyles.image.inlineImage,
  };

  return (
    <div
      className={cn(imageStyles.size, imageStyles.wrapper, wrapperClassName)}
    >
      <img
        alt={alt}
        className={cn(bubbleStyles.image.image, imageStyles.image, className)}
        {...restProps}
      />
    </div>
  );
}
