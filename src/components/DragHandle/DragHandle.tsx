import { GripVertical } from "lucide-react";
import { cn, getIconSize } from "@/utils";
import { Size } from "@/types";
import type { DragHandleProps } from "./DragHandle.types";
import { dragHandleStyles } from "./styles";

export function DragHandle({
  size = Size.Xs,
  className,
  ...restProps
}: DragHandleProps) {
  const iconSize = getIconSize(size, dragHandleStyles.iconSizeMap);

  return (
    <span className={cn(dragHandleStyles.base, className)} {...restProps}>
      <GripVertical size={iconSize} aria-hidden />
    </span>
  );
}
