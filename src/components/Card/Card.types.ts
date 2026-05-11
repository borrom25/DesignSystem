import type { ReactNode, HTMLAttributes } from "react";
import type { Size } from "@/types";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  size?: Size;
  children?: ReactNode;
};
