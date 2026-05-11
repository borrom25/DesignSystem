import type { ButtonHTMLAttributes } from "react";
import type { Size } from "@/types";

export interface CloseBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  error?: boolean;
}
