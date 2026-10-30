import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { HtmlType, Size } from "@/types";
import type { ListItemProps } from "./ListItem.types";
import { ListItemVariant } from "./ListItem.types";
import { listItemStyles } from "./styles";
import { getListItemTextClassName } from "./ListItem.utils";
import { CheckBox } from "../CheckBox";
import { Radio } from "../Radio";
import { Avatar } from "../Avatar";
import { scalingClasses } from "@/styles/shared";

export function ListItem({
  size = Size.Xs,
  variant = ListItemVariant.Default,
  selected = false,
  iconOnly = false,
  checkbox = false,
  radio = false,
  indeterminate = false,
  avatar,
  iconLeft: IconLeft,
  iconRight: IconRight,
  leading,
  suffix,
  prefix,
  title,
  className,
  disabled = false,
  children,
  asChild = false,
  hideSelectedOutline = false,
  visualSelected = true,
  wrapText = true,
  scaling,
  ref,
  ...restProps
}: ListItemProps) {
  const Comp = getSlotOrElement(asChild);
  const showTitle = !children && title;
  const iconSize = getIconSize(size, listItemStyles.iconSizeMap);
  const avatarSize = getIconSize(size, listItemStyles.avatarSizeMap);
  const sizeClasses = wrapText
    ? listItemStyles.wrapSize[size]
    : listItemStyles.size[size];

  const computedClassName = cn(
    listItemStyles.base,
    listItemStyles.text,
    iconOnly ? listItemStyles.iconOnlySize[size] : sizeClasses,
    !iconOnly && listItemStyles.titleSize[size],
    listItemStyles.getVariant(variant, hideSelectedOutline),
    className
  );

  const textClassName = getListItemTextClassName(iconOnly, wrapText);
  const shouldRenderText = !iconOnly && (showTitle || !!children);

  if (asChild) {
    return (
      <Comp
        className={computedClassName}
        aria-pressed={visualSelected && selected}
        aria-disabled={disabled}
        ref={ref}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      type={HtmlType.Button}
      className={cn(computedClassName, scaling && scalingClasses)}
      disabled={disabled}
      aria-pressed={visualSelected && selected}
      aria-disabled={disabled}
      ref={ref}
      {...restProps}
    >
      {leading}
      {checkbox && (
        <CheckBox
          size={Size.Xs}
          checked={selected}
          indeterminate={indeterminate}
          disabled={disabled}
          readOnly
          tabIndex={-1}
        />
      )}
      {radio && (
        <span className="pointer-events-none" aria-hidden>
          <Radio
            size={Size.Xs}
            checked={selected}
            disabled={disabled}
            readOnly
            tabIndex={-1}
          />
        </span>
      )}
      {avatar && <Avatar {...avatar} size={avatarSize} />}

      {(prefix || IconLeft) && (
        <div className={listItemStyles.rightGroup}>
          {prefix && <span className={listItemStyles.icon}>{prefix}</span>}
          {IconLeft && (
            <IconLeft size={iconSize} className={listItemStyles.iconLeft} />
          )}
        </div>
      )}
      {shouldRenderText &&
        (showTitle ? (
          <span className={textClassName}>{title}</span>
        ) : (
          <span className={textClassName}>{children}</span>
        ))}
      {(suffix || IconRight) && (
        <div className={listItemStyles.rightGroup}>
          {suffix && <span className={listItemStyles.icon}>{suffix}</span>}
          {IconRight && (
            <IconRight size={iconSize} className={listItemStyles.iconRight} />
          )}
        </div>
      )}
    </Comp>
  );
}
