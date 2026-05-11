import type { HTMLAttributes, ReactNode } from "react";

export interface PlugProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  imageItem?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  actionSlot?: ReactNode;
}
