import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TimePicker } from "@/components/TimePicker";
import { Size } from "@/types";
import type { TimeValue } from "@/components/TimeBar";
import { Button } from "@/components";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент выбора времени с полем ввода и выпадающим поповером. Иконка часов показывается до выбора времени, после выбора — крестик для очистки.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [Size.Xs, Size.Sm, Size.Md],
      description: "Размер компонента",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "md" },
      },
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
    placeholder: {
      control: "text",
      description: "Плейсхолдер",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ЧЧ:ММ" },
      },
    },
    value: {
      control: "text",
    },
    time: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      control: "text",
    },
    defaultTime: {
      table: {
        disable: true,
      },
    },
    className: {
      control: "text",
      description: "Дополнительный className",
    },
    fieldClassName: {
      control: "text",
      description: "className для поля",
    },
    minTime: {
      control: "text",
      description:
        "Минимальное время: строка «ЧЧ:ММ» / «ЧЧ:ММ:СС» или TimeValue. Более раннее время недоступно",
      table: {
        type: { summary: "TimeValue | string" },
      },
    },
    maxTime: {
      control: "text",
      description:
        "Максимальное время: строка «ЧЧ:ММ» / «ЧЧ:ММ:СС» или TimeValue. Более позднее время недоступно",
      table: {
        type: { summary: "TimeValue | string" },
      },
    },
    showSeconds: {
      control: "boolean",
      description: "Показывать колонку секунд",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    use24Hour: {
      control: "boolean",
      description: "Использовать 24-часовой формат",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showNowButton: {
      control: "boolean",
      description: "Показывать кнопку 'Сейчас'",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showConfirmButton: {
      control: "boolean",
      description: "Показывать кнопку 'Ок'",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    nowButtonText: {
      control: "text",
      description: "Текст кнопки 'Сейчас'",
    },
    confirmButtonText: {
      control: "text",
      description: "Текст кнопки подтверждения",
    },
    onChangeValue: {
      action: "value changed",
      description: "Callback при изменении строкового значения",
    },
    onChangeTime: {
      action: "time changed",
      description: "Callback при изменении времени",
    },
    onClear: {
      action: "cleared",
      description: "Callback при очистке",
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  size: Size.Md,
  label: "Время начала",
  hint: "Выберите время в поповере",
  hintError: "",
  disabled: false,
  error: false,
  required: false,
  placeholder: "ЧЧ:ММ",
  defaultValue: "",
  showSeconds: true,
  use24Hour: true,
  showNowButton: true,
  showConfirmButton: true,
  nowButtonText: "Сейчас",
  confirmButtonText: "Ок",
};

export const Playground: Story = {
  args: {
    label: baseArgs.label,
    placeholder: baseArgs.placeholder,
    defaultValue: baseArgs.defaultValue,
  },
  render: (args) => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [required, setRequired] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [showSeconds, setShowSeconds] = useState(true);
    const [use24Hour, setUse24Hour] = useState(true);
    const [showNowButton, setShowNowButton] = useState(true);
    const [showConfirmButton, setShowConfirmButton] = useState(true);
    const [hint, setHint] = useState("Выберите время в поповере");
    const [hintError, setHintError] = useState("");
    const [value, setValue] = useState<string>("");
    const [time, setTime] = useState<TimeValue | undefined>(undefined);

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
              checked={showSeconds}
              onChange={(event) => setShowSeconds(event.target.checked)}
            />
            Show seconds
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={use24Hour}
              onChange={(event) => setUse24Hour(event.target.checked)}
            />
            24 hour
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showNowButton}
              onChange={(event) => setShowNowButton(event.target.checked)}
            />
            Show now button
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showConfirmButton}
              onChange={(event) => setShowConfirmButton(event.target.checked)}
            />
            Show confirm button
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

        <TimePicker
          {...baseArgs}
          size={size}
          required={required}
          disabled={disabled}
          error={error}
          hint={hint}
          hintError={hintError}
          showSeconds={showSeconds}
          use24Hour={use24Hour}
          showNowButton={showNowButton}
          showConfirmButton={showConfirmButton}
          value={value}
          time={time}
          label={args.label ?? baseArgs.label}
          placeholder={args.placeholder ?? baseArgs.placeholder}
          defaultValue={args.defaultValue ?? baseArgs.defaultValue}
          className={args.className}
          onChangeValue={(nextValue) => {
            console.log("[TimePicker] onChangeValue", nextValue);
            setValue(nextValue ?? "");
          }}
          onChangeTime={(nextValue) => {
            console.log("[TimePicker] onChangeTime", nextValue);
            setTime(nextValue);
          }}
          onClear={() => {
            console.log("[TimePicker] onClear");
            setValue("");
            setTime(undefined);
          }}
          rightSlot={
            <Button size="sm" type="flat" color="inverse" disabled={disabled}>
              Button
            </Button>
          }
        />

        <div className="text-xs text-secondary">
          Time:{" "}
          {time
            ? `${time.hours.toString().padStart(2, "0")}:${time.minutes
                .toString()
                .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`
            : "не выбрано"}
        </div>
        <div className="text-xs text-secondary">
          Input value: {value || "пусто"}
        </div>
      </div>
    );
  },
};

export const WithMinMaxTime: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Ограничение диапазона через `minTime` и `maxTime`. Недоступные часы, минуты и секунды в поповере заблокированы, а время вне диапазона, введённое вручную, подтягивается к ближайшей границе.",
      },
    },
  },
  render: () => {
    const [minTime, setMinTime] = useState("09:30");
    const [maxTime, setMaxTime] = useState("18:15");
    const [showSeconds, setShowSeconds] = useState(false);
    const [value, setValue] = useState<string>("");

    return (
      <div className="flex flex-col gap-6" style={{ width: 420 }}>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <label className="flex items-center gap-1.5 cursor-pointer">
            Min:
            <input
              value={minTime}
              onChange={(event) => setMinTime(event.target.value)}
              className="w-20 bg-transparent border border-white/10 rounded px-1 py-0.5"
            />
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            Max:
            <input
              value={maxTime}
              onChange={(event) => setMaxTime(event.target.value)}
              className="w-20 bg-transparent border border-white/10 rounded px-1 py-0.5"
            />
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showSeconds}
              onChange={(event) => setShowSeconds(event.target.checked)}
            />
            Show seconds
          </label>
        </div>

        <TimePicker
          {...baseArgs}
          hint={`Доступно с ${minTime || "—"} до ${maxTime || "—"}`}
          showSeconds={showSeconds}
          minTime={minTime || undefined}
          maxTime={maxTime || undefined}
          value={value}
          onChangeValue={(nextValue) => setValue(nextValue ?? "")}
          onClear={() => setValue("")}
        />

        <div className="text-xs text-secondary">
          Input value: {value || "пусто"}
        </div>
      </div>
    );
  },
};
