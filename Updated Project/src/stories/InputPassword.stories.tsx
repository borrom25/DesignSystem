import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { KeyRound } from "lucide-react";
import { InputPassword, InputVariant } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const VARIANTS = [InputVariant.Default, InputVariant.Clear] as const;

const meta = {
  title: "Components/InputPassword",
  component: InputPassword,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле ввода пароля с кнопкой показа/скрытия, label, hint и левой иконкой по умолчанию.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [variant, setVariant] = useState<(typeof VARIANTS)[number]>(
      InputVariant.Default
    );
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
            Variant:
            <select
              value={variant}
              onChange={(event) =>
                setVariant(event.target.value as (typeof VARIANTS)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {VARIANTS.map((v) => (
                <option key={v} value={v}>
                  {v}
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

        <InputPassword
          size={size}
          variant={variant}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          error={error}
          disabled={disabled}
          label="Пароль"
          required={required}
          hint="Минимум 8 символов"
          hintError={hasHintError ? "Пароль слишком короткий" : undefined}
          placeholder="Введите пароль"
        />
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    label: "Пароль",
    placeholder: "Введите пароль",
    hint: "Минимум 8 символов",
  },
};

export const WithCustomIcon: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div style={{ width: 360 }}>
        <InputPassword
          value={value}
          onChange={(event) => setValue(event.target.value)}
          iconLeft={KeyRound}
          label="API ключ"
          placeholder="sk-..."
          hint="Никому не сообщайте ключ"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Пароль",
    placeholder: "Недоступно",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Пароль",
    placeholder: "Введите пароль",
    hintError: "Неверный пароль",
    error: true,
  },
};

export const VisibleByDefault: Story = {
  render: () => {
    const [value, setValue] = useState("secret123");

    return (
      <div style={{ width: 360 }}>
        <InputPassword
          value={value}
          onChange={(event) => setValue(event.target.value)}
          showPasswordByDefault
          label="Пароль"
          placeholder="Введите пароль"
        />
      </div>
    );
  },
};
