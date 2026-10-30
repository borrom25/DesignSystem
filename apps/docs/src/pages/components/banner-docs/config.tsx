import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderBannerControls } from "./controls";
import { BannerPreview } from "./preview";
import { BANNER_PROPS } from "./props";
import { BANNER_DEFAULT_STATE, type BannerPlaygroundState } from "./types";
import { createBannerUsageCode } from "./usage";

export const bannerDocsConfig: ComponentDocsConfig<BannerPlaygroundState> = {
  title: "Banner",
  description:
    "Banner показывает короткое важное сообщение на цветной плашке. Компонент подходит для announcement-зон, системных уведомлений и статусов раздела.",
  props: BANNER_PROPS,
  initialState: BANNER_DEFAULT_STATE,
  createUsageCode: createBannerUsageCode,
  renderPreview: BannerPreview,
  renderControls: renderBannerControls,
};
