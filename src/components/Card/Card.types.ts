import type { ReactNode, HTMLAttributes } from "react";
import type { Size } from "@/types";
import type { VerticalPaddingStyle } from "@/utils";

export const CardVariant = {
  Surface: "surface",
  Nested: "nested",
} as const;

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant];

export type CardPadding = VerticalPaddingStyle;

export type CardProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  size?: Size;
  variant?: CardVariant;
  padding?: CardPadding;
  title?: ReactNode;
  subtitle?: ReactNode;
  actionSlot?: ReactNode;
  children?: ReactNode;
};
