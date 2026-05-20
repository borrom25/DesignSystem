import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputImg, Button } from "@/components";
import { Size, Color } from "@/types";
import { useState, useEffect } from "react";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const MOCK_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%233b82f6'/%3E%3Cstop offset='1' stop-color='%238b5cf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='158' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EString preview%3C/text%3E%3C/svg%3E";

function createMockImageFile(name: string = "example.jpg"): File {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, "#3b82f6");
    gradient.addColorStop(1, "#8b5cf6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = "white";
    ctx.font = "24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Preview Image", 200, 150);
  }
  const dataUrl = canvas.toDataURL("image/jpeg");
  const arr = dataUrl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], name, { type: mime });
}

const meta = {
  title: "Components/InputImg",
  component: InputImg,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент загрузки одного изображения с drag-and-drop, превью, удалением и просмотром в модальном окне.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
      description: "Размер зоны загрузки",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "md" },
      },
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
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Загрузить" },
      },
    },
    textLoading: {
      control: "text",
      description: "Текст во время загрузки",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Загрузка" },
      },
    },
    accept: {
      control: "text",
      description: "Допустимые типы файлов",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "image/*" },
      },
    },
    maxSize: {
      control: { type: "number", min: 1 },
      description: "Максимальный размер файла в байтах",
    },
    disabled: {
      control: "boolean",
      description: "Отключить компонент",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      control: "boolean",
      description: "Состояние ошибки",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      description: "Состояние загрузки",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    progress: {
      control: { type: "range", min: 0, max: 100 },
      description: "Прогресс загрузки (0-100)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback при изменении файла",
    },
    onSizeError: {
      action: "size error",
      description: "Callback при превышении размера файла",
    },
    onAcceptError: {
      action: "accept error",
      description: "Callback при неподдерживаемом формате",
    },
  },
} satisfies Meta<typeof InputImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: Size.Md,
    label: "Изображение профиля",
    hint: "Поддерживаются форматы JPG, PNG, WEBP",
    hintError: "",
    textUpload: "Загрузить",
    textLoading: "Загрузка",
    accept: "image/*",
    maxSize: 5 * 1024 * 1024,
    disabled: false,
    error: false,
    required: false,
    loading: false,
    progress: 0,
  },
  render: (args) => (
    <div className="w-[260px] max-w-full">
      <InputImg {...args} />
    </div>
  ),
};

export const LoadingProgression: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-[260px] max-w-full">
        <InputImg
          size={Size.Md}
          label="Изображение профиля"
          loading={true}
          progress={progress}
          textLoading="Загрузка"
          onCancelUpload={() => {
            console.log("Загрузка отменена");
          }}
        />
      </div>
    );
  },
};

export const AutoUpload: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const simulateUpload = (uploadFile: File) => {
      setLoading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            setFile(uploadFile);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      return () => clearInterval(interval);
    };

    const handleBeforeUpload = (uploadFile: File) => {
      simulateUpload(uploadFile);
    };

    const handleCancelUpload = () => {
      setLoading(false);
      setProgress(0);
      setFile(null);
    };

    const handleChange = (newFile: File | null) => {
      if (!loading) {
        setFile(newFile);
      }
    };

    return (
      <div className="w-[260px] max-w-full space-y-4">
        <InputImg
          size={Size.Md}
          label="Автозагрузка изображения"
          hint="Файл начнет загружаться сразу после выбора"
          value={file}
          onChange={handleChange}
          onBeforeUpload={handleBeforeUpload}
          loading={loading}
          progress={progress}
          onCancelUpload={handleCancelUpload}
        />
      </div>
    );
  },
};

export const WithPreviewModal: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(() => createMockImageFile());

    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="text-center">
          <div className="text-lg font-medium text-primary">
            Просмотр изображения
          </div>
          <div className="text-sm text-secondary">
            Кликните на превью чтобы открыть модалку
          </div>
        </div>
        <div className="w-[200px]">
          <InputImg
            size={Size.Md}
            label="Изображение"
            value={file}
            onChange={setFile}
          />
        </div>
      </div>
    );
  },
};

export const WithStringPreview: Story = {
  render: () => {
    const [image, setImage] = useState<File | string | null>(MOCK_IMAGE_SRC);

    return (
      <div className="w-[200px]">
        <InputImg
          size={Size.Md}
          label="Готовое изображение"
          hint="value может быть URL или data URL"
          value={image}
          onChange={setImage}
        />
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [fileXs, setFileXs] = useState<File | null>(() =>
      createMockImageFile("small.jpg")
    );
    const [fileSm, setFileSm] = useState<File | null>(() =>
      createMockImageFile("medium.jpg")
    );
    const [fileMd, setFileMd] = useState<File | null>(() =>
      createMockImageFile("large.jpg")
    );

    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <div className="text-center">
          <div className="text-lg font-medium text-primary">Размеры</div>
          <div className="text-sm text-secondary">
            Модалка тянется по контенту до отступов 24px сверху и 36px снизу
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-[120px]">
            <InputImg
              size={Size.Xs}
              label="XS"
              value={fileXs}
              onChange={setFileXs}
            />
          </div>
          <div className="w-[160px]">
            <InputImg
              size={Size.Sm}
              label="SM"
              value={fileSm}
              onChange={setFileSm}
            />
          </div>
          <div className="w-[200px]">
            <InputImg
              size={Size.Md}
              label="MD"
              value={fileMd}
              onChange={setFileMd}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const ModalWithActions: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(() =>
      createMockImageFile("photo.jpg")
    );

    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="text-center">
          <div className="text-lg font-medium text-primary">
            Модалка с действиями
          </div>
          <div className="text-sm text-secondary">
            Удаление, скачивание и закрытие
          </div>
        </div>
        <div className="w-[200px]">
          <InputImg
            size={Size.Md}
            label="Фото профиля"
            hint="Кликните на превью для просмотра"
            value={file}
            onChange={setFile}
          />
        </div>
        <div className="flex gap-3">
          <Button
            size={Size.Sm}
            color={Color.Inverse}
            onClick={() => setFile(null)}
          >
            Очистить
          </Button>
          <Button
            size={Size.Sm}
            color={Color.Brand}
            onClick={() => setFile(createMockImageFile("new-photo.jpg"))}
          >
            Загрузить новое
          </Button>
        </div>
      </div>
    );
  },
};
