import { CarouselContext } from "./Carousel.context.tsx";
import { CarouselProps } from "./Carousel.types.ts";
import {
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselTrack,
} from "./ui";
import { useState } from "react";
import { useCarouselState } from "./hooks/useCarouselState";
import { cn } from "@/utils";
import { carouselStyles } from "./styles";

function CarouselRoot({
  defaultValue = 0,
  orientation = "horizontal",
  children,
  actionsPosition = "within",
  width = 400,
  height = 160,
}: CarouselProps) {
  const {
    itemsCount,
    trackChildren,
    nextButtonChildren,
    prevButtonChildren,
    indicatorsChildren,
  } = useCarouselState({ children });

  const [activeIndex, setActiveIndex] = useState(defaultValue);
  const isHorizontal = orientation === "horizontal";
  const isWithin = actionsPosition === "within";

  const containerStyle = carouselStyles.containerLayout(width, height)[
    orientation
  ][actionsPosition];
  const controlsStyle =
    carouselStyles.controlsLayout[orientation][actionsPosition];
  const indicatorsStyle =
    carouselStyles.indicatorsLayout[orientation][actionsPosition];

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        orientation,
        itemsCount,
        isHorizontal,
        isWithin,
        width,
        height,
      }}
    >
      <div className={cn(carouselStyles.base, containerStyle)}>
        {isHorizontal && !isWithin && prevButtonChildren}

        <div
          className={cn(
            carouselStyles.container,
            carouselStyles.size(width, height)
          )}
        >
          {trackChildren}

          {isWithin && (
            <>
              <div className={controlsStyle}>
                <div className={carouselStyles.button}>
                  {prevButtonChildren}
                </div>
                {!isHorizontal && (
                  <div className={indicatorsStyle}>{indicatorsChildren}</div>
                )}
                <div className={carouselStyles.button}>
                  {nextButtonChildren}
                </div>
              </div>
              {isHorizontal && (
                <div className={indicatorsStyle}>{indicatorsChildren}</div>
              )}
            </>
          )}
        </div>

        {!isWithin &&
          (isHorizontal ? (
            <>
              {nextButtonChildren}
              <div className={indicatorsStyle}>{indicatorsChildren}</div>
            </>
          ) : (
            <div className={controlsStyle}>
              {prevButtonChildren}
              {indicatorsChildren}
              {nextButtonChildren}
            </div>
          ))}
      </div>
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
