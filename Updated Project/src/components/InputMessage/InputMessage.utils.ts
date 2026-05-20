import type { KeyboardEvent } from "react";

type HandleKeyDownParams = {
  event: KeyboardEvent<HTMLTextAreaElement>;
  onSend: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
};

export function handleTextareaKeyDown({
  event,
  onSend,
  onKeyDown,
}: HandleKeyDownParams) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    onSend();
  }
  onKeyDown?.(event);
}

export function canSendMessage(
  value: string,
  disabled: boolean,
  sendDisabled: boolean,
  files: File[]
): boolean {
  return (
    !disabled && !sendDisabled && (!!value.trim().length || !!files.length)
  );
}
