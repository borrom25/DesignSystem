export { baseClasses } from "./base";
export { sizeClasses } from "./sizes";
export { getWeightClass } from "./weights";

import { baseClasses } from "./base";
import { sizeClasses } from "./sizes";
import { getWeightClass } from "./weights";

export const textStyles = {
  base: baseClasses,
  size: sizeClasses,
  getWeight: getWeightClass,
} as const;
