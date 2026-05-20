import type { TextareaHTMLAttributes, KeyboardEvent } from "react";
import type { LucideIcon } from "lucide-react";

export type InputMessageAttachment = {
  id: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
};

export type InputMessageProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "value" | "defaultValue"
> & {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  showAttachments?: boolean;
  sendDisabled?: boolean;
  onSend?: (value?: string, files?: File[]) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  className?: string;
  textareaClassName?: string;
  popoverContentClassName?: string;
  maxRows?: number;
};

export interface MessageFilePreviewProps {
  file: File;
  onRemove: () => void;
}
