import type { HTMLAttributes } from "react";

export type AvatarProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  size: number;
  src: string;
  alt?: string;
  withBorder?: boolean;
  showEditBadge?: boolean;
  initials?: string;
};
