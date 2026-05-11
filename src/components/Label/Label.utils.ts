import type { Size } from "@/types";
import { cn } from "@/utils";
import type { LabelColor, LabelType } from "./Label.types";
import { labelStyles } from "./styles";

export const getSizingClasses = (size: Size, isIconOnly: boolean): string =>
  isIconOnly ? labelStyles.iconOnlySize[size] : labelStyles.size[size];

type LabelStateOptions = {
  hasIconOnly: boolean;
  hasIconLeft: boolean;
  hasIconRight: boolean;
};

export function getLabelState({
  hasIconOnly,
  hasIconLeft,
  hasIconRight,
}: LabelStateOptions) {
  const isIconOnly = hasIconOnly;
  const hasSideIcons = hasIconLeft || hasIconRight;

  return {
    isIconOnly,
    canBeRounded: isIconOnly || !hasSideIcons,
  };
}

type LabelRootClassOptions = {
  appearance: LabelType;
  color: LabelColor;
  size: Size;
  isIconOnly: boolean;
  rounded: boolean;
  canBeRounded: boolean;
  className?: string;
};

export function getLabelRootClassName({
  appearance,
  color,
  size,
  isIconOnly,
  rounded,
  canBeRounded,
  className,
}: LabelRootClassOptions): string {
  return cn(
    labelStyles.base,
    labelStyles.getVariant(appearance, color),
    getSizingClasses(size, isIconOnly),
    rounded && canBeRounded && labelStyles.rounded,
    !isIconOnly && labelStyles.gap[size],
    className
  );
}
