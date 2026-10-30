import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Color, Size, Type } from "@/types";
import { Button, InputVariant } from "@/components";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const VARIANTS = [InputVariant.Default, InputVariant.Clear] as const;

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [Size.Xs, Size.Sm, Size.Md],
    },
    variant: {
      control: "select",
      options: [InputVariant.Default, InputVariant.Clear],
    },
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    defaultValue: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    hintError: {
      control: "text",
    },
    hint: {
      control: "text",
    },
    className: {
      control: "text",
    },
    icon: {
      table: {
        disable: true,
      },
    },
    rightSlot: {
      table: {
        disable: true,
      },
    },
    onChangeInput: {
      action: "input changed",
    },
    onChangeDate: {
      action: "date changed",
    },
    onClear: {
      action: "cleared",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  size: Size.Xs,
  label: "Дата",
  defaultValue: "",
  placeholder: "ДД.ММ.ГГГГ",
  icon: Calendar,
  disabled: false,
  error: false,
  variant: InputVariant.Default,
  hint: "Выберите дату",
};

export const Playground: Story = {
  args: {
    label: baseArgs.label,
    placeholder: baseArgs.placeholder,
    defaultValue: baseArgs.defaultValue,
  },
  render: (args) => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [variant, setVariant] = useState<(typeof VARIANTS)[number]>(
      InputVariant.Default
    );
    const [required, setRequired] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState<string>("");
    const [hint, setHint] = useState("Выберите дату");
    const [hintError, setHintError] = useState("");

    return (
      <div className="flex flex-col gap-6" style={{ width: 420 }}>
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
              checked={required}
              onChange={(event) => setRequired(event.target.checked)}
            />
            Required
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            Disabled
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
            Hint:
            <input
              value={hint}
              onChange={(event) => setHint(event.target.value)}
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            />
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            Hint error:
            <input
              value={hintError}
              onChange={(event) => setHintError(event.target.value)}
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            />
          </label>
        </div>

        <DatePicker
          {...baseArgs}
          size={size}
          variant={variant}
          required={required}
          disabled={disabled}
          error={error}
          hint={hint}
          hintError={hintError}
          value={value}
          label={args.label ?? baseArgs.label}
          placeholder={args.placeholder ?? baseArgs.placeholder}
          defaultValue={args.defaultValue ?? baseArgs.defaultValue}
          className={args.className}
          onChangeInput={(nextValue) => {
            console.log("[DatePicker] onChangeInput", nextValue);
            setValue(nextValue ?? "");
          }}
          onChangeDate={(nextDate) => {
            console.log("[DatePicker] onChangeDate", nextDate);
          }}
          onClear={() => {
            console.log("[DatePicker] onClear");
            setValue("");
          }}
          rightSlot={
            <Button
              disabled={disabled}
              size={Size.Xs}
              color={Color.Secondary}
              type={Type.Flat}
            >
              Button
            </Button>
          }
        />

        <div className="text-xs text-secondary">
          Value: {value || "не выбрано"}
        </div>
      </div>
    );
  },
};

export const WithMinMaxDates: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    return (
      <div className="flex flex-col gap-4" style={{ width: 320 }}>
        <DatePicker
          {...baseArgs}
          value={value}
          onChangeInput={(nextValue) => setValue(nextValue ?? "")}
          onClear={() => setValue("")}
          minDate={minDate}
          maxDate={maxDate}
        />
        <p className="text-xs text-secondary">
          Доступен выбор только с {minDate.toLocaleDateString("ru-RU")} по{" "}
          {maxDate.toLocaleDateString("ru-RU")}. Дата вне диапазона, введённая
          вручную, подтягивается к ближайшей границе.
        </p>
      </div>
    );
  },
};
