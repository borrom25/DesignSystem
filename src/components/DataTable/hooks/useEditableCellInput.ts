import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type {
  TableCellEditContext,
  TableCellValueChangeEvent,
  TableCellValueChangeReason,
} from "../types";
import {
  createDataTableCellValueChangeEvent,
  formatDataTableCellValue,
} from "../utils/cellEditing";

interface UseEditableCellInputOptions<TData> {
  context: TableCellEditContext<TData>;
  value: unknown;
  onDraftChange?: (event: TableCellValueChangeEvent<TData>) => void;
  onValueChange?: (event: TableCellValueChangeEvent<TData>) => void;
}

export function useEditableCellInput<TData>({
  context,
  value,
  onDraftChange,
  onValueChange,
}: UseEditableCellInputOptions<TData>) {
  const formattedValue = formatDataTableCellValue(value);
  const [draft, setDraft] = useState(formattedValue);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const latestDraftRef = useRef(draft);

  const createEvent = useCallback(
    (nextValue: unknown, reason: TableCellValueChangeReason) =>
      createDataTableCellValueChangeEvent(context, nextValue, reason),
    [context]
  );

  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, []);

  const commitValue = useCallback(
    (reason: TableCellValueChangeReason) => {
      if (latestDraftRef.current === formattedValue) return;

      onValueChange?.(createEvent(latestDraftRef.current, reason));
    },
    [createEvent, formattedValue, onValueChange]
  );

  useEffect(() => {
    setDraft(formattedValue);
    latestDraftRef.current = formattedValue;
  }, [formattedValue]);

  useLayoutEffect(() => {
    resizeTextarea();
  }, [draft, resizeTextarea]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      latestDraftRef.current = nextValue;
      setDraft(nextValue);
      onDraftChange?.(createEvent(nextValue, "change"));
    },
    [createEvent, onDraftChange]
  );

  const handleBlur = useCallback(() => {
    commitValue("blur");
  }, [commitValue]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      event.stopPropagation();

      if (event.key !== "Enter" || event.shiftKey) return;

      event.preventDefault();
      commitValue("enter");
      event.currentTarget.blur();
    },
    [commitValue]
  );

  return {
    textareaRef,
    draft,
    handleChange,
    handleBlur,
    handleKeyDown,
  };
}
