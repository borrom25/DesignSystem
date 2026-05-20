import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Star, Leaf, Flame, Zap, Droplets, Sun } from "lucide-react";
import { MultiTag } from "@/components";
import { Size } from "@/types";
import type { MultiTagOption } from "@/components";

const sizes = [Size.Xs, Size.Sm, Size.Md] as const;
const storyWidth = 360;
const mutedTextClasses = "text-xs text-secondary";
const summaryClasses = `${mutedTextClasses} flex flex-col gap-1`;

const formatList = (arr: string[], sep = ", ") =>
  arr.reduce((acc, x) => (acc ? `${acc}${sep}${x}` : x), "");

const iconOptions: MultiTagOption[] = [
  { value: "star", label: "Favourite", icon: Star },
  { value: "leaf", label: "Organic", icon: Leaf },
  { value: "flame", label: "Spicy", icon: Flame },
  { value: "zap", label: "Fast", icon: Zap },
  { value: "droplets", label: "Fresh", icon: Droplets },
  { value: "sun", label: "Sunny", icon: Sun },
];

const manyOptions: MultiTagOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `item-${i}`,
  label: `Item ${i + 1}`,
}));

const meta = {
  title: "Components/MultiTag",
  component: MultiTag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Множественный выбор с отображением выбранных элементов в виде тегов. " +
          "Поддерживает удаление по одному, очистку всех, ограничение видимых строк и скролл.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MultiTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof sizes)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [maxVisibleRows, setMaxVisibleRows] = useState(2);
    const [value, setValue] = useState<string[]>(["star", "leaf"]);

    return (
      <div className="flex flex-col gap-6" style={{ width: storyWidth }}>
        <div className={`flex flex-wrap gap-3 ${mutedTextClasses}`}>
          <label className="flex items-center gap-1.5 cursor-pointer">
            Size:
            <select
              value={size}
              onChange={(e) =>
                setSize(e.target.value as (typeof sizes)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            Rows:
            <select
              value={maxVisibleRows}
              onChange={(e) => setMaxVisibleRows(Number(e.target.value))}
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {[1, 2, 3, 4].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={error}
              onChange={(e) => setError(e.target.checked)}
            />
            error
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
            required
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={hasHintError}
              onChange={(e) => setHasHintError(e.target.checked)}
            />
            hint error
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            disabled
          </label>
        </div>

        <MultiTag
          options={iconOptions}
          value={value}
          onChange={setValue}
          placeholder="Выберите теги..."
          size={size}
          error={error}
          label="Категории"
          required={required}
          hint="Выберите одну или несколько категорий"
          hintError={
            hasHintError
              ? "Необходимо выбрать хотя бы одну категорию"
              : undefined
          }
          disabled={disabled}
          selectAll
          clearable
          maxVisibleRows={maxVisibleRows}
        />

        <div className={summaryClasses}>
          <span>
            Выбрано ({value.length}):{" "}
            <strong>{formatList(value) || "—"}</strong>
          </span>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  name: "All Sizes",
  render: () => {
    const [valuesXs, setValuesXs] = useState<string[]>([
      "star",
      "leaf",
      "flame",
    ]);
    const [valuesSm, setValuesSm] = useState<string[]>([
      "star",
      "leaf",
      "flame",
    ]);
    const [valuesMd, setValuesMd] = useState<string[]>([
      "star",
      "leaf",
      "flame",
    ]);

    return (
      <div className="flex flex-col gap-6" style={{ width: storyWidth }}>
        <div>
          <p className={mutedTextClasses}>Size: xs</p>
          <MultiTag
            options={iconOptions}
            value={valuesXs}
            onChange={setValuesXs}
            size={Size.Xs}
            placeholder="XS size..."
            clearable
          />
        </div>
        <div>
          <p className={mutedTextClasses}>Size: sm</p>
          <MultiTag
            options={iconOptions}
            value={valuesSm}
            onChange={setValuesSm}
            size={Size.Sm}
            placeholder="SM size..."
            clearable
          />
        </div>
        <div>
          <p className={mutedTextClasses}>Size: md</p>
          <MultiTag
            options={iconOptions}
            value={valuesMd}
            onChange={setValuesMd}
            size={Size.Md}
            placeholder="MD size..."
            clearable
          />
        </div>
      </div>
    );
  },
};

export const MaxVisibleRows: Story = {
  name: "Max Visible Rows (Scroll)",
  render: () => {
    const [value, setValue] = useState<string[]>(
      manyOptions.slice(0, 10).map((o) => o.value)
    );

    return (
      <div className="flex flex-col gap-6" style={{ width: storyWidth }}>
        <div>
          <p className={mutedTextClasses}>maxVisibleRows=1</p>
          <MultiTag
            options={manyOptions}
            value={value}
            onChange={setValue}
            maxVisibleRows={1}
            clearable
            selectAll
          />
        </div>
        <div>
          <p className={mutedTextClasses}>maxVisibleRows=2 (default)</p>
          <MultiTag
            options={manyOptions}
            value={value}
            onChange={setValue}
            maxVisibleRows={2}
            clearable
            selectAll
          />
        </div>
        <div>
          <p className={mutedTextClasses}>maxVisibleRows=3</p>
          <MultiTag
            options={manyOptions}
            value={value}
            onChange={setValue}
            maxVisibleRows={3}
            clearable
            selectAll
          />
        </div>
      </div>
    );
  },
};

export const WithLabelAndHint: Story = {
  name: "Label, Hint, Error",
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="flex flex-col gap-6" style={{ width: storyWidth }}>
        <MultiTag
          options={iconOptions}
          value={value}
          onChange={setValue}
          label="Теги"
          required
          hint="Выберите теги для фильтрации"
          clearable
          selectAll
        />

        <MultiTag
          options={iconOptions}
          value={value}
          onChange={setValue}
          label="Теги с ошибкой"
          required
          error
          hintError="Поле обязательно для заполнения"
          clearable
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-6" style={{ width: storyWidth }}>
        <MultiTag
          options={iconOptions}
          value={["star", "leaf"]}
          disabled
          label="Disabled с выбранными"
          clearable
        />
        <MultiTag
          options={iconOptions}
          value={[]}
          disabled
          label="Disabled пустой"
          placeholder="Недоступно..."
        />
      </div>
    );
  },
};

export const SelectAllFeature: Story = {
  name: "Select All",
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="flex flex-col gap-4" style={{ width: storyWidth }}>
        <MultiTag
          options={iconOptions}
          value={value}
          onChange={setValue}
          label="С функцией 'Выбрать все'"
          selectAll
          selectAllLabel="Выбрать все категории"
          clearable
        />

        <div className={summaryClasses}>
          <span>
            Выбрано: <strong>{formatList(value) || "—"}</strong>
          </span>
        </div>
      </div>
    );
  },
};
