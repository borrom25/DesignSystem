import type { UserItemAvatarPosition } from "../UserItem.types";

export const rootClasses = "flex font-roboto-flex";

export const rootTopClasses = "flex-col items-start";

export const rootLeftClasses = "flex-row items-start";

export const avatarWrapperClasses = "shrink-0";

export const avatarLeftClasses = "mr-3";

export const contentWrapperClasses = "flex flex-col flex-1";

export const contentWrapperTopClasses = "items-start text-left w-full";

export const contentWrapperLeftClasses = "items-start text-left";

export const contentClasses = "flex flex-col items-start text-left";

export const titleClasses = "font-medium tracking-xs text-primary";

export const subtitleClasses = "text-inverse-text-medium";

export const labelsClasses = "flex flex-wrap gap-2 mt-2 justify-start";

export const getLayoutClasses = (position: UserItemAvatarPosition) => {
  return position === "top" ? rootTopClasses : rootLeftClasses;
};

export const getContentWrapperClasses = (position: UserItemAvatarPosition) => {
  return position === "top"
    ? contentWrapperTopClasses
    : contentWrapperLeftClasses;
};

export const getAvatarLayoutClasses = (position: UserItemAvatarPosition) => {
  return position === "top" ? "" : avatarLeftClasses;
};
