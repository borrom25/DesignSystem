import { useMemo } from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import type { UserItemProps } from "./UserItem.types";
import { UserItemAvatarPosition } from "./UserItem.types";
import { UserItemContext } from "./UserItem.utils";
import { userItemStyles } from "./styles";
import { Avatar, Title, Subtitle, Text, Labels, Content } from "./ui";

function UserItemRoot({
  size = Size.Md,
  avatarPosition = UserItemAvatarPosition.Left,
  children,
  className,
  ...restProps
}: UserItemProps) {
  const contextValue = useMemo(
    () => ({
      size,
      avatarPosition,
    }),
    [size, avatarPosition]
  );

  const computedClassName = cn(
    userItemStyles.root,
    userItemStyles.getLayout(avatarPosition),
    userItemStyles.sizeGap[size],
    className
  );

  return (
    <UserItemContext.Provider value={contextValue}>
      <div className={computedClassName} {...restProps}>
        {children}
      </div>
    </UserItemContext.Provider>
  );
}

export const UserItem = Object.assign(UserItemRoot, {
  Avatar,
  Title,
  Subtitle,
  Labels,
  Content,
  Text,
});
