import type { ButtonHTMLAttributes } from "react";
import type { Size } from "@/types";

export interface MinusCheckBoxProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "size" | "type"
> {
  size?: Size;
}
