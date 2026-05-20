import { cn } from "@/utils";
import type { TextProps } from "./Text.types";
import { textStyles } from "./styles";
import { Color } from "@/types";

export const Text = ({
  children,
  size,
  weight = "regular",
  as: Component = "span",
  color = Color.Inverse,
  className,
  ...props
}: TextProps) => {
  const classes = cn(
    textStyles.base,
    size && textStyles.size[size],
    size && weight && textStyles.getWeight(size, weight),
    className
  );

  return (
    <Component
      className={cn(classes, `[color:var(--color-${color})]`)}
      {...props}
    >
      {children}
    </Component>
  );
};
