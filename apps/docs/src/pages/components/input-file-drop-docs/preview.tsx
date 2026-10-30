import { Card, InputFileDrop } from "@/components";
import { Size } from "@/types";
import type { InputFileDropPlaygroundState } from "./types";
import { getInputFileDropValidation } from "./validation";

type InputFileDropPreviewArgs = {
  updateState: (patch: Partial<InputFileDropPlaygroundState>) => void;
};

export function InputFileDropPreview(
  state: InputFileDropPlaygroundState,
  { updateState }: InputFileDropPreviewArgs
) {
  const preset = getInputFileDropValidation(state.validation);

  return (
    <div className="w-[440px] max-w-full">
      <Card
        size={Size.Sm}
        title="Вложения"
        subtitle="Загрузите файл или перетащите его в зону ниже"
      >
        <div className="space-y-3">
          <InputFileDrop
            size={state.size}
            label={preset.label}
            hint={state.error ? undefined : preset.hint}
            hintError={
              state.error
                ? (state.hintError ?? "Проверьте тип файла или размер")
                : undefined
            }
            textUpload="Загрузить"
            textMode={state.textMode}
            textDrop={state.textDrop}
            placeholder={state.textMode ? state.placeholder : undefined}
            accept={preset.accept}
            maxSize={preset.maxSize}
            maxFiles={preset.maxFiles}
            disabled={state.disabled}
            error={state.error}
            loading={state.loading}
            progress={state.loading ? 72 : 0}
            value={state.files}
            onChange={(files) =>
              updateState({ files, error: false, hintError: undefined })
            }
            validateFile={preset.validateFile}
            onValidationError={(error) => {
              updateState({
                error: true,
                hintError: error.message ?? "Проверьте тип файла или размер",
              });
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
