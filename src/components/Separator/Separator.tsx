import { cn } from "@/utils";
import type { SeparatorProps } from "./Separator.types";
import { separatorStyles } from "./styles";

export const Separator = ({
  margin = "0",
  width,
  rotate,
  className,
  ...props
}: SeparatorProps) => {
  return (
    <div
      className={cn(
        separatorStyles.base,
        rotate && separatorStyles.rotate,
        className
      )}
      style={{
        width,
        margin,
      }}
      {...props}
    />
  );
};
