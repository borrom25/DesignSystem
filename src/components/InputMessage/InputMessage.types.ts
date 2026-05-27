import type { TextareaHTMLAttributes, KeyboardEvent } from "react";
import type { LucideIcon } from "lucide-react";

export type InputMessageAttachment = {
  id: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
};

export type InputMessageOnFileChangeArgs = {
  files?: File[] | FileList;
  errorMessage?: string;
};

export type InputMessageOnChangeArgs = InputMessageOnFileChangeArgs & {
  value: string;
};

export type InputMessageProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "value" | "defaultValue"
> & {
  value?: string;
  defaultValue?: string;
  onChange?: ({ value, files, errorMessage }: InputMessageOnChangeArgs) => void;
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
  fileAccept?: string;
  maxFileCount?: number;
  maxFileSize?: number;
};

export interface MessageFilePreviewProps {
  file: File;
  onRemove: () => void;
}

export type ActionFileChangeProps = {
  onChange?: ({ files, errorMessage }: InputMessageOnFileChangeArgs) => void;
  maxFileCount?: number;
  maxFileSize: number;
};
