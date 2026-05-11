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
  selectAllLabel = "Выбрать все",
  cancelLabel = "Отмена",
  applyLabel = "Сохранить",
  size = Size.Sm,
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

  const areAllSelected =
    optionIds.length > 0 && optionIds.every((id) => draftValueSet.has(id));
  const someSelected = optionIds.some((id) => draftValueSet.has(id));

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

  const handleToggleAll = useCallback(() => {
    setDraftValue(areAllSelected ? [] : optionIds);
  }, [areAllSelected, optionIds]);

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
        <div className="flex flex-col gap-2">
          <ListItem
            size={Size.Md}
            checkbox
            selected={areAllSelected}
            visualSelected={false}
            hideSelectedOutline
            onClick={handleToggleAll}
            data-indeterminate={someSelected && !areAllSelected}
          >
            {selectAllLabel}
          </ListItem>

          {resolvedOptions.length > 0 && (
            <div className="mx-2 my-1 border-t border-line" />
          )}

          <div className="flex flex-col gap-0.5">
            {resolvedOptions.map((option) => (
              <ListItem
                key={option.id}
                size={Size.Md}
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
      </div>
    </Modal>
  );
}
