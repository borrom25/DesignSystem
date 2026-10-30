import { cn, mergeStyleWithVerticalPadding } from "@/utils";
import { Size } from "@/types";
import { Text } from "@/components/Text";
import { CardVariant } from "./Card.types";
import type { CardProps } from "./Card.types";
import {
  resolveCardSubtitleProps,
  resolveCardTitleProps,
} from "./Card.typography";
import { cardStyles } from "./styles";

export function Card({
  size = Size.Md,
  variant = CardVariant.Basic,
  padding,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  actionSlot,
  style,
  className,
  children,
  hoverable = false,
  ...restProps
}: CardProps) {
  const mergedStyle = mergeStyleWithVerticalPadding(style, padding);
  const hasTitleSection = Boolean(title || subtitle);
  const hasHeader = hasTitleSection || Boolean(actionSlot);

  return (
    <div
      className={cn(
        cardStyles.base,
        cardStyles.variant[variant],
        hoverable && cardStyles.hover[variant],
        cardStyles.size[size],
        hasHeader && children && cardStyles.contentLayout,
        className
      )}
      style={mergedStyle}
      {...restProps}
    >
      {hasHeader && (
        <div className={cardStyles.header}>
          {hasTitleSection && (
            <div className={cardStyles.headerText}>
              {title && (
                <Text
                  {...resolveCardTitleProps(size, title, titleProps)}
                  className={cardStyles.headerTitleText}
                />
              )}
              {subtitle && (
                <Text
                  {...resolveCardSubtitleProps(size, subtitle, subtitleProps)}
                  className={cardStyles.headerSubtitleText}
                />
              )}
            </div>
          )}
          {actionSlot && (
            <div className={cardStyles.actionSlot}>{actionSlot}</div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
