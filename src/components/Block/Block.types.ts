import type { HTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";

export type BlockVariantType = "basic" | "secondary";

export const BlockVariant: Record<"Basic" | "Secondary", BlockVariantType> = {
  Basic: "basic",
  Secondary: "secondary",
};

export type BlockProps = HTMLAttributes<HTMLDivElement> & {
  size?: Size;
  variant?: BlockVariantType;
  children?: ReactNode;
};
