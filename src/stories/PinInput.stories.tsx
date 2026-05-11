import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, type KeyboardEvent } from "react";
import { PinInput, PinInputType } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const TYPES = [PinInputType.Default, PinInputType.Masked] as const;

const meta = {
  title: "Components/PinInput",
  component: PinInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент для ввода одной цифры (0-9). Используется для кодов подтверждения, PIN-кодов и т.д.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [type, setType] = useState<(typeof TYPES)[number]>(
      PinInputType.Default
    );
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-6">
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
            Type:
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value as (typeof TYPES)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {TYPES.map((item) => (
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
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            disabled
          </label>
        </div>

        <div className="flex gap-2">
          <PinInput
            size={size}
            type={type}
            error={error}
            disabled={disabled}
            value={value}
            onChange={setValue}
            autoFocus
          />
        </div>

        <div className="text-xs text-secondary">
          Введенное значение: {value || "(пусто)"}
        </div>
      </div>
    );
  },
};

export const CodeInput: Story = {
  render: () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [size] = useState<Size>(Size.Md);
    const [type, setType] = useState<(typeof TYPES)[number]>(
      PinInputType.Default
    );

    const handlePinChange = (index: number, value: string) => {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    };

    const handleComplete = (index: number) => {
      if (index < code.length - 1) {
        const nextInput = document.querySelector(
          `input[data-pin-index="${index + 1}"]`
        ) as HTMLInputElement;
        nextInput?.focus();
      }
    };

    const handleBackspace = (
      index: number,
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key !== "Backspace") return;
      if (code[index] !== "") return;
      if (index <= 0) return;

      const prevIndex = index - 1;
      const newCode = [...code];
      newCode[prevIndex] = "";
      setCode(newCode);

      const prevInput = document.querySelector(
        `input[data-pin-index="${prevIndex}"]`
      ) as HTMLInputElement;
      prevInput?.focus();
    };

    return (
      <div className="flex flex-col gap-6">
        <div className="text-sm text-primary font-medium">
          Введите код подтверждения
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-secondary mb-2">
          <label className="flex items-center gap-1.5 cursor-pointer">
            Type:
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value as (typeof TYPES)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {TYPES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex gap-2">
          {code.map((digit, index) => (
            <PinInput
              key={index}
              size={size}
              type={type}
              value={digit}
              onChange={(value) => handlePinChange(index, value)}
              onComplete={() => handleComplete(index)}
              onKeyDown={(event) => handleBackspace(index, event)}
              autoFocus={index === 0}
              data-pin-index={index}
            />
          ))}
        </div>

        <div className="text-xs text-secondary">
          Код: {code.join("") || "(пусто)"}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [values, setValues] = useState<Record<Size, string>>({
      xs: "",
      sm: "",
      md: "",
    });

    return (
      <div className="flex flex-col gap-6">
        {SIZES.map((size) => (
          <div key={size} className="flex items-center gap-3">
            <span className="text-sm text-secondary w-8">{size}:</span>
            <PinInput
              size={size}
              value={values[size]}
              onChange={(value) =>
                setValues((prev) => ({ ...prev, [size]: value }))
              }
            />
          </div>
        ))}
      </div>
    );
  },
};

export const States: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary w-24">Default:</span>
          <PinInput value={value} onChange={setValue} />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary w-24">Masked:</span>
          <PinInput
            value={value}
            onChange={setValue}
            type={PinInputType.Masked}
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary w-24">Error:</span>
          <PinInput value={value} onChange={setValue} error />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary w-24">Disabled:</span>
          <PinInput value="5" disabled />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary w-24">Disabled Empty:</span>
          <PinInput value="" disabled />
        </div>
      </div>
    );
  },
};
