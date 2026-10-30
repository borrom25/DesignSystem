import type { InputFileDropPlaygroundState } from "./types";
import {
  createInputFileDropValidateFileUsage,
  getInputFileDropValidation,
} from "./validation";

export function createInputFileDropUsageCode(
  packageName: string,
  state: InputFileDropPlaygroundState
) {
  const preset = getInputFileDropValidation(state.validation);

  return `import { useState } from "react";
import { Card, InputFileDrop } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [hintError, setHintError] = useState<string>();

  return (
    <Card
      size="sm"
      title="Вложения"
      subtitle="Загрузите файл или перетащите его в зону ниже"
    >
      <InputFileDrop
        label="${preset.label}"
        hint="${preset.hint}"
        accept="${preset.accept}"
        maxSize={${preset.maxSizeUsage}}
        maxFiles={${preset.maxFiles}}
        value={files}
        onChange={(nextFiles) => {
          setFiles(nextFiles);
          setHintError(undefined);
        }}
        error={Boolean(hintError)}
        hintError={hintError}
${createInputFileDropValidateFileUsage(state.validation)}
        onValidationError={(error) => setHintError(error.message)}
        size="${state.size}"${
          state.textMode
            ? `\n        textMode\n        textDrop="${state.textDrop}"\n        placeholder="${state.placeholder}"`
            : ""
        }${state.loading ? "\n        loading\n        progress={72}" : ""}${
          state.disabled ? "\n        disabled" : ""
        }
      />
    </Card>
  );
}`;
}
