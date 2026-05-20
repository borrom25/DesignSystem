import { SpaceProps } from "./Space.types";
import { cn } from "@/utils";
import {
  alignMap,
  directionMap,
  flexWrapMap,
  gapMap,
  justifyMap,
  paddingMap,
} from "./styles";
import { Size } from "@/types";

export function Space({
  children,
  className,
  gapSize = Size.Sm,
  paddingSize,
  customGap,
  customPadding,
  justify,
  align,
  direction,
  flexWrap,
  fullWidth,
  fullHeight,
  flex1,
}: SpaceProps) {
  return (
    <div
      className={cn(
        "flex",
        !customGap && !!gapSize && gapMap[gapSize],
        !customPadding && !!paddingSize && paddingMap[paddingSize],
        !!justify && justifyMap[justify],
        !!align && alignMap[align],
        !!direction && directionMap[direction],
        !!flexWrap && flexWrapMap[flexWrap],
        !!fullWidth && "w-full",
        !!fullHeight && "h-full",
        !!flex1 && "flex-1",
        className
      )}
      style={{
        gap: customGap,
        padding: customPadding,
      }}
    >
      {children}
    </div>
  );
}
