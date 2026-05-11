import { cn } from "@/utils";
import type { UserItemTitleProps } from "../UserItem.types";
import { useUserItemContext } from "../UserItem.utils";
import { userItemStyles } from "../styles";

export function Title({
  children,
  className,
  ...restProps
}: UserItemTitleProps) {
  const { size } = useUserItemContext();

  const computedClassName = cn(
    userItemStyles.title,
    userItemStyles.titleSize[size],
    className
  );

  return (
    <div className={computedClassName} {...restProps}>
      {children}
    </div>
  );
}
