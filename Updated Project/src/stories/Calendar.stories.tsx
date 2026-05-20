import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Calendar, type DateRange } from "@/components/Calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент календаря с поддержкой выбора одной или нескольких дат, переключением между режимами дни/месяцы/годы.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
      description: "Режим выбора дат",
      table: {
        type: { summary: '"single" | "multiple" | "range"' },
        defaultValue: { summary: "single" },
      },
    },
    pickerType: {
      control: "select",
      options: ["full", "month", "year"],
      description: "Тип выбора: полный календарь, только месяц или только год",
      table: {
        type: { summary: '"full" | "month" | "year"' },
        defaultValue: { summary: "full" },
      },
    },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 4 },
      description: "Количество отображаемых месяцев",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    showSelectedDate: {
      control: "boolean",
      description: "Показывать выбранную дату в заголовке",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить весь календарь",
      table: {
        type: { summary: "boolean | Date[] | ((date: Date) => boolean)" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [mode, setMode] = useState<"single" | "multiple">("single");
    const [showSelectedDate, setShowSelectedDate] = useState(true);
    const [singleValue, setSingleValue] = useState<Date | undefined>(
      new Date()
    );
    const [multipleValue, setMultipleValue] = useState<Date[]>([]);

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-4 text-xs text-secondary">
          <label className="flex items-center gap-2 cursor-pointer">
            Режим:
            <select
              value={mode}
              onChange={(e) => {
                setMode(e.target.value as "single" | "multiple");
                setSingleValue(undefined);
                setMultipleValue([]);
              }}
              className="bg-transparent border border-white/10 rounded px-2 py-1"
            >
              <option value="single">Одна дата</option>
              <option value="multiple">Несколько дат</option>
            </select>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showSelectedDate}
              onChange={(e) => setShowSelectedDate(e.target.checked)}
            />
            Показывать выбранную дату
          </label>
        </div>

        {mode === "single" ? (
          <Calendar
            mode="single"
            value={singleValue}
            onChange={setSingleValue}
            showSelectedDate={showSelectedDate}
          />
        ) : (
          <Calendar
            mode="multiple"
            value={multipleValue}
            onChange={setMultipleValue}
            showSelectedDate={showSelectedDate}
          />
        )}

        <div className="text-xs text-secondary">
          Выбрано:{" "}
          {mode === "single"
            ? (singleValue?.toLocaleDateString("ru-RU") ?? "не выбрано")
            : multipleValue.length > 0
              ? multipleValue
                  .map((d) => d.toLocaleDateString("ru-RU"))
                  .join(", ")
              : "не выбрано"}
        </div>
      </div>
    );
  },
};

export const SingleDate: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col gap-4">
        <Calendar mode="single" value={value} onChange={setValue} />
        <p className="text-xs text-secondary">
          Выбрано: {value?.toLocaleDateString("ru-RU") ?? "не выбрано"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Базовый календарь для выбора одной даты. Клик на заголовок месяца открывает выбор месяца, затем года.",
      },
    },
  },
};

export const MultipleDates: Story = {
  render: () => {
    const [value, setValue] = useState<Date[]>([]);

    return (
      <div className="flex flex-col gap-4">
        <Calendar mode="multiple" value={value} onChange={setValue} />
        <p className="text-xs text-secondary">
          Выбрано ({value.length}):{" "}
          {value.length > 0
            ? value.map((d) => d.toLocaleDateString("ru-RU")).join(", ")
            : "не выбрано"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Календарь с возможностью выбора нескольких дат.",
      },
    },
  },
};

export const WithoutSelectedDateHeader: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    return (
      <Calendar
        mode="single"
        value={value}
        onChange={setValue}
        showSelectedDate={false}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Календарь без отображения выбранной даты в заголовке.",
      },
    },
  },
};

export const WithMinMaxDates: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          value={value}
          onChange={setValue}
          minDate={minDate}
          maxDate={maxDate}
        />
        <p className="text-xs text-secondary">
          Доступен выбор только с {minDate.toLocaleDateString("ru-RU")} по{" "}
          {maxDate.toLocaleDateString("ru-RU")}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Календарь с ограничением минимальной и максимальной даты.",
      },
    },
  },
};

export const DisabledWeekends: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6;
    };

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          value={value}
          onChange={setValue}
          disabled={isWeekend}
        />
        <p className="text-xs text-secondary">
          Выходные дни недоступны для выбора
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Календарь с отключенными выходными днями.",
      },
    },
  },
};

export const EmptyWithTodayFallback: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-4">
        <Calendar mode="single" value={value} onChange={setValue} />
        <p className="text-xs text-secondary">
          Пока дата не выбрана, показывается сегодняшняя дата в заголовке
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Если дата не выбрана, в заголовке показывается сегодняшняя дата.",
      },
    },
  },
};

export const RangePicker: Story = {
  render: () => {
    const [value, setValue] = useState<DateRange>({});

    return (
      <div className="flex flex-col gap-4">
        <Calendar mode="range" value={value} onChange={setValue} />
        <p className="text-xs text-secondary">
          Выбрано:{" "}
          {value.from && value.to
            ? `${value.from.toLocaleDateString("ru-RU")} - ${value.to.toLocaleDateString("ru-RU")}`
            : value.from
              ? `${value.from.toLocaleDateString("ru-RU")} (выберите конец диапазона)`
              : "не выбрано"}
        </p>
        <p className="text-xs text-hint">
          Клик на первую дату - начало диапазона, клик на вторую - конец. Даты
          между ними подсвечиваются серым фоном.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Режим выбора диапазона. Первая и последняя даты выделены синим, даты между ними — серым фоном.",
      },
    },
  },
};

export const MonthPicker: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          value={value}
          onChange={setValue}
          pickerType="month"
          showSelectedDate={false}
        />
        <p className="text-xs text-secondary">
          Выбран месяц:{" "}
          {value
            ? value.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
              })
            : "не выбрано"}
        </p>
        <p className="text-xs text-hint">
          Режим выбора только месяца без выбора конкретной даты. Отображается 3
          ряда по 4 месяца текущего года и 4-й ряд с месяцами следующего года
          серым цветом.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Режим выбора только месяца. Используйте prop pickerType='month' для отображения календаря с выбором месяца.",
      },
    },
  },
};

export const YearPicker: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          value={value}
          onChange={setValue}
          pickerType="year"
          showSelectedDate={false}
        />
        <p className="text-xs text-secondary">
          Выбран год: {value ? value.getFullYear() : "не выбрано"}
        </p>
        <p className="text-xs text-hint">
          Режим выбора только года без выбора месяца или даты.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Режим выбора только года. Используйте prop pickerType='year' для отображения календаря с выбором года.",
      },
    },
  },
};
