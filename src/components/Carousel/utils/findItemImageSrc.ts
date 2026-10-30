import { Children, isValidElement, type ReactNode } from "react";

export function findItemImageSrc(node: ReactNode): string | undefined {
  const items = Children.toArray(node);

  for (const child of items) {
    if (!isValidElement<{ src?: unknown; children?: ReactNode }>(child)) {
      continue;
    }

    if (
      child.type === "img" &&
      typeof child.props.src === "string" &&
      child.props.src
    ) {
      return child.props.src;
    }

    const nested = findItemImageSrc(child.props.children);
    if (nested) return nested;
  }
}
