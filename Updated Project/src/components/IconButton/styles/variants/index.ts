import { IconButtonColor, IconButtonType } from "../../IconButton.types";
import { flatClasses } from "./flat";
import { ghostClasses } from "./ghost";
import { iconClasses } from "./icon";

const variantClassesMap: Record<
  IconButtonType,
  Record<IconButtonColor, string>
> = {
  flat: flatClasses,
  ghost: ghostClasses,
  icon: iconClasses,
};

export function getVariantClasses(
  type: IconButtonType,
  color: IconButtonColor
): string {
  return variantClassesMap[type]?.[color] ?? flatClasses[color];
}
