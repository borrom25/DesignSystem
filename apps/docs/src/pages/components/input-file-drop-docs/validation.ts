import type { UploadValidateFile } from "@/types";

const MB = 1024 * 1024;

export type InputFileDropValidationVariant =
  | "any"
  | "images"
  | "video"
  | "audio"
  | "pdf"
  | "mixed";

function createDemoFile(name: string, type: string, contents: string) {
  return new File([contents], name, { type });
}

export const INPUT_FILE_DROP_VALIDATION_OPTIONS = [
  { value: "any", label: "Любые файлы" },
  { value: "images", label: "Только изображения" },
  { value: "video", label: "Только видео" },
  { value: "audio", label: "Только аудио" },
  { value: "pdf", label: "Только PDF" },
  { value: "mixed", label: "Лимиты по типу" },
] as const satisfies readonly {
  value: InputFileDropValidationVariant;
  label: string;
}[];

export type InputFileDropValidationPreset = {
  label: string;
  hint: string;
  accept: string;
  maxSize: number;
  maxSizeUsage: string;
  maxFiles: number;
  demoFiles: File[];
  validateFile: UploadValidateFile;
};

const forbidExe: UploadValidateFile = (file) => {
  if (file.name.toLowerCase().endsWith(".exe")) {
    return "EXE-файлы запрещены";
  }
  return true;
};

const validateByType: UploadValidateFile = (file, context) => {
  if (file.type.startsWith("image/") && file.size > 5 * MB) {
    return "Картинка не больше 5 MB";
  }
  if (file.type.startsWith("video/") && file.size > 50 * MB) {
    return "Видео не больше 50 MB";
  }
  if (file.type.startsWith("audio/") && file.size > 15 * MB) {
    return "Аудио не больше 15 MB";
  }
  if (
    (file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf")) &&
    file.size > 10 * MB
  ) {
    return "PDF не больше 10 MB";
  }
  return forbidExe(file, context);
};

export const INPUT_FILE_DROP_VALIDATION: Record<
  InputFileDropValidationVariant,
  InputFileDropValidationPreset
> = {
  any: {
    label: "Файлы",
    hint: "Любые файлы до 50 MB",
    accept: "*",
    maxSize: 50 * MB,
    maxSizeUsage: "50 * 1024 * 1024",
    maxFiles: 10,
    demoFiles: [
      createDemoFile("notes.pdf", "application/pdf", "Notes"),
      createDemoFile("voice.mp3", "audio/mpeg", "audio-bytes"),
    ],
    validateFile: forbidExe,
  },
  images: {
    label: "Изображения",
    hint: "Только image/*, до 5 MB",
    accept: "image/*",
    maxSize: 5 * MB,
    maxSizeUsage: "5 * 1024 * 1024",
    maxFiles: 8,
    demoFiles: [createDemoFile("cover.png", "image/png", "image-bytes")],
    validateFile: forbidExe,
  },
  video: {
    label: "Видео",
    hint: "Только video/*, до 50 MB",
    accept: "video/*",
    maxSize: 50 * MB,
    maxSizeUsage: "50 * 1024 * 1024",
    maxFiles: 3,
    demoFiles: [createDemoFile("clip.mp4", "video/mp4", "video-bytes")],
    validateFile: forbidExe,
  },
  audio: {
    label: "Аудио",
    hint: "Только audio/*, до 15 MB",
    accept: "audio/*",
    maxSize: 15 * MB,
    maxSizeUsage: "15 * 1024 * 1024",
    maxFiles: 5,
    demoFiles: [createDemoFile("voice.mp3", "audio/mpeg", "audio-bytes")],
    validateFile: forbidExe,
  },
  pdf: {
    label: "Документы",
    hint: "Только PDF, до 10 MB",
    accept: ".pdf,application/pdf",
    maxSize: 10 * MB,
    maxSizeUsage: "10 * 1024 * 1024",
    maxFiles: 5,
    demoFiles: [createDemoFile("notes.pdf", "application/pdf", "Notes")],
    validateFile: forbidExe,
  },
  mixed: {
    label: "Вложения",
    hint: "Картинки 5 MB, видео 50 MB, аудио 15 MB, PDF 10 MB",
    accept: "image/*,video/*,audio/*,.pdf,application/pdf",
    maxSize: 50 * MB,
    maxSizeUsage: "50 * 1024 * 1024",
    maxFiles: 10,
    demoFiles: [
      createDemoFile("notes.pdf", "application/pdf", "Notes"),
      createDemoFile("voice.mp3", "audio/mpeg", "audio-bytes"),
    ],
    validateFile: validateByType,
  },
};

export function getInputFileDropValidation(
  variant: InputFileDropValidationVariant
) {
  return INPUT_FILE_DROP_VALIDATION[variant];
}

export function createInputFileDropValidateFileUsage(
  variant: InputFileDropValidationVariant
) {
  if (variant === "mixed") {
    return `        validateFile={(file) => {
          const mb = (n: number) => n * 1024 * 1024;
          if (file.type.startsWith("image/") && file.size > mb(5)) {
            return "Картинка не больше 5 MB";
          }
          if (file.type.startsWith("video/") && file.size > mb(50)) {
            return "Видео не больше 50 MB";
          }
          if (file.type.startsWith("audio/") && file.size > mb(15)) {
            return "Аудио не больше 15 MB";
          }
          if (
            (file.type === "application/pdf" ||
              file.name.toLowerCase().endsWith(".pdf")) &&
            file.size > mb(10)
          ) {
            return "PDF не больше 10 MB";
          }
          return true;
        }}`;
  }

  return `        validateFile={(file) => {
          if (file.name.toLowerCase().endsWith(".exe")) {
            return "EXE-файлы запрещены";
          }
          return true;
        }}`;
}
