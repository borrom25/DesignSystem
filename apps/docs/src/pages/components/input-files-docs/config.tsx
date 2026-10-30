import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { createInputFilesValidationUsageCode } from "../upload-validation-docs/content";
import { ValidationDocsSections } from "../upload-validation-docs/ValidationDocsSections";
import { renderInputFilesControls } from "./controls";
import { InputFilesPreview } from "./preview";
import { INPUT_FILES_PROPS } from "./props";
import {
  INPUT_FILES_DEFAULT_STATE,
  type InputFilesPlaygroundState,
} from "./types";
import { createInputFilesUsageCode } from "./usage";

export const inputFilesDocsConfig: ComponentDocsConfig<InputFilesPlaygroundState> =
  {
    title: "InputFiles",
    description:
      "InputFiles покрывает сценарии одиночной и множественной загрузки файлов с drag-and-drop, просмотром, валидацией и отображением прогресса. Ошибки валидации не рисуются сами — их нужно обработать через `onValidationError` и передать в `error` / `hintError`.",
    props: INPUT_FILES_PROPS,
    initialState: INPUT_FILES_DEFAULT_STATE,
    createUsageCode: createInputFilesUsageCode,
    renderPreview: InputFilesPreview,
    renderControls: renderInputFilesControls,
    renderExtra: (packageName) => (
      <ValidationDocsSections
        usageTitle="Валидация InputFiles с hintError"
        usageCode={createInputFilesValidationUsageCode(packageName)}
      />
    ),
  };
