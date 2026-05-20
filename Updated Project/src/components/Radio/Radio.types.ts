import type { InputHTMLAttributes } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export interface RadioProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    BaseFieldProps {
  size?: Size;
}
