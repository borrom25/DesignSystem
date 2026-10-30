export type CarouselOrientation = "horizontal" | "vertical";

export type CarouselItemSize = {
  width: number;
  height: number;
};

export interface CarouselContextValue {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  orientation: CarouselOrientation;
  itemsCount: number;
  isHorizontal: boolean;
  width: number;
  height: number;
  itemsSizes: CarouselItemSize[];
  setItemsSizes: React.Dispatch<React.SetStateAction<CarouselItemSize[]>>;
  autoSwipeDuration: number;
  zoomEnabled: boolean;
  isZoomed: boolean;
  setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CarouselProps {
  defaultValue?: number;
  orientation?: CarouselOrientation;
  children: React.ReactNode;
  width?: number;
  height?: number;
  autoSwipeDuration?: number;
  showIndicators?: boolean;
  zoomEnabled?: boolean;
}
