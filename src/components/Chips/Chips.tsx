import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { Size, Type } from "@/types";
import type { ChipsProps } from "./Chips.types";
import { chipsStyles } from "./styles";
import { getSizingClasses } from "./Chips.utils";
import { Counter, CounterVariant } from "../Counter";
import { scalingClasses } from "@/styles/shared";

export function Chips({
  size = Size.Md,
  type: appearance = Type.Fill,
  selected = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconOnly: IconOnly,
  count,
  className,
  disabled = false,
  children,
  asChild = false,
  scaling = true,
  ...restProps
}: ChipsProps) {
  const iconSize = getIconSize(size, chipsStyles.iconSizeMap);
  const isIconOnly = !!IconOnly;

  const Comp = getSlotOrElement(asChild);

  const computedClassName = cn(
    chipsStyles.base,
    getSizingClasses(size, isIconOnly),
    chipsStyles.getVariant(appearance),
    className
  );

  if (asChild) {
    return (
      <Comp
        className={computedClassName}
        aria-pressed={selected}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      type="button"
      className={cn(computedClassName, scaling && scalingClasses)}
      disabled={disabled}
      aria-pressed={selected}
      {...restProps}
    >
      {isIconOnly ? (
        <IconOnly size={iconSize} />
      ) : (
        <span className={cn(chipsStyles.content, chipsStyles.gap[size])}>
          {IconLeft && (
            <IconLeft size={iconSize} className={chipsStyles.icon} />
          )}
          {children}
          {IconRight && (
            <IconRight size={iconSize} className={chipsStyles.icon} />
          )}
          {!!count && (
            <Counter count={count} size={size} variant={CounterVariant.White} />
          )}
        </span>
      )}
    </Comp>
  );
}
