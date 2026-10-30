import {
  Children,
  cloneElement,
  isValidElement,
  type MouseEvent,
  type ReactElement,
} from "react";
import { useCarouselContext } from "../Carousel.context.tsx";
import { carouselStyles } from "../styles";
import { cn } from "@/utils";
import { useCarouselTrackState } from "../hooks/useCarouselTrackState.ts";
import { CarouselItem } from "./CarouselItem";

interface CarouselTrackProps {
  children?: React.ReactNode;
}

const INTERACTIVE_SELECTOR = "button, a, input, textarea, select";

export function CarouselTrack({ children }: CarouselTrackProps) {
  const { orientation, zoomEnabled, setActiveIndex, setIsZoomed } =
    useCarouselContext();
  const { transformValue } = useCarouselTrackState();
  const trackStyles = carouselStyles.track;

  const handleItemClick = (index: number, e: MouseEvent) => {
    if (!zoomEnabled) return;
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SELECTOR)) return;
    setActiveIndex(index);
    setIsZoomed(true);
  };

  let itemCursor = -1;

  return (
    <div
      className={cn(trackStyles.base, trackStyles.orientation[orientation])}
      style={{ transform: transformValue }}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== CarouselItem) {
          return child;
        }

        const itemIndex = (itemCursor += 1);
        const item = child as ReactElement<{
          onClick?: (e: MouseEvent) => void;
        }>;

        return cloneElement(item, {
          onClick: (e: MouseEvent) => {
            item.props.onClick?.(e);
            handleItemClick(itemIndex, e);
          },
        });
      })}
    </div>
  );
}
