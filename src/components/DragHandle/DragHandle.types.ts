import type { HTMLAttributes } from "react";
import type { Size } from "@/types";

export type DragHandleProps = HTMLAttributes<HTMLSpanElement> & {
  size?: Size;
};
