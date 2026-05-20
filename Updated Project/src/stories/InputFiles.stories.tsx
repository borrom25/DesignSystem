import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { InputFiles } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/InputFiles",
  component: InputFiles,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле загрузки файлов с поддержкой drag-and-drop, множественного выбора, валидации размера и типа файлов.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputFiles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [multiple, setMultiple] = useState(false);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [viewMode, setViewMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState<File[] | null>(null);

    return (
      <div className="flex flex-col gap-6" style={{ width: 400 }}>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <label className="flex items-center gap-1.5 cursor-pointer">
            Size:
            <select
              value={size}
              onChange={(e) =>
                setSize(e.target.value as (typeof SIZES)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={multiple}
              onChange={(e) => setMultiple(e.target.checked)}
            />
            multiple
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={error}
              onChange={(e) => setError(e.target.checked)}
            />
            error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            disabled
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={viewMode}
              onChange={(e) => setViewMode(e.target.checked)}
            />
            viewMode
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isLoading}
              onChange={(e) => setIsLoading(e.target.checked)}
            />
            isLoading
          </label>
        </div>

        <InputFiles
          size={size}
          label="Загрузите файл"
          subtitle="Дополнительная информация о загрузке"
          hint="Поддерживаются файлы до 50 MB"
          hintError={error ? "Ошибка загрузки файла" : undefined}
          error={error}
          disabled={disabled}
          viewMode={viewMode}
          isLoading={isLoading}
          multiple={multiple}
          maxFiles={multiple ? 5 : 1}
          value={files}
          onChange={setFiles}
          accept="*"
          onSizeError={(f) => console.log("Size error:", f.name)}
          onAcceptError={(f) => console.log("Accept error:", f.name)}
        />

        {files && files.length > 0 && (
          <div className="text-xs text-secondary">
            Выбрано: {files.map((f) => f.name).join(", ")}
          </div>
        )}
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  args: {
    size: Size.Md,
    label: "Загрузка документа",
    hint: "Выберите файл для загрузки",
    placeholder:
      "Одиночная загрузка. Строго запрещено загружать данные компании или другие запрещенные файлы.",
    multiple: false,
    maxFiles: 1,
    accept: "*",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    size: Size.Md,
    label: "Загрузка файла",
    hint: "Выберите файл для загрузки",
    multiple: false,
    maxFiles: 1,
    accept: "*",
  },
};

export const SingleFile: Story = {
  args: {
    size: Size.Md,
    label: "Документ",
    hint: "Выберите один файл",
    multiple: false,
    maxFiles: 1,
    accept: "*",
  },
};

export const MultipleFiles: Story = {
  args: {
    size: Size.Md,
    label: "Файлы",
    hint: "Можно выбрать до 5 файлов",
    multiple: true,
    maxFiles: 5,
    accept: "*",
  },
};

export const Disabled: Story = {
  args: {
    size: Size.Md,
    label: "Файл",
    hint: "Поле недоступно",
    disabled: true,
  },
};

export const ViewMode: Story = {
  args: {
    size: Size.Md,
    label: "Прикрепленный файл",
    viewMode: true,
    showDownload: true,
    defaultValue: [
      new File(["demo"], "document.pdf", { type: "application/pdf" }),
    ],
  },
};

export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [singleUploaderPercent, setSingleUploaderPercent] = useState(0);
    const [multipleUploaderPercent, setMultipleUploaderPercent] = useState(0);
    const [singleFile, setSingleFile] = useState<File[] | null>([
      new File(["uploading"], "report.pdf", { type: "application/pdf" }),
    ]);
    const [multipleFiles, setMultipleFiles] = useState<File[] | null>([
      new File(["uploading-1"], "report-1.pdf", { type: "application/pdf" }),
      new File(["uploading-2"], "report-2.pdf", { type: "application/pdf" }),
    ]);

    useEffect(() => {
      if (!isLoading) return;

      setSingleUploaderPercent(0);
      setMultipleUploaderPercent(0);

      const interval = setInterval(() => {
        setSingleUploaderPercent((prev) => (prev >= 100 ? 0 : prev + 2));
        setMultipleUploaderPercent((prev) => (prev >= 100 ? 0 : prev + 3));
      }, 120);

      return () => clearInterval(interval);
    }, [isLoading]);

    return (
      <div className="flex flex-col gap-4" style={{ width: 400 }}>
        <button
          type="button"
          className="w-fit rounded border border-white/10 px-3 py-1.5 text-xs text-secondary hover:bg-white/5"
          onClick={() => setIsLoading((prev) => !prev)}
        >
          {isLoading ? "Отключить loading" : "Включить loading"}
        </button>

        <InputFiles
          size={Size.Md}
          label="Загрузка файла (обычный)"
          hint={
            isLoading
              ? "Файл загружается, дождитесь завершения"
              : "Загрузка завершена"
          }
          isLoading={isLoading}
          uploaderPercent={singleUploaderPercent}
          value={singleFile}
          onChange={setSingleFile}
          showDownload={false}
          accept="*"
          maxFiles={1}
        />

        <InputFiles
          size={Size.Md}
          label="Загрузка файлов (multiple)"
          hint={
            isLoading
              ? "Файлы загружаются, дождитесь завершения"
              : "Загрузка завершена"
          }
          isLoading={isLoading}
          uploaderPercent={multipleUploaderPercent}
          value={multipleFiles}
          onChange={setMultipleFiles}
          multiple
          showDownload={false}
          accept="*"
          maxFiles={5}
        />
      </div>
    );
  },
};

export const WithSubtitle: Story = {
  args: {
    size: Size.Md,
    label: "Загрузка документа",
    subtitle: "Дополнительная информация о поле",
    hint: "Выберите файл для загрузки",
    multiple: false,
    maxFiles: 1,
    accept: "*",
  },
};
