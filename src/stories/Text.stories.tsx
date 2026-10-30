import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components/Text";

const weights = [
  TextWeight.Regular,
  TextWeight.Medium,
  TextWeight.Semibold,
  TextWeight.Bold,
] as const;
const tags = ["span", "p", "strong", "h3"] as const;
const textColors = [
  { name: "primary", color: TextColor.Basic, shade: TextShade.Primary },
  { name: "secondary", color: TextColor.Basic, shade: TextShade.Secondary },
  { name: "brand", color: TextColor.Brand, shade: TextShade.Heavy },
  { name: "action", color: TextColor.Action, shade: TextShade.Heavy },
  { name: "danger", color: TextColor.Danger, shade: TextShade.Heavy },
  { name: "positive", color: TextColor.Positive, shade: TextShade.Heavy },
  { name: "warning", color: TextColor.Warning, shade: TextShade.Heavy },
  { name: "info", color: TextColor.Info, shade: TextShade.Heavy },
  { name: "inverse", color: TextColor.Inverse, shade: TextShade.Heavy },
  { name: "hint", color: TextColor.Basic, shade: TextShade.Hint },
] as const;

const SAMPLE = "The quick brown fox jumps over the lazy dog";

const VARIANT_GROUPS: { title: string; items: TextVariant[] }[] = [
  {
    title: "Display",
    items: [TextVariant.D1, TextVariant.D2, TextVariant.D3],
  },
  {
    title: "Heading",
    items: [
      TextVariant.H1,
      TextVariant.H2,
      TextVariant.H3,
      TextVariant.H4,
      TextVariant.H5,
    ],
  },
  {
    title: "Body",
    items: [TextVariant.B1, TextVariant.B2, TextVariant.B3],
  },
  {
    title: "Caption",
    items: [TextVariant.C1, TextVariant.C2],
  },
];

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <div className="flex flex-col gap-1 border-b border-generic-disabled pb-3">
      <Text
        variant={TextVariant.H4}
        color={TextColor.Basic}
        shade={TextShade.Primary}
        weight={TextWeight.Semibold}
      >
        {title}
      </Text>
      {description ? (
        <Text
          variant={TextVariant.B3}
          color={TextColor.Basic}
          shade={TextShade.Secondary}
        >
          {description}
        </Text>
      ) : null}
    </div>
    {children}
  </section>
);

const meta = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Типографический компонент для отображения текста через props variant, weight, color и shade.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    as: {
      control: "select",
      options: tags,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div className="w-[520px] rounded-sm bg-generic-disabled px-8 py-7">
      <div className="flex flex-col gap-2">
        <Text
          variant={TextVariant.C1}
          color={TextColor.Basic}
          shade={TextShade.Secondary}
          weight={TextWeight.Regular}
        >
          Кабинет · Обзор
        </Text>
        <div className="flex items-baseline gap-2">
          <Text
            as="h2"
            variant={TextVariant.H3}
            color={TextColor.Basic}
            shade={TextShade.Primary}
            weight={TextWeight.Semibold}
          >
            Профиль пользователя
          </Text>
          <Text
            variant={TextVariant.B3}
            color={TextColor.Basic}
            shade={TextShade.Hint}
          >
            v2.4
          </Text>
        </div>
        <Text
          variant={TextVariant.B2}
          color={TextColor.Basic}
          shade={TextShade.Secondary}
        >
          Здесь собраны основные настройки аккаунта, уведомления и доступ к
          связанным сервисам.
        </Text>
        <Text
          variant={TextVariant.B3}
          color={TextColor.Brand}
          shade={TextShade.Heavy}
          className="mt-3"
        >
          Подробнее о тарифе
        </Text>
      </div>
    </div>
  ),
};

export const VariantsWeightsColors: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-[920px] flex-col gap-12 py-4">
      <Section
        title="Type scale"
        description="Пресеты по категориям: display → heading → body → caption"
      >
        <div className="flex flex-col gap-8">
          {VARIANT_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <Text
                variant={TextVariant.C1}
                color={TextColor.Basic}
                shade={TextShade.Hint}
              >
                {group.title}
              </Text>
              <div className="flex flex-col gap-4">
                {group.items.map((variant) => (
                  <div
                    key={variant}
                    className="grid grid-cols-[72px_1fr] items-baseline gap-4"
                  >
                    <Text
                      variant={TextVariant.C1}
                      color={TextColor.Basic}
                      shade={TextShade.Secondary}
                    >
                      {variant}
                    </Text>
                    <Text
                      variant={variant}
                      color={TextColor.Basic}
                      shade={TextShade.Primary}
                    >
                      {SAMPLE}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Weights"
        description="Один пресет (b1), разные веса через prop weight"
      >
        <div className="flex flex-col gap-3">
          {weights.map((weight) => (
            <div
              key={weight}
              className="grid grid-cols-[100px_1fr] items-baseline gap-4"
            >
              <Text
                variant={TextVariant.C1}
                color={TextColor.Basic}
                shade={TextShade.Secondary}
              >
                {weight}
              </Text>
              <Text
                variant={TextVariant.B1}
                color={TextColor.Basic}
                shade={TextShade.Primary}
                weight={weight}
              >
                {SAMPLE}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Colors"
        description="Категория цвета + shade (heavy / primary / secondary / hint)"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {textColors.map((item) => {
            const isInverse = item.name === "inverse";
            return (
              <div
                key={item.name}
                className={`flex flex-col gap-1 rounded-sm px-4 py-3 ${
                  isInverse ? "bg-contrast-dark" : "bg-generic-disabled"
                }`}
              >
                <Text
                  variant={TextVariant.B3}
                  color={isInverse ? TextColor.Inverse : TextColor.Basic}
                  shade={isInverse ? TextShade.Light : TextShade.Hint}
                >
                  {item.name}
                </Text>
                <Text
                  variant={TextVariant.B2}
                  color={item.color}
                  shade={item.shade}
                >
                  Aa Bb Cc
                </Text>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  ),
};

export const AsElements: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {tags.map((tag) => (
        <Text
          key={tag}
          as={tag}
          variant={TextVariant.B2}
          color={TextColor.Basic}
          shade={TextShade.Primary}
        >
          Rendered as &lt;{tag}&gt;
        </Text>
      ))}
    </div>
  ),
};
