import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { ListItem } from "@/components/ListItem";
import { Modal } from "@/components/Modal";
import { ModalType } from "@/components/Modal/Modal.types";
import { Size, Type } from "@/types";
import type { TableColumnsModalProps } from "./TableColumnsModal.types";
import { tableColumnsModalStyles } from "./styles";
import { normalizeTableColumnsSelection } from "./TableColumnsModal.utils";
import { useTableColumnsModalOptions } from "./useTableColumnsModalOptions";

export function TableColumnsModal<TData = unknown, T extends string = string>({
  open,
  onOpenChange,
  value,
  columns,
  options,
  onApply,
  title = "Настройка таблицы",
  subtitle,
  cancelLabel = "Отмена",
  applyLabel = "Сохранить",
  size = Size.Xs,
  showCloseButton = true,
}: TableColumnsModalProps<TData, T>) {
  const resolvedOptions = useTableColumnsModalOptions<TData, T>({
    columns,
    options,
  });
  const optionIds = useMemo(
    () => resolvedOptions.map((option) => option.id),
    [resolvedOptions]
  );
  const [draftValue, setDraftValue] = useState<T[]>(() =>
    normalizeTableColumnsSelection(value, optionIds)
  );
  const draftValueSet = useMemo(() => new Set(draftValue), [draftValue]);

  useEffect(() => {
    if (!open) {
      return;
    }

    setDraftValue(normalizeTableColumnsSelection(value, optionIds));
  }, [open, optionIds, value]);

  const handleToggleOption = useCallback(
    (optionId: T) => {
      setDraftValue((prev) => {
        const nextValue = prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId];

        return normalizeTableColumnsSelection(nextValue, optionIds);
      });
    },
    [optionIds]
  );

  const handleApply = useCallback(() => {
    onApply?.(normalizeTableColumnsSelection(draftValue, optionIds));
    onOpenChange?.(false);
  }, [draftValue, onApply, onOpenChange, optionIds]);

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      type={ModalType.modal}
      size={size}
      withBodyPadding={false}
      title={title}
      subtitle={subtitle}
      showCloseButton={showCloseButton}
      bottomSlot={
        <div className={tableColumnsModalStyles.footer}>
          <Button
            size={Size.Xs}
            type={Type.Ghost}
            onClick={() => onOpenChange?.(false)}
          >
            {cancelLabel}
          </Button>
          <Button size={Size.Xs} onClick={handleApply}>
            {applyLabel}
          </Button>
        </div>
      }
    >
      <div className={tableColumnsModalStyles.content}>
        <div className={tableColumnsModalStyles.list}>
          {resolvedOptions.map((option) => (
            <ListItem
              key={option.id}
              size={Size.Xs}
              checkbox
              selected={draftValueSet.has(option.id)}
              visualSelected={false}
              hideSelectedOutline
              onClick={() => handleToggleOption(option.id)}
            >
              {option.label}
            </ListItem>
          ))}
        </div>
      </div>
    </Modal>
  );
}
