import { cn, getIconSize, getSlotOrElement } from "@/utils";
import { HtmlType, Size } from "@/types";
import type { ListItemProps } from "./ListItem.types";
import { ListItemVariant } from "./ListItem.types";
import { listItemStyles } from "./styles";
import { getListItemTextClassName } from "./ListItem.utils";
import { CheckBox } from "../CheckBox";
import { Avatar } from "../Avatar";
import { scalingClasses } from "@/styles/shared";

export function ListItem({
  size = Size.Xs,
  variant = ListItemVariant.Default,
  selected = false,
  iconOnly = false,
  checkbox = false,
  avatar,
  iconLeft: IconLeft,
  iconRight: IconRight,
  suffix,
  title,
  className,
  disabled = false,
  children,
  asChild = false,
  hideSelectedOutline = false,
  visualSelected = true,
  scaling,
  ref,
  ...restProps
}: ListItemProps) {
  const Comp = getSlotOrElement(asChild);
  const showTitle = !children && title;
  const iconSize = getIconSize(size, listItemStyles.iconSizeMap);
  const avatarSize = getIconSize(size, listItemStyles.avatarSizeMap);

  const computedClassName = cn(
    listItemStyles.base,
    listItemStyles.text,
    iconOnly ? listItemStyles.iconOnlySize[size] : listItemStyles.size[size],
    !iconOnly && listItemStyles.titleSize[size],
    listItemStyles.getVariant(variant, hideSelectedOutline),
    className
  );

  const textClassName = getListItemTextClassName(iconOnly);
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
      {checkbox && (
        <CheckBox
          size={Size.Xs}
          checked={selected}
          disabled={disabled}
          readOnly
          tabIndex={-1}
        />
      )}
      {avatar && <Avatar {...avatar} size={avatarSize} />}
      {IconLeft && <IconLeft size={iconSize} className={listItemStyles.icon} />}
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
            <IconRight size={iconSize} className={listItemStyles.icon} />
          )}
        </div>
      )}
    </Comp>
  );
}
