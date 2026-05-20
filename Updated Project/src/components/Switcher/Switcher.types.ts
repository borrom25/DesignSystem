import { Size } from "@/types";
import type { ChangeEvent, InputHTMLAttributes, MouseEvent } from "react";

export type SwitcherValue = string | number;

type SwitcherType = "default" | "minus";

export interface SwitcherProps<
  T extends SwitcherValue = SwitcherValue,
> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue" | "size" | "type" | "value"
> {
  size?: Size;
  type?: SwitcherType;
  value?: T;
  defaultValue?: T;
  onClick?: (e: ChangeEvent<HTMLInputElement> | MouseEvent) => void;
}
