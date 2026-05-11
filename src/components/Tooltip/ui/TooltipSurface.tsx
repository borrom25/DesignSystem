import { cn } from "@/utils";
import type { ReactNode } from "react";
import { surfaceClasses } from "../styles";

type TooltipSurfaceProps = {
  className?: string;
  children?: ReactNode;
};

export function TooltipSurface({ className, children }: TooltipSurfaceProps) {
  return <div className={cn(surfaceClasses, className)}>{children}</div>;
}
