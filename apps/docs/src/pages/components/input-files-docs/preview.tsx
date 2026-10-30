import { Card, InputFiles } from "@/components";
import { Size } from "@/types";
import type { InputFilesPlaygroundState } from "./types";

type InputFilesPreviewArgs = {
  updateState: (patch: Partial<InputFilesPlaygroundState>) => void;
};

export function InputFilesPreview(
  state: InputFilesPlaygroundState,
  { updateState }: InputFilesPreviewArgs
) {
  return (
    <div className="w-[440px] max-w-full">
      <Card
        size={Size.Sm}
        title={state.multiple ? "Документы" : "Документ"}
        subtitle="Загрузите файл или перетащите его в зону ниже"
      >
        <div className="space-y-3">
          <InputFiles
            size={state.size}
            label={state.multiple ? "Файлы" : "Файл"}
            subtitle="Drag-and-drop и обычный выбор работают одинаково"
            hint={state.error ? undefined : "Поддерживаются документы до 50 MB"}
            hintError={
              state.error ? "Проверьте тип файла или размер" : undefined
            }
            placeholder="Загрузите документ, изображение или архив"
            accept="*"
            maxSize={50 * 1024 * 1024}
            multiple={state.multiple}
            maxFiles={state.multiple ? 5 : 1}
            disabled={state.disabled}
            error={state.error}
            viewMode={state.viewMode}
            isLoading={state.loading}
            uploaderPercent={state.loading ? 72 : undefined}
            showDownload={state.viewMode}
            value={state.files}
            onChange={(files) => updateState({ files, error: false })}
            validateFile={(file) => {
              if (file.name.toLowerCase().endsWith(".exe")) {
                return "EXE-файлы запрещены";
              }
              return true;
            }}
            onValidationError={(error) => {
              updateState({ error: true });
              console.log(error.code, error.file.name, error.message);
            }}
          />

          {state.files && state.files.length > 0 ? (
            <p className="text-xs text-secondary">
              Выбрано: {state.files.map((file) => file.name).join(", ")}
            </p>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
