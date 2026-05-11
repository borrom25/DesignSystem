import { cn } from "@/utils";
import { userItemStyles } from "../styles";
import { UserItemTextProps } from "../UserItem.types.ts";

export function Text({ children, className, ...restProps }: UserItemTextProps) {
  const computedClassName = cn(userItemStyles.content, className);

  return (
    <div className={computedClassName} {...restProps}>
      {children}
    </div>
  );
}
