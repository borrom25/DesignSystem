import { CarouselOrientation } from "../Carousel.types.ts";

export const getIndicatorVariants = (isHorizontal: boolean) => {
  if (isHorizontal)
    return new Map<boolean, string>([
      [true, "w-7 h-3 bg-inverse-heavy"],
      [false, "w-3 h-3 bg-inverse-medium"],
    ]);

  return new Map<boolean, string>([
    [true, "h-7 w-3 bg-inverse-heavy"],
    [false, "h-3 w-3 bg-inverse-medium"],
  ]);
};

export const trackOrientationClasses: Record<CarouselOrientation, string> = {
  horizontal: "flex-row w-full h-auto",
  vertical: "flex-col w-auto h-full",
};

export const indicatorsOrientationClasses: Record<CarouselOrientation, string> =
  {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

export const containerLayoutClasses = (
  height: number
): Record<CarouselOrientation, string> => {
  return {
    horizontal: "flex-col items-center gap-6 w-auto",
    vertical: `flex-row items-center gap-4 h-[${height}px] w-auto`,
  };
};

export const controlsLayoutClasses: Record<CarouselOrientation, string> = {
  horizontal: "flex w-full items-center",
  vertical: "flex flex-col items-center h-full gap-3",
};

export const gapSize = 12;
