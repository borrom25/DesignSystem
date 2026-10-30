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

export interface InputFilesValueProps {
  value?: File[] | null;
  defaultValue?: File[] | null;
  onChange?: (files: File[] | null) => void;
}

export interface InputFilesValidationProps {
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  validateFile?: UploadValidateFile;
  onValidationError?: UploadValidationErrorHandler;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
}

export interface InputFilesInteractionProps {
  disabled?: boolean;
  viewMode?: boolean;
  isLoading?: boolean;
  uploaderPercent?: number;
}

export interface InputFilesDownloadProps {
  downloadUrl?: string;
  onDownload?: (file: File) => void;
  showDownload?: boolean;
}

export interface InputFilesTextProps {
  textSelect?: string;
  textDrag?: string;
  placeholder?: string;
}

export interface InputFilesProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "onChange" | "value" | "defaultValue"
    >,
    BaseFieldProps,
    InputFilesValueProps,
    InputFilesValidationProps,
    InputFilesInteractionProps,
    InputFilesDownloadProps,
    InputFilesTextProps {
  size?: Size;
  error?: boolean;
  className?: string;
  placeholderFullWidth?: boolean;
}

export interface FilePreviewProps {
  file: File;
  size: Size;
  error: boolean;
  downloadUrl?: string;
  onDownload?: (file: File) => void;
  showDownload: boolean;
  viewMode: boolean;
  onRemove: () => void;
  isLoading?: boolean;
  uploaderPercent?: number;
  className?: string;
}

export interface UseInputFilesProps
  extends
    InputFilesValueProps,
    InputFilesValidationProps,
    InputFilesInteractionProps {}

export interface UseInputFilesReturn {
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
