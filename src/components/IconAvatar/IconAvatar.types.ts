import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export type IconAvatarBorderVariant = "default" | "generic" | "genericMedium";

export type IconAvatarProps = HTMLAttributes<HTMLDivElement> & {
  size: number;
  icon: LucideIcon;
  borderVariant?: IconAvatarBorderVariant;
};
