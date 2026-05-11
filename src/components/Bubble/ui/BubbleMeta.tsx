import type { BubbleMetaProps } from "@/components";
import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { useBubbleContext } from "../Bubble.context.ts";

export function BubbleMeta({
  className,
  time,
  userName,
  ...restProps
}: BubbleMetaProps) {
  const { size } = useBubbleContext();

  return (
    <div
      className={cn(
        bubbleStyles.meta.base,
        bubbleStyles.meta.size[size],
        className
      )}
      {...restProps}
    >
      <span>{time}</span>
      <span className={bubbleStyles.meta.circle} />
      <span>{userName}</span>
    </div>
  );
}
