import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { createInputFileDropValidationUsageCode } from "../upload-validation-docs/content";
import { ValidationDocsSections } from "../upload-validation-docs/ValidationDocsSections";
import { renderInputFileDropControls } from "./controls";
import { InputFileDropPreview } from "./preview";
import { INPUT_FILE_DROP_PROPS } from "./props";
import {
  INPUT_FILE_DROP_DEFAULT_STATE,
  type InputFileDropPlaygroundState,
} from "./types";
import { createInputFileDropUsageCode } from "./usage";

export const inputFileDropDocsConfig: ComponentDocsConfig<InputFileDropPlaygroundState> =
  {
    title: "InputFileDrop",
    description:
      "Мультифайловая зона загрузки на всю ширину контейнера с превью-тайлами как у InputMessage. В playground можно переключить варианты валидации: только image/video/audio/PDF или разные лимиты по типу через `validateFile`.",
    props: INPUT_FILE_DROP_PROPS,
    initialState: INPUT_FILE_DROP_DEFAULT_STATE,
    createUsageCode: createInputFileDropUsageCode,
    renderPreview: InputFileDropPreview,
    renderControls: renderInputFileDropControls,
    renderExtra: (packageName) => (
      <ValidationDocsSections
        usageTitle="Валидация по типам файлов"
        usageCode={createInputFileDropValidationUsageCode(packageName)}
      />
    ),
  };
