import { useMemo } from "react";
import { CarouselItemSize } from "../Carousel.types.ts";
import { gapSize } from "../styles";
import { useCarouselContext } from "../Carousel.context.tsx";

export const useCarouselTrackState = () => {
  const { activeIndex, isHorizontal, itemsSizes, width, height } =
    useCarouselContext();

  const offset = useMemo(() => {
    if (!itemsSizes?.length) return 0;

    const getSize = (item: CarouselItemSize) =>
      isHorizontal ? item.width : item.height;
    const containerSize = isHorizontal ? width : height;

    let desired = 0;
    let total = 0;

    itemsSizes.forEach((size, i) => {
      const s = getSize(size);
      total += s + gapSize;
      if (i < activeIndex) desired += s + gapSize;
    });

    total -= gapSize;
    return Math.min(desired, Math.max(0, total - containerSize));
  }, [itemsSizes, activeIndex, isHorizontal, width, height]);

  const transformValue = isHorizontal
    ? `translate3d(-${offset}px, 0, 0)`
    : `translate3d(0, -${offset}px, 0)`;

  return { transformValue };
};
