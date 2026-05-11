import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputNumber } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Числовое поле с кнопками инкремента/декремента, поддержкой min/max/step и label/hint.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState<number | undefined>(5);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [step, setStep] = useState(1);

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
            Error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={required}
              onChange={(event) => setRequired(event.target.checked)}
            />
            Required
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={hasHintError}
              onChange={(event) => setHasHintError(event.target.checked)}
            />
            Hint Error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            Disabled
          </label>
        </div>

        <div className="flex gap-3 text-xs text-secondary">
          <label className="flex items-center gap-1.5">
            Min:
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="bg-transparent border border-white/10 rounded px-2 py-1 w-16"
            />
          </label>

          <label className="flex items-center gap-1.5">
            Max:
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="bg-transparent border border-white/10 rounded px-2 py-1 w-16"
            />
          </label>

          <label className="flex items-center gap-1.5">
            Step:
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="bg-transparent border border-white/10 rounded px-2 py-1 w-16"
            />
          </label>
        </div>

        <InputNumber
          size={size}
          label="Количество"
          hint={hasHintError ? undefined : "Введите число от 0 до 100"}
          hintError={hasHintError ? "Обязательное поле" : undefined}
          required={required}
          error={error}
          disabled={disabled}
          value={value}
          onChange={setValue}
          min={min}
          max={max}
          step={step}
          placeholder="Введите число"
        />

        <div className="text-xs text-secondary">
          Current value: {value ?? "undefined"}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [valueXs, setValueXs] = useState<number | undefined>(10);
    const [valueSm, setValueSm] = useState<number | undefined>(20);
    const [valueMd, setValueMd] = useState<number | undefined>(30);

    return (
      <div className="flex flex-col gap-4" style={{ width: 360 }}>
        <InputNumber
          size={Size.Xs}
          label="Extra Small"
          value={valueXs}
          onChange={setValueXs}
          min={0}
          max={100}
        />
        <InputNumber
          size={Size.Sm}
          label="Small"
          value={valueSm}
          onChange={setValueSm}
          min={0}
          max={100}
        />
        <InputNumber
          size={Size.Md}
          label="Medium"
          value={valueMd}
          onChange={setValueMd}
          min={0}
          max={100}
        />
      </div>
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(50);

    return (
      <div style={{ width: 360 }}>
        <InputNumber
          label="Возраст"
          hint="От 18 до 120 лет"
          value={value}
          onChange={setValue}
          min={18}
          max={120}
          step={1}
        />
      </div>
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);

    return (
      <div style={{ width: 360 }}>
        <InputNumber
          label="Цена"
          hint="Шаг изменения: 0.5"
          value={value}
          onChange={setValue}
          min={0}
          max={1000}
          step={0.5}
        />
      </div>
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(undefined);

    return (
      <div style={{ width: 360 }}>
        <InputNumber
          label="Количество товара"
          hintError="Поле обязательно для заполнения"
          required
          value={value}
          onChange={setValue}
          min={1}
          max={999}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{ width: 360 }}>
        <InputNumber
          label="Недоступное поле"
          hint="Это поле отключено"
          value={42}
          disabled
        />
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(10);

    return (
      <div style={{ width: 360 }}>
        <InputNumber
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          placeholder="Введите число"
        />
      </div>
    );
  },
};
