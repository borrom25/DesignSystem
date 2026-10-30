import { cn } from "@/utils";
import type { TextProps } from "./Text.types";
import { TEXT_VARIANT_CATEGORY, TextWeight } from "./constants";
import { textStyles } from "./styles";
import { buildTypographyStyles } from "./utils";

export const Text = ({
  children,
  as: Component = "span",
  className,
  style,
  variant,
  weight = TextWeight.Regular,
  color,
  shade,
  align,
  overflow,
  decoration,
  ...props
}: TextProps) => {
  const category = variant ? TEXT_VARIANT_CATEGORY[variant] : undefined;
  const typographyStyles = buildTypographyStyles(
    category,
    variant,
    weight,
    color,
    shade
  );

  return (
    <Component
      className={cn(
        textStyles.base,
        align && textStyles.align[align],
        overflow && textStyles.overflow[overflow],
        decoration && textStyles.decoration[decoration],
        className
      )}
      style={{ ...typographyStyles, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
};
