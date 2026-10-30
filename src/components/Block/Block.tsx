import { cn } from "@/utils";
import { Size } from "@/types";
import type { BlockProps } from "./Block.types";
import { BlockVariant } from "./Block.types";
import { blockStyles } from "./styles";

export function Block({
  size = Size.Md,
  variant = BlockVariant.Basic,
  className,
  children,
  ...props
}: BlockProps) {
  return (
    <div
      {...props}
      className={cn(
        blockStyles.base,
        blockStyles.variant[variant],
        blockStyles.size[size],
        className
      )}
    >
      {children}
    </div>
  );
}
