import { cn } from "@/utils";
import type { UserItemSubtitleProps } from "../UserItem.types";
import { useUserItemContext } from "../UserItem.utils";
import { userItemStyles } from "../styles";

export function Subtitle({
  children,
  className,
  ...restProps
}: UserItemSubtitleProps) {
  const { size } = useUserItemContext();

  const computedClassName = cn(
    userItemStyles.subtitle,
    userItemStyles.subtitleSize[size],
    className
  );

  return (
    <div className={computedClassName} {...restProps}>
      {children}
    </div>
  );
}
