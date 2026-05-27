import { useCarouselContext } from "../Carousel.context.tsx";
import { carouselStyles } from "../styles";
import { cn } from "@/utils";

export function CarouselIndicators() {
  const { itemsCount, activeIndex, setActiveIndex, isHorizontal, orientation } =
    useCarouselContext();
  const indicatorsStyles = carouselStyles.indicators;

  const activeClasses = indicatorsStyles.variants(isHorizontal);

  return (
    <div
      className={cn(
        indicatorsStyles.base,
        indicatorsStyles.orientation[orientation]
      )}
    >
      {Array.from({ length: itemsCount ?? 0 }, (_, i) => (
        <span
          className={cn(
            indicatorsStyles.item,
            activeClasses.get(i === activeIndex)
          )}
          key={i}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}
