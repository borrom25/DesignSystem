import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TextArea } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Многострочное текстовое поле с поддержкой label, hint и состояний error/disabled.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-6" style={{ width: 360 }}>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <label className="flex items-center gap-1.5 cursor-pointer">
            Size:
            <select
              value={size}
              onChange={(event) =>
                setSize(event.target.value as (typeof SIZES)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {SIZES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={error}
              onChange={(event) => setError(event.target.checked)}
            />
            error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={required}
              onChange={(event) => setRequired(event.target.checked)}
            />
            required
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={hasHintError}
              onChange={(event) => setHasHintError(event.target.checked)}
            />
            hint error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            disabled
          </label>
        </div>

        <TextArea
          size={size}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClear={() => setValue("")}
          error={error}
          disabled={disabled}
          label="Описание"
          required={required}
          hint="Введите описание"
          hintError={hasHintError ? "Поле обязательно" : undefined}
          placeholder="Напишите что-нибудь..."
          rows={4}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-6" style={{ width: 320 }}>
        {SIZES.map((size) => (
          <TextArea
            key={size}
            size={size}
            label={`Size: ${size}`}
            placeholder={`TextArea ${size}`}
            rows={3}
          />
        ))}
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-6" style={{ width: 320 }}>
        <TextArea
          label="Default"
          placeholder="Default state"
          hint="Подсказка"
          rows={3}
        />
        <TextArea
          label="Error"
          placeholder="Error state"
          error
          hintError="Ошибка валидации"
          rows={3}
        />
        <TextArea
          label="Disabled"
          placeholder="Disabled state"
          disabled
          hint="Поле отключено"
          rows={3}
        />
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div style={{ width: 320 }}>
        <TextArea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="TextArea без label"
          rows={4}
        />
      </div>
    );
  },
};
