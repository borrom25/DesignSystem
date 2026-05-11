import { LayoutGrid } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components";

export interface MenuButtonProps {
  onClick?: () => void;
  testId?: string;
}

export function MenuButton({ onClick, testId }: MenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      data-testid={testId}
      aria-label="Открыть меню"
      iconOnly={LayoutGrid}
      color={Color.Brand}
      type={Type.Flat}
      size={Size.Sm}
    />
  );
}
