import type { MouseEventHandler } from "react";

export function withStopPropagationClick(
  handler: (() => void) | undefined
): MouseEventHandler | undefined {
  if (!handler) {
    return undefined;
  }

  return (event) => {
    event.stopPropagation();
    handler();
  };
}
