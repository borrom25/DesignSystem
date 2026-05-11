import {
  skeletonOverlayClasses,
  skeletonShimmerClasses,
  skeletonWrapperClasses,
  skeletonStandaloneClasses,
} from "./base";

export {
  skeletonOverlayClasses,
  skeletonShimmerClasses,
  skeletonWrapperClasses,
  skeletonStandaloneClasses,
};

export const skeletonStyles = {
  overlay: skeletonOverlayClasses,
  shimmer: skeletonShimmerClasses,
  wrapper: skeletonWrapperClasses,
  standalone: skeletonStandaloneClasses,
} as const;
