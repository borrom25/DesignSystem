import { getIconSize } from "@/utils";
import { Color, Size } from "@/types";
import type { LabelProps } from "./Label.types";
import { labelStyles } from "./styles";
import { getLabelRootClassName, getLabelState } from "./Label.utils";

export function Label({
  color = Color.Brand,
  type: appearance = "fill",
  size = Size.Md,
  rounded = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconOnly: IconOnly,
  className,
  children,
  disabled,
  prefix,
  suffix,
  onClick,
  ...restProps
}: LabelProps) {
  const iconSize = getIconSize(size, labelStyles.iconSizeMap);
  const { isIconOnly } = getLabelState({
    hasIconOnly: !!IconOnly,
  });
  const rootClassName = getLabelRootClassName({
    appearance,
    color,
    onClick,
    size,
    isIconOnly,
    rounded,
    className,
  });

  return (
    <span
      className={rootClassName}
      onClick={onClick}
      {...restProps}
      aria-disabled={disabled}
    >
      {isIconOnly && IconOnly ? (
        <IconOnly size={iconSize} className={labelStyles.iconOnly} />
      ) : (
        <>
          {IconLeft && (
            <IconLeft size={iconSize} className={labelStyles.iconWithText} />
          )}
          {prefix}
          {children}
          {suffix}
          {IconRight && (
            <IconRight size={iconSize} className={labelStyles.iconWithText} />
          )}
        </>
      )}
    </span>
  );
}
