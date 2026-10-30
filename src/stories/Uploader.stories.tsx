import type { ChangeEvent, DragEvent } from "react";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Uploader } from "@/components";

const meta = {
  title: "Components/Uploader",
  component: Uploader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Самостоятельный drag-and-drop загрузчик файлов. Используется как базовый блок для компонентов с загрузкой.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Uploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [disabled, setDisabled] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);
    const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);

    const handleDragEnter = () => {
      setIsDragActive(true);
    };

    const handleDragLeave = () => {
      setIsDragActive(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      setIsDragActive(false);
      const droppedFiles = Array.from(e.dataTransfer.files ?? []);
      setSelectedFileNames(droppedFiles.map((file) => file.name));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      setSelectedFileNames(files.map((file) => file.name));
    };

    return (
      <div className="flex w-[420px] max-w-full flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
          <label className="flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            disabled
          </label>
          <label className="flex cursor-pointer items-center gap-1.5">
            <input
              type="checkbox"
              checked={multiple}
              onChange={(event) => setMultiple(event.target.checked)}
            />
            multiple
          </label>
        </div>

        <Uploader
          {...args}
          disabled={disabled}
          multiple={multiple}
          isDragActive={isDragActive}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onInputChange={handleInputChange}
        />

        <div className="text-xs text-secondary">
          {selectedFileNames.length > 0
            ? `Выбрано: ${selectedFileNames.join(", ")}`
            : "Файлы не выбраны"}
        </div>
      </div>
    );
  },
  args: {
    textSelect: "Выберите файл",
    textDrag: "или перетащите сюда",
    placeholder: "Можно перетаскивать файлы прямо в зону загрузки",
    accept: "*",
  },
};

export const DragActive: Story = {
  args: {
    textSelect: "Выберите файл",
    textDrag: "или перетащите сюда",
    isDragActive: true,
    accept: "*",
  },
};

export const Disabled: Story = {
  args: {
    textSelect: "Выберите файл",
    textDrag: "или перетащите сюда",
    placeholder: "Загрузка недоступна",
    disabled: true,
    accept: "*",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    textSelect: "Выберите файл",
    textDrag: "или перетащите сюда",
    accept: "*",
  },
};
