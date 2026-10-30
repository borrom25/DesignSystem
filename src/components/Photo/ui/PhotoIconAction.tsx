import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { Color, Size, Type } from "@/types";
import { RotatePhotoLeft } from "../icons/RotatePhoto";

export function PhotoIconAction({
  icon: Icon,
  label,
  color = Color.Secondary,
  type = Type.Flat,
  size = Size.Sm,
  className,
  onClick,
}: {
  icon: LucideIcon | typeof RotatePhotoLeft;
  label: string;
  color?: Color;
  type?: Type;
  size?: Size;
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      iconOnly={Icon as LucideIcon}
      type={type}
      color={color}
      size={size}
      scaling={false}
      className={className}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    />
  );
}
