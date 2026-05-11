import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@/components/Text";
import { Size } from "@/types";
import type { TextWeight } from "@/components/Text";

const sizes = Object.values(Size);
const weights: TextWeight[] = ["regular", "medium", "semibold"];
const tags = ["span", "p", "strong", "h3"] as const;
const textColors = [
  { name: "primary", className: "text-primary" },
  { name: "secondary", className: "text-secondary" },
  { name: "brand", className: "text-brand-text-heavy" },
  { name: "action", className: "text-action-text-heavy" },
  { name: "danger", className: "text-danger-text-heavy" },
  { name: "positive", className: "text-positive-text-heavy" },
  { name: "warning", className: "text-warning-text-heavy" },
  { name: "info", className: "text-info-text-heavy" },
  { name: "inverse", className: "text-inverse-text-heavy" },
  { name: "hint", className: "text-hint" },
] as const;

const meta = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Типографический компонент для отображения текста с настраиваемыми размером, весом и HTML-тегом.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: sizes,
    },
    weight: {
      control: "select",
      options: weights,
    },
    as: {
      control: "select",
      options: tags,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div className="w-[780px] rounded-sm bg-generic-disabled px-10 py-8">
      <div className="grid grid-cols-3 gap-16">
        <div className="flex flex-col gap-2">
          <Text size={Size.Sm} className="text-secondary">
            Caption
          </Text>
          <div className="flex items-baseline gap-1">
            <Text as="h3" size={Size.Md} weight="semibold">
              Title
            </Text>
            <Text size={Size.Md} className="text-hint">
              TitleSuffix
            </Text>
          </div>
          <Text size={Size.Md}>Subtitle</Text>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Text size={Size.Sm} className="text-secondary">
            Caption
          </Text>
          <Text as="h3" size={Size.Md} weight="semibold">
            Title
          </Text>
          <Text size={Size.Md}>Subtitle</Text>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <Text size={Size.Sm} className="text-secondary">
            Caption
          </Text>
          <div className="flex items-baseline gap-1">
            <Text size={Size.Md} className="text-hint">
              TitleSuffix
            </Text>
            <Text as="h3" size={Size.Md} weight="semibold">
              Title
            </Text>
          </div>
          <Text size={Size.Md}>Subtitle</Text>
        </div>
      </div>
    </div>
  ),
};

export const SizesWeightsColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <Text key={size} size={size}>
            Size {size}: The quick brown fox jumps over the lazy dog
          </Text>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {weights.map((weight) => (
          <Text key={weight} weight={weight} size={Size.Md}>
            Weight {weight}: The quick brown fox jumps over the lazy dog
          </Text>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {textColors.map((color) => (
          <Text
            key={color.name}
            className={color.className}
            size={Size.Md}
            weight="medium"
          >
            Color {color.name}: The quick brown fox jumps over the lazy dog
          </Text>
        ))}
      </div>
    </div>
  ),
};

export const AsElements: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {tags.map((tag) => (
        <Text key={tag} as={tag} size={Size.Md} weight="medium">
          Rendered as &lt;{tag}&gt;
        </Text>
      ))}
    </div>
  ),
};
