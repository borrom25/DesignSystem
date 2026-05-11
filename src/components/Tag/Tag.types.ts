import type { HTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";
import type { AvatarProps } from "@/components/Avatar";

export type TagAvatarProps = Omit<AvatarProps, "size">;

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Size;
  children: ReactNode;
  avatar?: TagAvatarProps;
  leftContent?: ReactNode;
  onClose?: () => void;
  error?: boolean;
}
