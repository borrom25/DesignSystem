import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputFileDrop } from "@/components";
import { Size } from "@/types";
import type { UploadValidationError } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/InputFileDrop",
  component: InputFileDrop,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Мультифайловая зона загрузки на всю ширину контейнера с превью-тайлами как у InputMessage. Поддерживает любые типы файлов и настраиваемую валидацию.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
      description: "Размер иконки и текста в зоне загрузки",
    },
    label: {
      control: "text",
      description: "Лейбл поля",
    },
    hint: {
      control: "text",
      description: "Подсказка под полем",
    },
    hintError: {
      control: "text",
      description: "Текст ошибки под полем",
    },
    textUpload: {
      control: "text",
      description: "Текст в зоне загрузки",
    },
    textMode: {
      control: "boolean",
      description: "Текстовая зона: фраза textDrop и требования в placeholder",
    },
    textDrop: {
      control: "text",
      description: "Фраза зоны в textMode",
    },
    placeholder: {
      control: "text",
      description: "Требования к файлу под фразой в textMode",
    },
    subtitle: {
      control: "text",
      description: "Подпись под лейблом",
    },
    accept: {
      control: "text",
      description: "Допустимые типы файлов",
    },
    maxFiles: {
      control: { type: "number", min: 1 },
      description: "Максимальное количество файлов",
    },
    maxSize: {
      control: { type: "number", min: 1 },
      description: "Максимальный размер файла в байтах",
    },
    disabled: {
      control: "boolean",
      description: "Отключить компонент",
    },
    error: {
      control: "boolean",
      description: "Состояние ошибки",
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
    },
    loading: {
      control: "boolean",
      description: "Состояние загрузки",
    },
  },
} satisfies Meta<typeof InputFileDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Md,
    label: "Вложения",
    hint: "Любые файлы до 50 MB",
    hintError: "",
    textUpload: "Загрузить",
    textMode: false,
    textDrop: "Выберите файл или перетащите его сюда",
    placeholder:
      "Вес файла не должен превышать 5 Mb. Разрешенные форматы: JPEG(JPG), PNG, PDF, WEBP",
    accept: "*",
    maxFiles: 10,
    maxSize: 50 * 1024 * 1024,
    disabled: false,
    error: false,
    required: false,
    loading: false,
  },
  render: (args) => {
    const [files, setFiles] = useState<File[] | null>(null);

    return (
      <div className="w-[440px] max-w-full">
        <InputFileDrop {...args} value={files} onChange={setFiles} />
      </div>
    );
  },
};

export const TextMode: Story = {
  render: () => {
    const [files, setFiles] = useState<File[] | null>(null);

    return (
      <div className="w-[440px] max-w-full">
        <InputFileDrop
          size={Size.Md}
          label="Файл"
          textMode
          textDrop="Выберите файл или перетащите его сюда"
          placeholder="Вес файла не должен превышать 5 Mb. Разрешенные форматы: JPEG(JPG), PNG, PDF, WEBP"
          accept="image/jpeg,image/png,image/webp,application/pdf"
          maxSize={5 * 1024 * 1024}
          value={files}
          onChange={setFiles}
        />
      </div>
    );
  },
};

export const AudioOnly: Story = {
  render: () => {
    const [files, setFiles] = useState<File[] | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    return (
      <div className="w-[440px] max-w-full">
        <InputFileDrop
          size={Size.Md}
          label="Аудиофайлы"
          hint="Только audio/*"
          hintError={errorMessage}
          error={!!errorMessage}
          accept="audio/*"
          maxFiles={5}
          value={files}
          onChange={(next) => {
            setFiles(next);
            setErrorMessage("");
          }}
          onAcceptError={() =>
            setErrorMessage("Можно загружать только аудиофайлы")
          }
          onValidationError={(error: UploadValidationError) => {
            if (error.code === "accept") {
              setErrorMessage("Можно загружать только аудиофайлы");
            }
          }}
        />
      </div>
    );
  },
};

export const WithMaxFiles: Story = {
  render: () => {
    const [files, setFiles] = useState<File[] | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    return (
      <div className="w-[440px] max-w-full">
        <InputFileDrop
          size={Size.Md}
          label="До 3 файлов"
          hint="После лимита зона загрузки скрывается"
          hintError={errorMessage}
          error={!!errorMessage}
          maxFiles={3}
          value={files}
          onChange={(next) => {
            setFiles(next);
            setErrorMessage("");
          }}
          onValidationError={(error: UploadValidationError) => {
            if (error.code === "max-files") {
              setErrorMessage("Превышен лимит файлов");
            }
            if (error.code === "max-size") {
              setErrorMessage("Файл слишком большой");
            }
          }}
        />
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [filesXs, setFilesXs] = useState<File[] | null>(null);
    const [filesSm, setFilesSm] = useState<File[] | null>(null);
    const [filesMd, setFilesMd] = useState<File[] | null>(null);

    return (
      <div className="flex w-[440px] max-w-full flex-col gap-8 p-4">
        <InputFileDrop
          size={Size.Xs}
          label="XS"
          value={filesXs}
          onChange={setFilesXs}
          maxFiles={5}
        />
        <InputFileDrop
          size={Size.Sm}
          label="SM"
          value={filesSm}
          onChange={setFilesSm}
          maxFiles={5}
        />
        <InputFileDrop
          size={Size.Md}
          label="MD"
          value={filesMd}
          onChange={setFilesMd}
          maxFiles={5}
        />
      </div>
    );
  },
};
