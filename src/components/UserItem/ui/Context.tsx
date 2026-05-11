import { useContext } from "react";
import { UserItemContext } from "../UserItem.utils.ts";
import { cn } from "@/utils";
import { userItemStyles } from "../styles";
import { UserItemContentProps } from "../UserItem.types.ts";

export function Content({
  children,
  className,
  ...restProps
}: UserItemContentProps) {
  const context = useContext(UserItemContext);

  const computedClassName = cn(
    userItemStyles.contentWrapper,
    userItemStyles.getContentWrapper(context.avatarPosition),
    className
  );

  return (
    <div className={computedClassName} {...restProps}>
      {children}
    </div>
  );
}
