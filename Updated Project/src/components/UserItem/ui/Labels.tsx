import { Children, cloneElement, isValidElement } from "react";
import { cn } from "@/utils";
import type { UserItemLabelsProps } from "../UserItem.types";
import { useUserItemContext } from "../UserItem.utils";
import { userItemStyles } from "../styles";

export function Labels({
  children,
  className,
  ...restProps
}: UserItemLabelsProps) {
  const { size } = useUserItemContext();
  const labelSize = userItemStyles.labelSizeMap[size];

  const computedClassName = cn(userItemStyles.labels, className);

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && typeof child.type !== "string") {
      return cloneElement(child as React.ReactElement<{ size?: string }>, {
        size: labelSize,
      });
    }
    return child;
  });

  return (
    <div className={computedClassName} {...restProps}>
      {enhancedChildren}
    </div>
  );
}
