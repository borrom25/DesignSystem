import { Loader2 } from "lucide-react";
import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { Color, HtmlType, Size, Type } from "@/types";
import { Counter, CounterVariant } from "@/components/Counter";
import type { ButtonProps } from "./Button.types";
import { buttonStyles } from "./styles";

export function Button({
  color = Color.Brand,
  type: appearance = Type.Fill,
  size = Size.Md,
  htmlType = HtmlType.Button,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconOnly: IconOnly,
  count,
  loading = false,
  className,
  disabled,
  children,
  ref,
  asChild = false,
  scaling = true,
  ...restProps
}: ButtonProps) {
  const isIconOnly = !!IconOnly;
  const isAsChild = asChild;
  const isLoading = loading;
  const hasCount = count != null;
  const contentInvisible = isLoading
    ? buttonStyles.contentInvisible
    : undefined;
  const iconSize = getIconSize(size, buttonStyles.iconSizeMap);

  const Comp = getSlotOrElement(asChild);

  const rootClassName = cn(
    buttonStyles.base,
    buttonStyles.getVariant(appearance, color),
    buttonStyles.getSize(size, isIconOnly),
    scaling && buttonStyles.scaling,
    className
  );

  if (isAsChild) {
    return (
      <Comp ref={ref} className={rootClassName} {...restProps}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      ref={ref}
      type={htmlType}
      className={rootClassName}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {isLoading && <Loader2 size={iconSize} className={buttonStyles.loader} />}
      {isIconOnly ? (
        <IconOnly size={iconSize} className={contentInvisible} />
      ) : (
        <span
          className={cn(
            buttonStyles.content,
            buttonStyles.gap[size],
            contentInvisible
          )}
        >
          {IconLeft && (
            <IconLeft size={iconSize} className={buttonStyles.icon} />
          )}
          {children}
          {IconRight && (
            <IconRight size={iconSize} className={buttonStyles.icon} />
          )}
        </span>
      )}
      {hasCount && (
        <Counter
          count={count!}
          variant={CounterVariant.Accent}
          maxCount={99}
          size={Size.Sm}
          className={buttonStyles.counter}
        />
      )}
    </Comp>
  );
}
