import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderPhotoControls } from "./controls";
import { PhotoPreview } from "./preview";
import { PHOTO_PROPS } from "./props";
import { PHOTO_DEFAULT_STATE, type PhotoPlaygroundState } from "./types";
import { createPhotoUsageCode } from "./usage";

export const photoDocsConfig: ComponentDocsConfig<PhotoPlaygroundState> = {
  title: "Photo",
  description:
    "Photo открывает фото на весь экран: листание, счётчик, поворот и действия скачать, изменить и удалить. На узком экране действия собраны в нижнее меню, поворот остаётся под фото.",
  props: PHOTO_PROPS,
  initialState: PHOTO_DEFAULT_STATE,
  createUsageCode: createPhotoUsageCode,
  renderPreview: PhotoPreview,
  renderControls: renderPhotoControls,
};
