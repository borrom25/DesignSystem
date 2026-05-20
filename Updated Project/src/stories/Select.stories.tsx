import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Apple, Banana, Grape, Cherry, Citrus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const FRUIT_ICON_BY_KEY = {
  apple: Apple,
  banana: Banana,
  orange: Citrus,
  grape: Grape,
  mango: Cherry,
  strawberry: Apple,
  pineapple: Cherry,
} as const;
const FRUIT_OPTIONS = [
  { value: "apple", label: "Apple", disabled: false },
  { value: "banana", label: "Banana", disabled: false },
  { value: "orange", label: "Orange", disabled: false },
  { value: "grape", label: "Grape", disabled: false },
  { value: "mango", label: "Mango", disabled: false },
  { value: "strawberry", label: "Strawberry", disabled: false },
  { value: "pineapple", label: "Pineapple", disabled: true },
] as const;

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Одиночный выбор на базе Popover. " +
          "Управляемое/неуправляемое состояние, lazy-load, поддержка форм.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const FRUITS: Record<string, string> = {
  apple: "Apple",
  banana: "Banana",
  orange: "Orange",
  grape: "Grape",
  mango: "Mango",
  strawberry: "Strawberry",
  pineapple: "Pineapple",
};
const CLEAR_BUTTON_FRUIT_VALUES = [
  "apple",
  "banana",
  "orange",
  "grape",
] as const;

// ─── Playground ────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");
    const toggleControls = [
      { key: "error", label: "error", checked: error, onChange: setError },
      {
        key: "required",
        label: "required",
        checked: required,
        onChange: setRequired,
      },
      {
        key: "hint-error",
        label: "hint error",
        checked: hasHintError,
        onChange: setHasHintError,
      },
      {
        key: "disabled",
        label: "disabled",
        checked: disabled,
        onChange: setDisabled,
      },
    ] as const;

    return (
      <div className="flex flex-col gap-6" style={{ width: 320 }}>
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
          {toggleControls.map((control) => (
            <label
              key={control.key}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={control.checked}
                onChange={(e) => control.onChange(e.target.checked)}
              />
              {control.label}
            </label>
          ))}
        </div>

        <Select
          value={value}
          onValueChange={(value) => setValue(value ?? "")}
          disabled={disabled}
          error={error}
          size={size}
          label="Fruit"
          required={required}
          hint="Choose one option"
          hintError={hasHintError ? "Please select a fruit" : undefined}
        >
          <SelectTrigger size={size} error={error}>
            <SelectValue placeholder="Select a fruit...">
              {FRUITS[value]}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {FRUIT_OPTIONS.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                icon={FRUIT_ICON_BY_KEY[option.value]}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {value && (
          <p className="text-xs text-secondary">
            Selected: <strong>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

// ─── Lazy load (scroll with data loading) ──────────────────────────────────

export const LazyLoad: Story = {
  name: "Scroll + Lazy Load",
  render: () => {
    const TOTAL = 100;
    const BATCH = 15;
    const [count, setCount] = useState(BATCH);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");

    const handleEndReached = () => {
      if (loading || count >= TOTAL) return;
      setLoading(true);
      setTimeout(() => {
        setCount((prev) => Math.min(prev + BATCH, TOTAL));
        setLoading(false);
      }, 500);
    };

    return (
      <div className="flex flex-col gap-3" style={{ width: 320 }}>
        <p className="text-xs text-secondary">
          Loaded {count} of {TOTAL} items
        </p>

        <Select
          value={value}
          onValueChange={(value) => !!value && setValue(value)}
        >
          <SelectTrigger size={Size.Md}>
            <SelectValue placeholder="Select an item...">
              {value && `Item ${parseInt(value.split("-")[1]) + 1}`}
            </SelectValue>
          </SelectTrigger>
          <SelectContent
            matchTriggerWidth
            maxHeight={280}
            onScrollEnd={handleEndReached}
            scrollEndOffset={60}
          >
            {Array.from({ length: count }, (_, i) => (
              <SelectItem key={i} value={`item-${i}`}>
                Item {i + 1}
              </SelectItem>
            ))}
            {loading && (
              <SelectItem value="__loading__" disabled>
                Loading...
              </SelectItem>
            )}
            {count >= TOTAL && !loading && (
              <SelectItem value="__end__" disabled>
                All items loaded
              </SelectItem>
            )}
          </SelectContent>
        </Select>

        {value && (
          <p className="text-xs text-secondary">
            Selected: <strong>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const WithClearButton: Story = {
  name: "With Clear Button",
  render: () => {
    const [value, setValue] = useState("banana");

    return (
      <div className="flex flex-col gap-3" style={{ width: 320 }}>
        <Select
          value={value}
          onValueChange={(value) => setValue(value ?? "")}
          options={CLEAR_BUTTON_FRUIT_VALUES.map((fruitValue) => ({
            value: fruitValue,
            label: FRUITS[fruitValue],
            icon: FRUIT_ICON_BY_KEY[fruitValue],
          }))}
          label="Fruit"
          placeholder="Select a fruit..."
        />

        <p className="text-xs text-secondary">
          Когда значение выбрано, справа по hover появляется крестик для
          очистки.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример Select с очисткой по умолчанию: при выбранном значении по hover отображается кнопка-крестик для сброса.",
      },
    },
  },
};
