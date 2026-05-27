import { cn, mergeStyleWithVerticalPadding } from "@/utils";
import { Size } from "@/types";
import { CardVariant } from "./Card.types";
import type { CardProps } from "./Card.types";
import { cardStyles } from "./styles";

export function Card({
  size = Size.Md,
  variant = CardVariant.Surface,
  padding,
  title,
  subtitle,
  actionSlot,
  style,
  className,
  children,
  ...restProps
}: CardProps) {
  const mergedStyle = mergeStyleWithVerticalPadding(style, padding);
  const hasTitleSection = Boolean(title || subtitle);

  return (
    <div
      className={cn(
        cardStyles.base,
        cardStyles.variant[variant],
        cardStyles.size[size],
        actionSlot && cardStyles.withActionSlot,
        (hasTitleSection || actionSlot) && children && cardStyles.contentLayout,
        className
      )}
      style={mergedStyle}
      {...restProps}
    >
      {hasTitleSection && (
        <div
          className={cn(
            cardStyles.headerText,
            actionSlot && cardStyles.headerTextWithAction
          )}
        >
          {title && <div className={cardStyles.title}>{title}</div>}
          {subtitle && <div className={cardStyles.subtitle}>{subtitle}</div>}
        </div>
      )}
      {actionSlot && (
        <div
          className={cn(
            cardStyles.actionSlot,
            cardStyles.actionSlotPosition[size]
          )}
        >
          {actionSlot}
        </div>
      )}
      {children}
    </div>
  );
}
