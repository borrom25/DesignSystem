import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderAvatarControls } from "./controls";
import { AvatarPreview } from "./preview";
import { AVATAR_PROPS } from "./props";
import { AVATAR_DEFAULT_STATE, type AvatarPlaygroundState } from "./types";
import { createAvatarUsageCode } from "./usage";

export const avatarDocsConfig: ComponentDocsConfig<AvatarPlaygroundState> = {
  title: "Avatar",
  developers: [],
  description:
    "Avatar отображает пользователя через изображение, инициалы или fallback-иконку и поддерживает режим редактирования.",
  props: AVATAR_PROPS,
  initialState: AVATAR_DEFAULT_STATE,
  createUsageCode: createAvatarUsageCode,
  renderPreview: AvatarPreview,
  renderControls: renderAvatarControls,
};
