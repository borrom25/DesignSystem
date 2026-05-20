import { Size } from "@/types";
import { cn } from "@/utils";
import { InputNumber } from "./InputNumber";
import { inputNumberStyles } from "./styles";
import type { InputNumberCompactProps } from "./InputNumberCompact.types";

export function InputNumberCompact({
  className,
  ...restProps
}: InputNumberCompactProps) {
  return (
    <InputNumber
      {...restProps}
      size={Size.Xs}
      className={cn(inputNumberStyles.compact, className)}
    />
  );
}
