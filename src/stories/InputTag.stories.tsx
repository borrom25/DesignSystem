import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputTag } from "@/components";
import { Size } from "@/types";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;

const meta = {
  title: "Components/InputTag",
  component: InputTag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле ввода с тегами. Добавление тега по Enter, удаление по Backspace (при пустом поле) или крестику на теге.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [required, setRequired] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [tags, setTags] = useState<string[]>(["React", "TypeScript"]);

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
        </div>

        <InputTag
          size={size}
          label="Теги"
          hint="Введите тег и нажмите Enter"
          required={required}
          disabled={disabled}
          value={tags}
          onChange={setTags}
          placeholder="Добавить тег..."
        />

        <div className="text-xs text-secondary">
          Текущие теги: {tags.length > 0 ? tags.join(", ") : "нет"}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [tagsXs, setTagsXs] = useState<string[]>(["XS"]);
    const [tagsSm, setTagsSm] = useState<string[]>(["SM"]);
    const [tagsMd, setTagsMd] = useState<string[]>(["MD"]);

    return (
      <div className="flex flex-col gap-4" style={{ width: 360 }}>
        <InputTag
          size={Size.Xs}
          label="Extra Small"
          value={tagsXs}
          onChange={setTagsXs}
          placeholder="Добавить..."
        />
        <InputTag
          size={Size.Sm}
          label="Small"
          value={tagsSm}
          onChange={setTagsSm}
          placeholder="Добавить..."
        />
        <InputTag
          size={Size.Md}
          label="Medium"
          value={tagsMd}
          onChange={setTagsMd}
          placeholder="Добавить..."
        />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(["Controlled", "Mode"]);

    return (
      <div className="flex flex-col gap-4" style={{ width: 360 }}>
        <InputTag
          label="Controlled Input"
          hint="Теги управляются внешним состоянием"
          value={tags}
          onChange={setTags}
          placeholder="Добавить тег..."
        />

        <div className="flex gap-2">
          <button
            onClick={() => setTags([...tags, `Tag ${tags.length + 1}`])}
            className="px-3 py-1 text-xs bg-white/10 rounded hover:bg-white/20"
          >
            Добавить тег
          </button>
          <button
            onClick={() => setTags([])}
            className="px-3 py-1 text-xs bg-white/10 rounded hover:bg-white/20"
          >
            Очистить
          </button>
        </div>

        <div className="text-xs text-secondary">
          Количество тегов: {tags.length}
        </div>
      </div>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => {
    return (
      <div style={{ width: 360 }}>
        <InputTag
          label="Uncontrolled Input"
          hint="Теги хранятся внутри компонента"
          defaultValue={["Default", "Tags"]}
          onChange={(newTags) => console.log("Tags changed:", newTags)}
          placeholder="Добавить тег..."
        />
      </div>
    );
  },
};

export const WithCustomTagCreation: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);

    return (
      <div style={{ width: 360 }}>
        <InputTag
          label="Email теги"
          hint="Введите email и нажмите Enter"
          value={tags}
          onChange={setTags}
          onCreateTag={(value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? value.toLowerCase() : null;
          }}
          placeholder="user@example.com"
        />
        <div className="mt-2 text-xs text-secondary">
          Добавляются только валидные email-адреса
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{ width: 360 }}>
        <InputTag
          label="Недоступное поле"
          hint="Это поле отключено"
          value={["Locked", "Tags"]}
          disabled
        />
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);

    return (
      <div style={{ width: 360 }}>
        <InputTag
          value={tags}
          onChange={setTags}
          placeholder="Введите теги..."
        />
      </div>
    );
  },
};

export const WithClearCallback: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(["One", "Two", "Three"]);
    const [clearCount, setClearCount] = useState(0);

    return (
      <div className="flex flex-col gap-4" style={{ width: 360 }}>
        <InputTag
          label="С колбэком очистки"
          hint="Нажмите крестик для очистки всех тегов"
          value={tags}
          onChange={setTags}
          onClear={() => setClearCount((c) => c + 1)}
          placeholder="Добавить тег..."
        />

        <div className="text-xs text-secondary">
          Количество очисток: {clearCount}
        </div>
      </div>
    );
  },
};
