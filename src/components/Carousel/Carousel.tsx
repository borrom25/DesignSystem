import { CarouselContext } from "./Carousel.context.tsx";
import { CarouselItemSize, CarouselProps } from "./Carousel.types.ts";
import {
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselTrack,
} from "./ui";
import { isValidElement, useCallback, useState, type ReactNode } from "react";
import { useCarouselState } from "./hooks/useCarouselState";
import { cn } from "@/utils";
import { carouselStyles } from "./styles";
import { ImageModal } from "@/shared/modals";
import { findItemImageSrc } from "./utils/findItemImageSrc";

function getItemContent(item: ReactNode) {
  if (!isValidElement<{ children?: ReactNode; className?: string }>(item)) {
    return { src: undefined, children: null, className: undefined };
  }

  return {
    src: findItemImageSrc(item.props.children),
    children: item.props.children,
    className: item.props.className,
  };
}

function CarouselRoot({
  defaultValue = 0,
  orientation = "horizontal",
  children,
  width = 400,
  height = 160,
  autoSwipeDuration = 0,
  showIndicators = false,
  zoomEnabled = true,
}: CarouselProps) {
  const {
    itemsCount,
    itemChildren,
    trackChildren,
    nextButtonChildren,
    prevButtonChildren,
    indicatorsChildren,
  } = useCarouselState({ children });

  const [activeIndex, setActiveIndex] = useState(defaultValue);
  const [itemsSizes, setItemsSizes] = useState<CarouselItemSize[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);
  const isHorizontal = orientation === "horizontal";
  const canNavigate = itemsCount > 1;

  const handlePrev = useCallback(() => {
    if (!itemsCount) return;
    setActiveIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
  }, [itemsCount]);

  const handleNext = useCallback(() => {
    if (!itemsCount) return;
    setActiveIndex((prev) => (prev + 1) % itemsCount);
  }, [itemsCount]);

  const currentItem = getItemContent(itemChildren[activeIndex]);

  const controlsStyle = cn(
    carouselStyles.controlsLayout[orientation],
    showIndicators ? "justify-between" : "justify-center"
  );
  const containerStyle = carouselStyles.containerLayout(height)[orientation];

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        orientation,
        itemsCount,
        isHorizontal,
        width,
        height,
        itemsSizes,
        setItemsSizes,
        autoSwipeDuration,
        zoomEnabled,
        isZoomed,
        setIsZoomed,
      }}
    >
      <div className={cn(carouselStyles.base, containerStyle)}>
        <div
          className={carouselStyles.container}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {trackChildren}
        </div>

        {isHorizontal ? (
          <div className={controlsStyle}>
            {showIndicators && indicatorsChildren}
            <div className={carouselStyles.controls}>
              {prevButtonChildren}
              {nextButtonChildren}
            </div>
          </div>
        ) : (
          <div className={controlsStyle}>
            {prevButtonChildren}
            {showIndicators && indicatorsChildren}
            {nextButtonChildren}
          </div>
        )}
      </div>

      {zoomEnabled && (
        <ImageModal
          src={currentItem.src}
          isOpen={isZoomed}
          onClose={() => setIsZoomed(false)}
          disabled
          onPrev={canNavigate ? handlePrev : undefined}
          onNext={canNavigate ? handleNext : undefined}
        >
          {!currentItem.src && (
            <div className={currentItem.className}>{currentItem.children}</div>
          )}
        </ImageModal>
      )}
    </CarouselContext.Provider>
  );
}

export const Carousel = Object.assign(CarouselRoot, {
  Track: CarouselTrack,
  Item: CarouselItem,
  PrevButton: CarouselPrevButton,
  NextButton: CarouselNextButton,
  Indicators: CarouselIndicators,
});
