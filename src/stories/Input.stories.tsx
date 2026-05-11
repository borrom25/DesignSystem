import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Check } from "lucide-react";
import { Input, ButtonDrop, InputVariant } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const VARIANTS = [InputVariant.Default, InputVariant.Clear] as const;

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Текстовое поле с поддержкой label/hint, prefix/suffix, iconLeft/iconRight и счетчика символов.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PositioningExample: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [variant, setVariant] = useState<(typeof VARIANTS)[number]>(
      InputVariant.Default
    );
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [leftDrop, setLeftDrop] = useState("drop");
    const [rightDrop, setRightDrop] = useState("drop");
    const dropItems = [{ label: "Drop", value: "drop" }];
    const maxCount = 40;

    return (
      <div className="flex flex-col gap-6" style={{ width: 520 }}>
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
              {VARIANTS.map((item) => (
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

        <Input
          size={size}
          variant={variant}
          error={error}
          disabled={disabled}
          label="Label"
          required={required}
          hint="Hint"
          hintError={hasHintError ? "Поле обязательно" : undefined}
          iconLeft={Check}
          prefix={
            <ButtonDrop
              size={size}
              value={leftDrop}
              onChange={setLeftDrop}
              items={dropItems}
              disabled={disabled}
            />
          }
          suffix={
            <ButtonDrop
              size={size}
              value={rightDrop}
              onChange={setRightDrop}
              items={dropItems}
              disabled={disabled}
            />
          }
          iconRight={Check}
          maxCount={maxCount}
        />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: 520 }}>
      <Input
        label="Empty"
        size={Size.Xs}
        placeholder="Введите текст"
        maxCount={56}
      />
    </div>
  ),
};
