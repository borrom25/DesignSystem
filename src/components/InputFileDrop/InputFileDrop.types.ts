import type {
  ChangeEvent,
  DragEvent,
  InputHTMLAttributes,
  RefCallback,
} from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";
import type {
  UploadValidateFile,
  UploadValidationErrorHandler,
} from "@/types/upload";

export interface InputFileDropValueProps {
  value?: File[] | null;
  defaultValue?: File[] | null;
  onChange?: (files: File[] | null) => void;
}

export interface InputFileDropValidationProps {
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  validateFile?: UploadValidateFile;
  onValidationError?: UploadValidationErrorHandler;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
}

export interface InputFileDropTextProps {
  textUpload?: string;
  textLoading?: string;
  textMode?: boolean;
  textDrop?: string;
  placeholder?: string;
}

export interface InputFileDropLoadingProps {
  loading?: boolean;
  progress?: number;
  onCancelUpload?: () => void;
}

export interface InputFileDropProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "onChange" | "value" | "defaultValue" | "multiple"
    >,
    BaseFieldProps,
    InputFileDropValueProps,
    InputFileDropValidationProps,
    InputFileDropTextProps,
    InputFileDropLoadingProps {
  size?: Size;
  error?: boolean;
  className?: string;
  disabled?: boolean;
}

export interface DropZoneProps {
  size: Size;
  disabled: boolean;
  isDragActive: boolean;
  error: boolean;
  textUpload: string;
  textMode?: boolean;
  textDrop?: string;
  placeholder?: string;
  accept: string;
  name?: string;
  required?: boolean;
  inputRef: RefCallback<HTMLInputElement>;
  onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  loading?: boolean;
  progress?: number;
  textLoading?: string;
  onCancelUpload?: () => void;
}

export interface UseInputFileDropProps
  extends InputFileDropValueProps, InputFileDropValidationProps {
  disabled?: boolean;
}

export interface UseInputFileDropReturn {
  files: File[];
  isDragActive: boolean;
  inputRef: RefCallback<HTMLInputElement>;
  onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}
