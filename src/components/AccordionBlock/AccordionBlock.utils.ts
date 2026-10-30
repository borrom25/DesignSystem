import type { MouseEvent, ReactNode } from "react";

export function isRenderableNode(node: ReactNode) {
  return node != null && node !== false && node !== "";
}

export function stopEventPropagation(event: MouseEvent) {
  event.stopPropagation();
}

export function getInertProps(isInert: boolean) {
  return isInert ? { inert: "" as const } : undefined;
}
