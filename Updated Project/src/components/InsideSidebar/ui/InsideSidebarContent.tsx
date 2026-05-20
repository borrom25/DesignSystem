import { cn } from "@/utils";
import { insideSidebarStyles } from "../styles";
import { useScreenSize } from "@/providers";
import { InsideSidebarProps } from "../InsideSidebar.types";

export function InsideSidebarContent({
  slotContent,
  className,
  title,
  actionSlot,
  headSlot,
  bottomSlotAction,
  ...restProps
}: InsideSidebarProps) {
  const { isMobile } = useScreenSize();

  return (
    <aside
      className={cn(
        isMobile ? insideSidebarStyles.rootMobile : insideSidebarStyles.root,
        className
      )}
      {...restProps}
    >
      <div className={insideSidebarStyles.headerRow}>
        {title && (
          <span className={insideSidebarStyles.titleText}>{title}</span>
        )}
        {actionSlot && (
          <div className={insideSidebarStyles.actionSlot}>{actionSlot}</div>
        )}
      </div>

      <div className={insideSidebarStyles.separator} />

      {headSlot && (
        <div className={insideSidebarStyles.headSlot}>{headSlot}</div>
      )}

      {slotContent && (
        <div className={insideSidebarStyles.contentContainer}>
          {slotContent}
        </div>
      )}

      {bottomSlotAction && (
        <>
          <div className={insideSidebarStyles.separator} />
          <div className={insideSidebarStyles.bottomSlot}>
            {bottomSlotAction}
          </div>
        </>
      )}
    </aside>
  );
}
