import { cn } from "@/utils";
import { Avatar as AvatarComponent } from "@/components/Avatar";
import type { UserItemAvatarProps } from "../UserItem.types";
import { useUserItemContext } from "../UserItem.utils";
import { userItemStyles } from "../styles";

export function Avatar({
  src,
  alt = "User avatar",
  size: customSize,
  withBorder = false,
  showEditBadge = false,
  children,
  className,
  ...restProps
}: UserItemAvatarProps) {
  const { avatarPosition, size: contextSize } = useUserItemContext();
  const avatarSize = customSize ?? userItemStyles.avatarSizeMap[contextSize];

  const computedClassName = cn(
    userItemStyles.avatarWrapper,
    userItemStyles.getAvatarLayout(avatarPosition),
    className
  );

  if (children) {
    return (
      <div className={computedClassName} {...restProps}>
        {children}
      </div>
    );
  }

  if (!src) {
    return null;
  }

  return (
    <div className={computedClassName} {...restProps}>
      <AvatarComponent
        src={src}
        alt={alt}
        size={avatarSize}
        withBorder={withBorder}
        showEditBadge={showEditBadge}
      />
    </div>
  );
}
