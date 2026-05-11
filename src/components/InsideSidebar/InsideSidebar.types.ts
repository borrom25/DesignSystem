import type { ReactNode, HTMLAttributes } from "react";

export interface InsideSidebarProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  title?: ReactNode;
  actionSlot?: ReactNode;
  headSlot?: ReactNode;
  slotContent?: ReactNode;
  bottomSlotAction?: ReactNode;
}
