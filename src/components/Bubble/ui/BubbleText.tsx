import type { BubbleTextProps } from "@/components";
import { cn } from "@/utils";
import { bubbleStyles } from "../styles";
import { useBubbleContext } from "../Bubble.context.ts";

export function BubbleText({
  children,
  className,
  ...restProps
}: BubbleTextProps) {
  const { size } = useBubbleContext();

  return (
    <p
      className={cn(
        bubbleStyles.text.base,
        bubbleStyles.text.size[size],
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}
