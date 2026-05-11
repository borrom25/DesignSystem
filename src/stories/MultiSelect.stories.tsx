import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Star, Leaf, Flame, Zap, Droplets, Sun } from "lucide-react";
import { MultiSelect } from "@/components";
import { Size } from "@/types";
import type { MultiSelectOption } from "@/components";

const sizes = [Size.Xs, Size.Sm, Size.Md] as const;
const storyWidth = 320;
const mutedTextClasses = "text-xs text-secondary";
const summaryClasses = `${mutedTextClasses} flex flex-col gap-1`;

const formatList = (arr: string[], sep = ", ") =>
  arr.reduce((acc, x) => (acc ? `${acc}${sep}${x}` : x), "");

const renderSelectedSummary = (value: string[], max = 5) => (
  <p className={mutedTextClasses}>
    Selected ({value.length}):{" "}
    <strong>
      {formatList(value.slice(0, max))}
      {value.length > max ? "..." : ""}
    </strong>
  </p>
);

const iconOptions: MultiSelectOption[] = [
  { value: "star", label: "Favourite", icon: Star },
  { value: "leaf", label: "Organic", icon: Leaf },
  { value: "flame", label: "Spicy", icon: Flame },
  { value: "zap", label: "Fast", icon: Zap },
  { value: "droplets", label: "Fresh", icon: Droplets },
  { value: "sun", label: "Sunny", icon: Sun },
];

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Множественный выбор на базе Popover + ListItem (checkbox). " +
          "Поддерживает короткий API через `option/options`, lazy loading и кастомный рендер.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Playground ────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof sizes)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
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

        <MultiSelect
          options={iconOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select items..."
          size={size}
          error={error}
          label="Fruits"
          required={required}
          hint="Choose one or more options"
          hintError={
            hasHintError ? "Please select at least one option" : undefined
          }
          disabled={disabled}
          selectAll
          clearable
        />

        <div className={summaryClasses}>
          <span>
            Selected ({value.length}):{" "}
            <strong>{formatList(value) || "—"}</strong>
          </span>
        </div>
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
    const [value, setValue] = useState<string[]>([]);

    const icons = [Star, Leaf, Flame, Zap, Droplets, Sun] as const;

    const allOptions: MultiSelectOption[] = Array.from(
      { length: count },
      (_, i) => ({
        value: `item-${i}`,
        label: `Item ${i + 1}`,
        icon: icons[i % icons.length],
      })
    );

    const handleEndReached = () => {
      if (loading || count >= TOTAL) return;
      setLoading(true);
      setTimeout(() => {
        setCount((prev) => Math.min(prev + BATCH, TOTAL));
        setLoading(false);
      }, 500);
    };

    return (
      <div className="flex flex-col gap-3" style={{ width: storyWidth }}>
        <p className={mutedTextClasses}>
          Loaded {count} of {TOTAL} items
        </p>

        <MultiSelect
          options={allOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select items..."
          size={Size.Md}
          maxHeight={280}
          matchTriggerWidth
          onScrollEnd={handleEndReached}
          scrollEndOffset={60}
          isLoading={loading}
          hasMore={count < TOTAL}
          selectAll
          clearable
        />

        {loading && <p className={mutedTextClasses}>Loading more...</p>}
        {count >= TOTAL && (
          <p className={mutedTextClasses}>All items loaded.</p>
        )}

        {value.length > 0 && renderSelectedSummary(value)}
      </div>
    );
  },
};

// ─── Label inside with tags ─────────────────────────────────────────────────

export const LabelWithTags: Story = {
  name: "Label inside + Tags",
  render: () => {
    const [size, setSize] = useState<(typeof sizes)[number]>(Size.Md);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [empty, setEmpty] = useState<string[]>([]);
    const [single, setSingle] = useState<string[]>(["star"]);
    const [multi, setMulti] = useState<string[]>([
      "star",
      "leaf",
      "flame",
      "zap",
      "droplets",
    ]);

    return (
      <div className="flex flex-col gap-6" style={{ width: 420 }}>
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
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            disabled
          </label>
        </div>

        <p className={mutedTextClasses}>Empty (placeholder under label):</p>
        <MultiSelect
          options={iconOptions}
          value={empty}
          onValueChange={setEmpty}
          placeholder="Select items..."
          size={size}
          error={error}
          disabled={disabled}
          label="Characteristics"
          required
          clearable
        />

        <p className={mutedTextClasses}>Single tag:</p>
        <MultiSelect
          options={iconOptions}
          value={single}
          onValueChange={setSingle}
          placeholder="Select items..."
          size={size}
          error={error}
          disabled={disabled}
          label="Characteristics"
          clearable
        />

        <p className={mutedTextClasses}>Many tags (wrap):</p>
        <MultiSelect
          options={iconOptions}
          value={multi}
          onValueChange={setMulti}
          placeholder="Select items..."
          size={size}
          error={error}
          disabled={disabled}
          label="Characteristics"
          selectAll
          clearable
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Label расположен внутри триггера. Выбранные элементы рендерятся тегами под label без наложения.",
      },
    },
  },
};

// ─── Return "all" token ─────────────────────────────────────────────────────

export const ReturnAll: Story = {
  name: "Return All Token",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [lastOnChange, setLastOnChange] = useState<string[] | "all" | null>(
      null
    );

    const handleChange = (v: string[] | "all") => {
      console.log("[MultiSelect returnAll] onChange:", v);
      setLastOnChange(v);
      if (v === "all") {
        setValue(iconOptions.map((o) => o.value));
      } else {
        setValue(v);
      }
    };

    return (
      <div className="flex flex-col gap-4" style={{ width: storyWidth }}>
        <MultiSelect
          options={iconOptions}
          value={value}
          onValueChange={handleChange}
          placeholder="Select items..."
          label="With returnAll prop"
          selectAll
          returnAll
          clearable
        />

        <div className={summaryClasses}>
          <span>
            onChange received:{" "}
            <strong className="text-white">
              {lastOnChange === null
                ? "—"
                : lastOnChange === "all"
                  ? '"all"'
                  : `[${formatList(lastOnChange as string[])}]`}
            </strong>
          </span>
          <span>
            Internal value: <strong>{formatList(value) || "—"}</strong>
          </span>
          <span className="text-inverse-text-light">
            Note: {`"all"`} is returned for API optimization when selecting all
            items.
          </span>
        </div>
      </div>
    );
  },
};
