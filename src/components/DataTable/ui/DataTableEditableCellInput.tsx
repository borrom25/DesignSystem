import { memo } from "react";
import { tableStyles } from "../styles";
import { useEditableCellInput } from "../hooks/useEditableCellInput";
import type { TableCellEditContext, TableCellValueChangeEvent } from "../types";

type DataTableEditableCellInputProps<TData> = {
  context: TableCellEditContext<TData>;
  value: unknown;
  placeholder?: string;
  onDraftChange?: (event: TableCellValueChangeEvent<TData>) => void;
  onValueChange?: (event: TableCellValueChangeEvent<TData>) => void;
};

function DataTableEditableCellInputComponent<TData>({
  context,
  value,
  placeholder,
  onDraftChange,
  onValueChange,
}: DataTableEditableCellInputProps<TData>) {
  const { textareaRef, draft, handleChange, handleBlur, handleKeyDown } =
    useEditableCellInput({
      context,
      value,
      onDraftChange,
      onValueChange,
    });

  return (
    <textarea
      ref={textareaRef}
      className={tableStyles.cellEditorInput}
      value={draft}
      placeholder={placeholder}
      rows={1}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

export const DataTableEditableCellInput = memo(
  DataTableEditableCellInputComponent
) as typeof DataTableEditableCellInputComponent;
