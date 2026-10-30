import { useCarouselContext } from "../Carousel.context.tsx";
import { IconButton } from "@/components";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { useCallback, useEffect } from "react";

export function CarouselNextButton() {
  const {
    setActiveIndex,
    itemsCount,
    isHorizontal,
    autoSwipeDuration,
    isZoomed,
  } = useCarouselContext();

  const handleNext = useCallback(() => {
    if (!itemsCount) return;
    setActiveIndex((prev) => (prev + 1) % itemsCount);
  }, [itemsCount, setActiveIndex]);

  useEffect(() => {
    if (!autoSwipeDuration || autoSwipeDuration <= 0 || isZoomed) return;

    const id = setInterval(handleNext, autoSwipeDuration);

    return () => clearInterval(id);
  }, [autoSwipeDuration, handleNext, isZoomed]);

  return (
    <IconButton
      size={Size.Sm}
      icon={isHorizontal ? ChevronRight : ChevronDown}
      type={Type.Flat}
      color={Color.Secondary}
      onClick={handleNext}
    />
  );
}
