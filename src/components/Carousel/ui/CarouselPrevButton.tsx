import { useCarouselContext } from "../Carousel.context.tsx";
import { IconButton } from "@/components";
import { ChevronLeft, ChevronUp } from "lucide-react";
import { Size, Type } from "@/types";

export function CarouselPrevButton() {
  const { setActiveIndex, itemsCount, isHorizontal, isWithin } =
    useCarouselContext();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
  };

  return (
    <IconButton
      size={Size.Md}
      icon={isHorizontal ? ChevronLeft : ChevronUp}
      type={isWithin ? Type.Flat : Type.Ghost}
      onClick={handlePrev}
    />
  );
}
