import { useCarouselContext } from "../Carousel.context.tsx";
import { IconButton } from "@/components";
import { ChevronLeft, ChevronUp } from "lucide-react";
import { Color, Size, Type } from "@/types";

export function CarouselPrevButton() {
  const { setActiveIndex, itemsCount, isHorizontal } = useCarouselContext();

  const handlePrev = () => {
    if (!itemsCount) return;
    setActiveIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
  };

  return (
    <IconButton
      size={Size.Sm}
      icon={isHorizontal ? ChevronLeft : ChevronUp}
      type={Type.Flat}
      color={Color.Secondary}
      onClick={handlePrev}
    />
  );
}
