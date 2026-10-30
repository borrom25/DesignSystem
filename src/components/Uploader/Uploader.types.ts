import type {
  ChangeEvent,
  DragEvent,
  InputHTMLAttributes,
  RefCallback,
} from "react";
import type {
  UploadValidateFile,
  UploadValidationErrorHandler,
} from "@/types/upload";

export interface UploaderProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "children"
> {
  disabled?: boolean;
  error?: boolean;
  isDragActive?: boolean;
  textSelect?: string;
  textDrag?: string;
  placeholder?: string;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  validateFile?: UploadValidateFile;
  onValidationError?: UploadValidationErrorHandler;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
  onFiles?: (files: File[]) => void;
  name?: string;
  required?: boolean;
  inputRef?: RefCallback<HTMLInputElement>;
  onDragEnter?: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholderFullWidth?: boolean;
}
