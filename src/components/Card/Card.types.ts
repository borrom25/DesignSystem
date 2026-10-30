import type { ReactNode, HTMLAttributes } from "react";
import type { Size } from "@/types";
import type { VerticalPaddingStyle } from "@/utils";
import type { TextProps } from "@/components/Text";

export const CardVariant = {
  Basic: "basic",
  Secondary: "secondary",
} as const;

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant];

export type CardPadding = VerticalPaddingStyle;

export type CardTextProps = Omit<Partial<TextProps>, "children">;

export type CardProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  size?: Size;
  variant?: CardVariant;
  padding?: CardPadding;
  title?: ReactNode;
  subtitle?: ReactNode;
  titleProps?: CardTextProps;
  subtitleProps?: CardTextProps;
  actionSlot?: ReactNode;
  children?: ReactNode;
  hoverable?: boolean;
};
