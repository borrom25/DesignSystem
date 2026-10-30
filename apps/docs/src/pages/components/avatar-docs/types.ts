export type AvatarSize = "32" | "48" | "64" | "80";

export type AvatarPlaygroundState = {
  size: AvatarSize;
  src: string;
  alt: string;
  initials: string;
  withBorder: boolean;
  showEditBadge: boolean;
  showImage: boolean;
};

export const AVATAR_DEFAULT_STATE: AvatarPlaygroundState = {
  size: "64",
  src: "https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-docs",
  alt: "User avatar",
  initials: "UI",
  withBorder: false,
  showEditBadge: false,
  showImage: true,
};
