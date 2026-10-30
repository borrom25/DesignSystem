import { LinePositions } from "../Line.types";

export const positionClasses: Record<LinePositions, string> = {
  horizontal: "grid grid-cols-[auto_1fr_auto] items-center gap-5 w-[560px]",
  vertical: "flex flex-col gap-6 w-[260px]",
};
