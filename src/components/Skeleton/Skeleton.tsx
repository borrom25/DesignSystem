import { cn } from "@/utils";
import type { SkeletonProps } from "./Skeleton.types";
import { skeletonStyles } from "./styles";

export function Skeleton({
  loading = true,
  children,
  className,
  ...restProps
}: SkeletonProps) {
  if (children !== undefined) {
    return (
      <div className={cn(skeletonStyles.wrapper, className)} {...restProps}>
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
    <div className={cn(skeletonStyles.standalone, className)} {...restProps}>
      <div className={skeletonStyles.overlay}>
        <div className={skeletonStyles.shimmer} />
      </div>
    </div>
  );
}
