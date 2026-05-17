import { bubbleStyles } from "../styles";
import { BubbleImageProps } from "../Bubble.types.ts";
import { Button } from "@/components";
import { ChevronDown } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { useBubbleImageState } from "../hooks/useBubbleImageState.ts";
import { useBubbleContext } from "../Bubble.context.ts";
import { ImageModal } from "@/shared/modals";
import { useState } from "react";
import { BubbleImageList } from "./BubbleImageList.tsx";

export function BubbleImage({
  className,
  wrapperClassName,
  alt = "Bubble image",
  imageUrls,
  ...restProps
}: BubbleImageProps) {
  const imageStyles = bubbleStyles.image;
  const [openImage, setOpenImage] = useState<string | null>(null);
  const { size, setStandaloneImage } = useBubbleContext();
  const { displayed, gridCols, total, layout, showAll, setShowAll } =
    useBubbleImageState({
      imageUrls,
      setStandaloneImage,
    });

  return (
    <>
      <div className={imageStyles.container}>
        <BubbleImageList
          setOpenImage={setOpenImage}
          size={size}
          layout={layout}
          className={className}
          wrapperClassName={wrapperClassName}
          displayed={displayed}
          total={total}
          gridCols={gridCols}
          alt={alt}
          {...restProps}
        />

        {showAll && (
          <Button
            iconRight={ChevronDown}
            color={Color.Inverse}
            type={Type.Flat}
            size={Size.Xs}
            className={imageStyles.buttonAll}
            onClick={() => setShowAll(true)}
          >
            Показать еще
          </Button>
        )}
      </div>
      <ImageModal
        src={openImage}
        disabled
        isOpen={!!openImage}
        onClose={() => setOpenImage(null)}
      />
    </>
  );
}
