import { ChevronLeft } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/Button";
import { Color, Size, Type } from "@/types";
import { sidebarStyles } from "../styles";

export interface CollapseButtonProps {
  collapsed: boolean;
  onClick: () => void;
}

export function CollapseButton({ collapsed, onClick }: CollapseButtonProps) {
  return (
    <Button
      size={Size.Xs}
      type={Type.Ghost}
      color={Color.Secondary}
      className={cn(
        sidebarStyles.collapseButton,
        collapsed && sidebarStyles.collapseIconRotated
      )}
      iconOnly={ChevronLeft}
      onClick={onClick}
      aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}
      aria-expanded={!collapsed}
    />
  );
}
