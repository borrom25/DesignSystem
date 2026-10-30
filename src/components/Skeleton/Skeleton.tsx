import { cn } from "@/utils";
import type { SkeletonProps } from "./Skeleton.types";
import { skeletonStyles } from "./styles";

export function Skeleton({
  loading = true,
  children,
  className,
  width,
  height,
  borderRadius,
  ...restProps
}: SkeletonProps) {
  const styles = {
    width: width && `${width}px`,
    height: height && `${height}px`,
    borderRadius: borderRadius && `${borderRadius}px`,
  };
  if (children !== undefined) {
    return (
      <div
        className={cn(skeletonStyles.wrapper, className)}
        style={styles}
        {...restProps}
      >
        <div className={cn(loading && "pointer-events-none")}>{children}</div>
        {loading && (
          <div className={skeletonStyles.overlay}>
            <div className={skeletonStyles.shimmer} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(skeletonStyles.standalone, className)}
      style={styles}
      {...restProps}
    >
      <div className={skeletonStyles.overlay}>
        <div className={skeletonStyles.shimmer} />
      </div>
    </div>
  );
}
