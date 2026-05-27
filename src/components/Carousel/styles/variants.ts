import { CarouselOrientation, CarouselPosition } from "../Carousel.types.ts";

export const getIndicatorVariants = (isHorizontal: boolean) => {
  if (isHorizontal)
    return new Map<boolean, string>([
      [true, "w-5 h-3 bg-brand-medium"],
      [false, "w-3 h-3 bg-brand-light"],
    ]);

  return new Map<boolean, string>([
    [true, "h-5 w-3 bg-brand-medium"],
    [false, "h-3 w-3 bg-brand-light"],
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

export const getSizeClasses = (width: number, height: number) => {
  return ` w-[${width}px] h-[${height}px]`;
};

export const containerLayoutClasses = (
  width: number,
  height: number
): Record<CarouselOrientation, Record<CarouselPosition, string>> => {
  return {
    horizontal: {
      within: `flex-col gap-4 w-[${width}px]`,
      without: "flex-row items-center gap-4 w-auto pb-6",
    },
    vertical: {
      within: `flex-row items-center gap-4 h-[${height}px] w-auto`,
      without: `flex-row items-center gap-4 h-[${height}px] w-auto`,
    },
  };
};

export const controlsLayoutClasses: Record<
  CarouselOrientation,
  Record<CarouselPosition, string>
> = {
  horizontal: {
    within:
      "absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 z-10 pointer-events-none",
    without: "contents",
  },
  vertical: {
    within:
      "absolute inset-y-0 right-4 flex flex-col items-center justify-between py-4 z-10 pointer-events-none",
    without: "flex flex-col items-center justify-between h-full py-2",
  },
};

export const indicatorsLayoutClasses: Record<
  CarouselOrientation,
  Record<CarouselPosition, string>
> = {
  horizontal: {
    within: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10",
    without:
      "absolute -bottom-6 left-1/2 -translate-x-1/2 flex justify-center w-full",
  },
  vertical: {
    within: "pointer-events-auto",
    without: "",
  },
};
