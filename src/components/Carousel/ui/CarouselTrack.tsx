import { useCarouselContext } from "../Carousel.context.tsx";
import { carouselStyles } from "../styles";
import { cn } from "@/utils";

interface CarouselTrackProps {
  children?: React.ReactNode;
}

export function CarouselTrack({ children }: CarouselTrackProps) {
  const { orientation, activeIndex, isHorizontal } = useCarouselContext();
  const trackStyles = carouselStyles.track;

  const transformValue = isHorizontal
    ? `translate3d(-${activeIndex * 100}%, 0, 0)`
    : `translate3d(0, -${activeIndex * 100}%, 0)`;

  return (
    <div
      className={cn(trackStyles.base, trackStyles.orientation[orientation])}
      style={{ transform: transformValue }}
    >
      {children}
    </div>
  );
}
