export type CarouselOrientation = "horizontal" | "vertical";
export type CarouselPosition = "within" | "without";

export interface CarouselContextValue {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  orientation: CarouselOrientation;
  itemsCount: number;
  isHorizontal: boolean;
  isWithin: boolean;
  width: number;
  height: number;
}

export interface CarouselProps {
  defaultValue?: number;
  orientation?: CarouselOrientation;
  actionsPosition?: CarouselPosition;
  children: React.ReactNode;
  width?: number;
  height?: number;
}
