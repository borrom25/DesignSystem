import { Size } from "@/types";
import { InputHTMLAttributes } from "react";

type SwitсherType = "default" | "minus";

export interface SwitcherProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  size?: Size;
  type?: SwitсherType;
  onClick?: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => void;
}
