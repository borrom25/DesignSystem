import type { InputFilesPlaygroundState } from "./types";

export function createInputFilesUsageCode(
  packageName: string,
  state: InputFilesPlaygroundState
) {
  return `import { useState } from "react";
import { Card, InputFiles } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [files, setFiles] = useState<File[] | null>(null);

  return (
    <Card
      size="sm"
      title="${state.multiple ? "Документы" : "Документ"}"
      subtitle="Загрузите файл или перетащите его в зону ниже"
    >
      <InputFiles
        label="${state.multiple ? "Файлы" : "Файл"}"
        hint="Поддерживаются документы до 50 MB"
        placeholder="Загрузите документ, изображение или архив"
        accept="*"
        maxSize={50 * 1024 * 1024}
        multiple={${state.multiple}}
        maxFiles={${state.multiple ? 5 : 1}}
        value={files}
        onChange={(nextFiles) => setFiles(nextFiles)}
        size="${state.size}"${state.viewMode ? "\n        viewMode" : ""}${
          state.loading
            ? "\n        isLoading\n        uploaderPercent={72}"
            : ""
        }${state.disabled ? "\n        disabled" : ""}${
          state.error
            ? '\n        error\n        hintError="Проверьте тип файла или размер"'
            : ""
        }
      />
    </Card>
  );
}`;
}
