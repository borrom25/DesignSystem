import { cn } from "@/utils";
import type { IconAvatarProps } from "./IconAvatar.types";
import { iconAvatarStyles } from "./styles";
import { getAvatarIconPixelSize } from "./IconAvatar.utils";

export function IconAvatar({
  size,
  icon: Icon,
  borderVariant = "default",
  className,
  style,
  ...restProps
}: IconAvatarProps) {
  const iconSize = getAvatarIconPixelSize(size);

  return (
    <div
      className={cn(
        iconAvatarStyles.base,
        iconAvatarStyles.borderVariant[borderVariant],
        className
      )}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      {...restProps}
    >
      <Icon size={iconSize} className={iconAvatarStyles.icon} />
    </div>
  );
}
