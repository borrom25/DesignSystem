import type { HTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";

export const UserItemAvatarPosition = {
  Top: "top",
  Left: "left",
} as const;

export type UserItemAvatarPosition =
  (typeof UserItemAvatarPosition)[keyof typeof UserItemAvatarPosition];

export type UserItemProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  size?: Size;
  avatarPosition?: UserItemAvatarPosition;
  children: ReactNode;
};

export type UserItemAvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  size?: number;
  withBorder?: boolean;
  showEditBadge?: boolean;
  children?: ReactNode;
};

export type UserItemTitleProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type UserItemSubtitleProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type UserItemLabelsProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type UserItemContextValue = {
  size: Size;
  avatarPosition: UserItemAvatarPosition;
};

export interface UserItemTextProps {
  children: React.ReactNode;
  className?: string;
}

export interface UserItemContentProps {
  children: React.ReactNode;
  className?: string;
}
