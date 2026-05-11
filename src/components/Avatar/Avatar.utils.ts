import { fontStyles } from "./Avatar.const";

export const getBadgeSize = (avatarSize: number): number => {
  return Math.round(avatarSize * 0.28);
};

const getFontStyle = (avatarSize: number): string => {
  const nearestSize = Object.keys(fontStyles)
    .map(Number)
    .sort((a, b) => b - a)
    .find((size) => avatarSize >= size);

  return fontStyles[nearestSize ?? 0];
};

export const getFontClasses = (avatarSize: number): string => {
  const fontStyle = getFontStyle(avatarSize);

  return `
    [font-size:var(--font-size-${fontStyle})]
    [line-height:var(--line-height-${fontStyle})]
    [letter-spacing:var(--letter-spacing-${fontStyle})]
    [font-weight:var(--font-weight-${fontStyle}-medium)]
  `;
};

export const getBadgePosition = (badgeSize: number) => {
  const offset = Math.round(badgeSize * -0.2);
  return {
    bottom: offset,
    right: offset,
  };
};
