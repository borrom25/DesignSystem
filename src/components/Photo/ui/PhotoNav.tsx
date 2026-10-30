import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import { Color } from "@/types";
import { photoStyles } from "../styles";
import { PhotoIconAction } from "./PhotoIconAction";

export function PhotoNav({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <PhotoIconAction
        icon={ChevronLeft}
        label="Предыдущее фото"
        color={Color.ContrastLight}
        className={cn(photoStyles.nav, photoStyles.navPrev)}
        onClick={onPrevious}
      />
      <PhotoIconAction
        icon={ChevronRight}
        label="Следующее фото"
        color={Color.ContrastLight}
        className={cn(photoStyles.nav, photoStyles.navNext)}
        onClick={onNext}
      />
    </>
  );
}
