import { createContext, useContext } from "react";
import type { CarouselContextValue } from "./Carousel.types.ts";

export const CarouselContext = createContext<CarouselContextValue>({
  activeIndex: 0,
  setActiveIndex: (value) => value,
  orientation: "horizontal",
  itemsCount: 0,
  isHorizontal: true,
  isWithin: true,
  width: 0,
  height: 0,
});

export function useCarouselContext(): CarouselContextValue {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("useSelectContext must be used within <Carousel>");
  return ctx;
}
