import type { ReactNode } from "react";
import { CloseBtn } from "@/components/CloseBtn";
import { Size } from "@/types";
import { tableStyles } from "../styles";

interface DataTablePopoverActionContentProps {
  selectedLabel: ReactNode;
  children?: ReactNode;
  onClose: () => void;
}

export function DataTablePopoverActionContent({
  selectedLabel,
  children,
  onClose,
}: DataTablePopoverActionContentProps) {
  return (
    <>
      <div className={tableStyles.popoverActionContent}>
        <span className={tableStyles.popoverActionSelectedLabel}>
          {selectedLabel}
        </span>
        {children && (
          <div className={tableStyles.popoverActionSlot}>{children}</div>
        )}
      </div>
      <CloseBtn
        size={Size.Sm}
        className={tableStyles.popoverActionClose}
        aria-label="Скрыть панель выбранных строк"
        onClick={onClose}
      />
    </>
  );
}
