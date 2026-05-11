import * as TooltipPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils";
import type { TooltipContentProps } from "../Tooltip.types.ts";
import { tooltipStyles } from "../styles";
import { TooltipSurface } from "./TooltipSurface.tsx";

export function TooltipContent({
  title,
  subTitle,
  icon: Icon,
  actionSlot,
  side = "top",
  align = "center",
  sideOffset = 8,
  alignOffset = 0,
  showArrow = true,
  arrowWidth = 14,
  arrowHeight = 7,
  className,
  maxWidth = 338,
  collisionPadding = 8,
  forceMount,
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal forceMount={forceMount}>
      <TooltipPrimitive.Content
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        avoidCollisions={true}
        className={cn(
          tooltipStyles.contentBase,
          tooltipStyles.animation,
          className
        )}
        style={{
          pointerEvents: "auto",
          maxWidth: `${maxWidth}px`,
          width: `min(${maxWidth}px, calc(100vw - 16px))`,
        }}
      >
        {showArrow && (
          <TooltipPrimitive.Arrow
            className={tooltipStyles.arrow}
            width={arrowWidth}
            height={arrowHeight}
          />
        )}
        <TooltipSurface>
          <div className={tooltipStyles.header}>
            <div className="min-w-0 flex-1">
              <div className={tooltipStyles.title}>{title}</div>
              {subTitle && (
                <div className={tooltipStyles.subTitle}>{subTitle}</div>
              )}
            </div>
            {Icon && (
              <div className={tooltipStyles.iconWrapper}>
                <Icon size={20} />
              </div>
            )}
          </div>
          {actionSlot && (
            <div className={tooltipStyles.actionSlot}>{actionSlot}</div>
          )}
        </TooltipSurface>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
