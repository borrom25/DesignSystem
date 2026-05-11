import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { Size, Type } from "@/types";
import type { TabProps } from "./Tab.types";
import { Counter, CounterVariant } from "@/components/Counter";
import { tabStyles } from "./styles";

export function Tab({
  type = Type.Fill,
  size = Size.Md,
  selected = false,
  iconLeft: IconLeft,
  count,
  className,
  children,
  asChild = false,
  scaling = false,
  ...restProps
}: TabProps) {
  const iconSize = getIconSize(size, tabStyles.iconSizeMap);

  const Comp = getSlotOrElement(asChild);

  const computedClassName = cn(
    tabStyles.base,
    tabStyles.getVariant(type),
    tabStyles.size[size],
    selected && tabStyles.selected,
    scaling && tabStyles.scaling,
    className
  );

  if (asChild) {
    return (
      <Comp
        className={computedClassName}
        aria-selected={selected}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp className={computedClassName} aria-selected={selected} {...restProps}>
      <span className={cn(tabStyles.content, tabStyles.gap[size])}>
        {IconLeft && <IconLeft size={iconSize} className={"shrink-0"} />}
        {children}
        {count != null && (
          <Counter
            count={count}
            size={size}
            variant={selected ? CounterVariant.White : CounterVariant.Neutral}
            className="self-center"
          />
        )}
      </span>
    </Comp>
  );
}
