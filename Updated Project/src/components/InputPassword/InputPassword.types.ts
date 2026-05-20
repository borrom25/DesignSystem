import type { InputProps } from "@/components/Input";

export interface InputPasswordProps extends Omit<
  InputProps,
  "type" | "iconRight" | "clearable" | "onClear"
> {
  showPasswordByDefault?: boolean;
}
