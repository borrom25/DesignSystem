import { Size } from "@/types";
import {
  INPUT_FILE_DROP_VALIDATION,
  type InputFileDropValidationVariant,
} from "./validation";

export type InputFileDropPlaygroundState = {
  size: Size;
  disabled: boolean;
  error: boolean;
  loading: boolean;
  textMode: boolean;
  textDrop: string;
  placeholder: string;
  files: File[] | null;
  validation: InputFileDropValidationVariant;
  hintError?: string;
};

export const INPUT_FILE_DROP_DEFAULT_STATE: InputFileDropPlaygroundState = {
  size: Size.Md,
  disabled: false,
  error: false,
  loading: false,
  textMode: false,
  textDrop: "Выберите файл или перетащите его сюда",
  placeholder:
    "Вес файла не должен превышать 5 Mb. Разрешенные форматы: JPEG(JPG), PNG, PDF, WEBP",
  validation: "any",
  files: INPUT_FILE_DROP_VALIDATION.any.demoFiles,
  hintError: undefined,
};
