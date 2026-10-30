import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderSkeletonControls } from "./controls";
import { SkeletonPreview } from "./preview";
import { SKELETON_PROPS } from "./props";
import { SKELETON_DEFAULT_STATE, type SkeletonPlaygroundState } from "./types";
import { createSkeletonUsageCode } from "./usage";

export const skeletonDocsConfig: ComponentDocsConfig<SkeletonPlaygroundState> =
  {
    title: "Skeleton",
    developers: [],
    description:
      "Skeleton используется для отображения загрузки в standalone-режиме или как wrapper для существующего контента.",
    props: SKELETON_PROPS,
    initialState: SKELETON_DEFAULT_STATE,
    createUsageCode: createSkeletonUsageCode,
    renderPreview: SkeletonPreview,
    renderControls: renderSkeletonControls,
  };
