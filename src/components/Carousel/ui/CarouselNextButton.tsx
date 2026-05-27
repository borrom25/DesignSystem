import { useCarouselContext } from "../Carousel.context.tsx";
import { IconButton } from "@/components";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Size, Type } from "@/types";

export function CarouselNextButton() {
  const { setActiveIndex, itemsCount, isHorizontal, isWithin } =
    useCarouselContext();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % itemsCount);
  };

  return (
    <IconButton
      size={Size.Md}
      icon={isHorizontal ? ChevronRight : ChevronDown}
      type={isWithin ? Type.Flat : Type.Ghost}
      onClick={handleNext}
    />
  );
}
