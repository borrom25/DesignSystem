import { Size } from "@/types";

export type DragHandlePlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
};

export const DRAG_HANDLE_DEFAULT_STATE: DragHandlePlaygroundState = {
  size: Size.Sm,
};
