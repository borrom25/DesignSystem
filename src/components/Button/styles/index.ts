import { baseClasses, scalingClasses } from "./base";
import {
  sizeClasses,
  iconOnlySizeClasses,
  iconSizeMap,
  gapClasses,
  getSizeClasses,
} from "./sizes";
import { getVariantClasses } from "./variants";
import {
  contentClasses,
  contentInvisibleClasses,
  loaderClasses,
  iconClasses,
  counterClasses,
} from "./content";

export const buttonStyles = {
  base: baseClasses,
  size: sizeClasses,
  iconOnlySize: iconOnlySizeClasses,
  iconSizeMap: iconSizeMap,
  gap: gapClasses,
  getSize: getSizeClasses,
  getVariant: getVariantClasses,
  content: contentClasses,
  contentInvisible: contentInvisibleClasses,
  loader: loaderClasses,
  icon: iconClasses,
  counter: counterClasses,
  scaling: scalingClasses,
} as const;
