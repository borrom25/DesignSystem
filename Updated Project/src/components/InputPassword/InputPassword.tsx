import { Check, Eye, EyeClosed } from "lucide-react";
import { Input } from "@/components/Input";
import { IconButton } from "@/components/IconButton";
import { inputIconSizeMap } from "@/shared/Input";
import { Color, Size, Type } from "@/types";
import { cn } from "@/utils";
import type { InputPasswordProps } from "./InputPassword.types";
import { usePasswordVisibility } from "./hooks";
import { getToggleButtonMargin } from "./utils";

export function InputPassword({
  size = Size.Md,
  iconLeft = Check,
  showPasswordByDefault = false,
  disabled = false,
  inputClassName,
  ...restProps
}: InputPasswordProps) {
  const { visible, toggleVisibility, handleMouseDown } = usePasswordVisibility({
    showPasswordByDefault,
  });
  const hiddenPasswordClassName =
    !visible && !!restProps.value
      ? "text-[1.3em] tracking-[0.22em]"
      : undefined;

  const ToggleButton = (
    <IconButton
      icon={visible ? Eye : EyeClosed}
      size={size}
      iconSize={inputIconSizeMap[size]}
      type={Type.Ghost}
      color={Color.Inverse}
      disabled={disabled}
      onClick={toggleVisibility}
      onMouseDown={handleMouseDown}
      aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
      className={getToggleButtonMargin(size)}
    />
  );

  return (
    <Input
      {...restProps}
      type={visible ? "text" : "password"}
      size={size}
      iconLeft={iconLeft}
      suffix={ToggleButton}
      inputClassName={cn(hiddenPasswordClassName, inputClassName)}
      disabled={disabled}
    />
  );
}
