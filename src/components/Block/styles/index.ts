import { blockBaseClasses } from "./base";
import { blockSizeClasses } from "./sizes";
import { blockVariantClasses } from "./variants";

export { blockBaseClasses, blockSizeClasses, blockVariantClasses };

export const blockStyles = {
  base: blockBaseClasses,
  size: blockSizeClasses,
  variant: blockVariantClasses,
} as const;
