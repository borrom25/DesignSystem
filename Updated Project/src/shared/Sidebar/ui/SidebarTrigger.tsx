import { cn } from "@/utils";
import { BarMenu, Button, StepBar } from "@/components";
import { Menu } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { SidebarTriggerProps } from "../types";
import { sidebarStyles } from "../styles";

export const SidebarTrigger = ({
  type,
  onClick,
  items,
  value,
  onItemClick,
}: SidebarTriggerProps) => {
  const content = () => {
    if (type === "inside") {
      return (
        <BarMenu
          items={items ?? []}
          value={value}
          onMoreClick={onClick}
          onSelect={(value) => onItemClick?.(value)}
        />
      );
    }
    if (type === "process") {
      return (
        <StepBar
          items={items ?? []}
          active={value}
          onChangeStep={(step) => onItemClick?.(step)}
        />
      );
    }

    return (
      <Button
        iconOnly={Menu}
        size={Size.Md}
        color={Color.Inverse}
        type={Type.Flat}
        onClick={onClick}
        className={sidebarStyles.triggerButton}
      />
    );
  };

  return (
    <div
      className={cn(
        sidebarStyles.triggerBase,
        sidebarStyles.triggerVariants[type]
      )}
    >
      {content()}
    </div>
  );
};
