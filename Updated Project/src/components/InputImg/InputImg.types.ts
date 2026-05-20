import type {
  ChangeEvent,
  DragEvent,
  InputHTMLAttributes,
  RefCallback,
} from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export type InputImgValue = File | string | null;

export interface InputImgValueProps {
  value?: InputImgValue;
  defaultValue?: InputImgValue;
  onChange?: (file: File | null) => void;
  onBeforeUpload?: (file: File) => void;
}

export interface InputImgValidationProps {
  maxSize?: number;
  accept?: string;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
}

export interface InputImgInteractionProps {
  disabled?: boolean;
}

export interface InputImgTextProps {
  textUpload?: string;
  textLoading?: string;
}

export interface InputImgLoadingProps {
  loading?: boolean;
  progress?: number;
  onCancelUpload?: () => void;
}

export interface InputImgProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "onChange" | "value" | "defaultValue"
    >,
    BaseFieldProps,
    InputImgValueProps,
    InputImgValidationProps,
    InputImgInteractionProps,
    InputImgTextProps,
    InputImgLoadingProps {
  size?: Size;
  error?: boolean;
  className?: string;
}

export interface DropZoneProps {
  size: Size;
  disabled: boolean;
  isDragActive: boolean;
  error: boolean;
  textUpload: string;
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

export interface ImagePreviewProps {
  file: Exclude<InputImgValue, null>;
  size: Size;
  error: boolean;
  disabled: boolean;
  onRemove: () => void;
  className?: string;
}

export interface UseInputImgProps
  extends
    InputImgValueProps,
    InputImgValidationProps,
    InputImgInteractionProps {}

export interface UseInputImgReturn {
  file: InputImgValue;
  isDragActive: boolean;
  inputRef: RefCallback<HTMLInputElement>;
  onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
}
