import type { HTMLAttributes, MouseEventHandler } from "react";

export type AvatarProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  size: number;
  src?: string | null;
  alt?: string;
  withBorder?: boolean;
  showEditBadge?: boolean;
  onEditBadgeClick?: MouseEventHandler<HTMLButtonElement>;
  initials?: string;
};
