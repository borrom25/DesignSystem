import { carouselStyles } from "../styles";
import { useCarouselContext } from "../Carousel.context.tsx";
import { cn } from "@/utils";
import { useLayoutEffect, useRef } from "react";

interface CarouselItemProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function CarouselItem({
  children,
  className,
  onClick,
}: CarouselItemProps) {
  const { height, setItemsSizes, zoomEnabled } = useCarouselContext();
  const itemStyles = carouselStyles.item;
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const { width: contentWidth, height: contentHeight } =
        contentRef.current.getBoundingClientRect();

      setItemsSizes((prev) => [
        ...prev,
        { width: contentWidth, height: contentHeight },
      ]);
    }
  }, [children, setItemsSizes]);

  return (
    <div
      ref={contentRef}
      className={cn(
        itemStyles.base,
        zoomEnabled && "cursor-pointer",
        className
      )}
      style={{
        height: `${height}px`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
