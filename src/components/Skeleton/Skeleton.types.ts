import type { ReactNode, HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  children?: ReactNode;
}
