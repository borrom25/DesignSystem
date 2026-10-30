import type { Size } from "@/types";
import { cn } from "@/utils";
import type { LabelColor, LabelType } from "./Label.types";
import { labelStyles } from "./styles";

export const getSizingClasses = (size: Size, isIconOnly: boolean): string =>
  isIconOnly ? labelStyles.iconOnlySize[size] : labelStyles.size[size];

type LabelStateOptions = {
  hasIconOnly: boolean;
};

export function getLabelState({ hasIconOnly }: LabelStateOptions) {
  const isIconOnly = hasIconOnly;

  return {
    isIconOnly,
  };
}

type LabelRootClassOptions = {
  appearance: LabelType;
  color: LabelColor;
  size: Size;
  isIconOnly: boolean;
  rounded: boolean;
  className?: string;
  onClick?: () => void;
};

export function getLabelRootClassName({
  appearance,
  color,
  size,
  isIconOnly,
  rounded,
  className,
  onClick,
}: LabelRootClassOptions): string {
  return cn(
    labelStyles.base,
    labelStyles.getVariant(appearance, color),
    getSizingClasses(size, isIconOnly),
    rounded && labelStyles.rounded,
    !isIconOnly && labelStyles.gap[size],
    onClick && labelStyles.clickable,
    className
  );
}
