import { Pencil } from "lucide-react";
import { cn } from "@/utils";
import type { AvatarProps } from "./Avatar.types";
import { avatarStyles } from "./styles";
import { getBadgeSize, getBadgePosition, getFontClasses } from "./Avatar.utils";

import { Users } from "lucide-react";
import { useState } from "react";
import { Button } from "../Button";

export function Avatar({
  size,
  src,
  alt = "Avatar",
  withBorder = false,
  showEditBadge = false,
  className,
  initials,
  style,
  ...restProps
}: AvatarProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const badgeSize = getBadgeSize(size);
  const badgePosition = getBadgePosition(badgeSize);
  const fontClasses = getFontClasses(size);
  const hasInitials = !!initials && initials.trim() !== "";

  return (
    <div
      className={cn(
        avatarStyles.base,
        fontClasses,
        withBorder && avatarStyles.border,
        className
      )}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      {...restProps}
    >
      {!isError && (
        <img
          src={src}
          alt={alt}
          className={avatarStyles.image}
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
        />
      )}
      {(!isLoaded || isError) &&
        (hasInitials ? initials.trim() : <Users size={size / 2} />)}
      {showEditBadge && (
        <Button
          className={avatarStyles.badge}
          style={{
            bottom: badgePosition.bottom,
            right: badgePosition.right,
            ...avatarStyles.badgeBorder,
          }}
          scaling={false}
          iconOnly={Pencil}
          color="brand"
          size="xs"
        />
      )}
    </div>
  );
}
