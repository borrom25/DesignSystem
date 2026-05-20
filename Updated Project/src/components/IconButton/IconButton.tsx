import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { Color, Size, Type, HtmlType } from "@/types";
import { Counter, CounterVariant } from "@/components/Counter";
import type { IconButtonProps } from "./IconButton.types";
import { iconButtonStyles } from "./styles";

export function IconButton({
  icon: Icon,
  color = Color.Brand,
  type = Type.Flat,
  size = Size.Sm,
  iconSize: iconSizeProp,
  rounded = false,
  htmlType = HtmlType.Button,
  count,
  showBadge = false,
  className,
  disabled,
  ref,
  asChild = false,
  scaling = true,
  children,
  ...props
}: IconButtonProps) {
  const iconSize =
    iconSizeProp ?? getIconSize(size, iconButtonStyles.iconSizeMap);
  const hasBadge = showBadge || count != null;

  const Comp = getSlotOrElement(asChild);

  const computedClassName = cn(
    iconButtonStyles.base,
    iconButtonStyles.size[size],
    rounded && iconButtonStyles.rounded,
    iconButtonStyles.getVariant(type, color),
    scaling && iconButtonStyles.scaling,
    className
  );

  if (asChild) {
    return (
      <Comp ref={ref} className={computedClassName} {...props}>
        {children}
      </Comp>
    );
  }

  if (!Icon) {
    return null;
  }

  return (
    <Comp
      ref={ref}
      type={htmlType}
      className={computedClassName}
      disabled={disabled}
      {...props}
    >
      <Icon size={iconSize} />
      {hasBadge && (
        <Counter
          empty
          count={0}
          variant={CounterVariant.Accent}
          size={size}
          className={iconButtonStyles.badge}
        />
      )}
    </Comp>
  );
}
