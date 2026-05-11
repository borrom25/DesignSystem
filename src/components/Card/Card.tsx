import { cn } from "@/utils";
import { Size } from "@/types";
import type { CardProps } from "./Card.types";
import { cardStyles } from "./styles";

export function Card({
  size = Size.Md,
  className,
  children,
  ...restProps
}: CardProps) {
  return (
    <div
      className={cn(cardStyles.base, cardStyles.size[size], className)}
      {...restProps}
    >
      {children}
    </div>
  );
}
