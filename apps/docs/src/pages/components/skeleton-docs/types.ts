export type SkeletonMode = "standalone" | "wrapper";
export type SkeletonShape = "card" | "line";

export type SkeletonPlaygroundState = {
  mode: SkeletonMode;
  loading: boolean;
  shape: SkeletonShape;
};

export const SKELETON_DEFAULT_STATE: SkeletonPlaygroundState = {
  mode: "standalone",
  loading: true,
  shape: "card",
};
