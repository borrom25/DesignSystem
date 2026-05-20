import { BannerProps } from "./Banner.types.ts";
import { bannerStyles } from "./styles";
import { cn } from "@/utils";
import { Color, Size } from "@/types";

export function Banner({
  size = Size.Xs,
  color = Color.Brand,
  className,
  children,
  ...props
}: BannerProps) {
  return (
    <div
      {...props}
      className={cn(
        className,
        bannerStyles.base,
        bannerStyles.size[size],
        bannerStyles.color[color]
      )}
    >
      {children}
    </div>
  );
}
