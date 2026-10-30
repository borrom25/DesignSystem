import type { BlockVariantType } from "../Block.types";

export const blockVariantClasses: Record<BlockVariantType, string> = {
  basic: "border border-line bg-generic pt-7 pr-9 pb-9 pl-9",
  secondary: "bg-generic-medium py-4 px-5",
} as const;
