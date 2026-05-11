import { cn } from "@/utils";
import type { PopoverSurfaceProps } from "../Popover.types";
import { surfaceClasses } from "../styles";
import { useScreenSize } from "@/providers";

export function PopoverSurface({ className, children }: PopoverSurfaceProps) {
  const { isMobile } = useScreenSize();
  return (
    <div className={cn(!isMobile && surfaceClasses, className)}>{children}</div>
  );
}
