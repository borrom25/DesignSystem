import { Minus } from "lucide-react";
import { cn, getIconSize } from "@/utils";
import { Size } from "@/types";
import type { MinusCheckBoxProps } from "./MinusCheckBox.types";
import { minusCheckBoxStyles } from "./styles";

export function MinusCheckBox({
  size = Size.Md,
  className,
  disabled,
  onClick,
  ...restProps
}: MinusCheckBoxProps) {
  const iconSize = getIconSize(size, minusCheckBoxStyles.iconSizeMap);

  return (
    <button
      type="button"
      className={cn(
        minusCheckBoxStyles.base,
        minusCheckBoxStyles.size[size],
        minusCheckBoxStyles.button.state,
        minusCheckBoxStyles.button.hover,
        minusCheckBoxStyles.button.disabled,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      <Minus size={iconSize} className={minusCheckBoxStyles.icon} />
    </button>
  );
}
