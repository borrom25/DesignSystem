import { carouselStyles } from "../styles";
import { useCarouselContext } from "../Carousel.context.tsx";
import { cn } from "@/utils";

interface CarouselItemProps {
  children?: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  const { width, height } = useCarouselContext();
  const itemStyles = carouselStyles.item;

  return (
    <div
      className={cn(
        itemStyles.base,
        carouselStyles.size(width, height),
        className
      )}
    >
      {children}
    </div>
  );
}
