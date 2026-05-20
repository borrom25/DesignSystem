import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DateRange } from "@/components";
import type { DateRangeValue } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/DateRange",
  component: DateRange,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент выбора диапазона дат. Отображает две плашечки (Дата начала | Дата конца) в формате ДД.ММ.ГГГГ и может дополняться панелью выбора времени.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [required, setRequired] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [startError, setStartError] = useState(false);
    const [endError, setEndError] = useState(false);
    const [showTimeBar, setShowTimeBar] = useState(false);
    const [value, setValue] = useState<DateRangeValue>({});

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
            <input
              type="checkbox"
              checked={startError}
              onChange={(event) => setStartError(event.target.checked)}
            />
            Start Error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={endError}
              onChange={(event) => setEndError(event.target.checked)}
            />
            End Error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showTimeBar}
              onChange={(event) => setShowTimeBar(event.target.checked)}
            />
            Time Bar
          </label>
        </div>

        <DateRange
          size={size}
          label="Период"
          hint={
            startError
              ? "Дата начала некорректна"
              : endError
                ? "Дата конца некорректна"
                : "Выберите диапазон дат"
          }
          required={required}
          disabled={disabled}
          error={error}
          startError={startError}
          endError={endError}
          showTimeBar={showTimeBar}
          value={value}
          onChange={setValue}
        />

        <div className="text-xs text-secondary">
          Выбрано:{" "}
          {value.start || value.end
            ? `${value.start?.toLocaleString("ru-RU") ?? "—"} — ${value.end?.toLocaleString("ru-RU") ?? "—"}`
            : "не выбрано"}
        </div>
      </div>
    );
  },
};
