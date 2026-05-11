import { useRef, useEffect, useCallback } from "react";

const LINE_HEIGHT = 20;

type UseTextareaAutoGrowProps = {
  value: string;
  maxRows: number;
};

export function useTextareaAutoGrow({
  value,
  maxRows,
}: UseTextareaAutoGrowProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const maxHeight = LINE_HEIGHT * maxRows;
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    textarea.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
  }, [maxRows]);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  return { textareaRef };
}
