import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner, BannerSize, Button } from "@/components";
import { Color, Size } from "@/types";

const colors: Color[] = [
  Color.Brand,
  Color.Action,
  Color.Danger,
  Color.Positive,
  Color.Warning,
  Color.Info,
  Color.Inverse,
];
const sizes = Object.values(BannerSize);

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Содержимое баннера",
    },
    size: {
      control: "select",
      options: sizes,
      description:
        "Размер баннера — влияет на отступы, размер шрифта и скругления",
    },
    color: {
      control: "select",
      options: colors,
      description:
        "Цветовая схема баннера — адаптируется под контекст уведомления",
    },
    className: {
      control: "text",
      description: "Дополнительные CSS-классы для кастомизации внешнего вида",
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <div>
        <strong>Гибкая конфигурация</strong>
        <p className="text-sm mt-1">
          Компонент Banner поддерживает настройку размера, цвета и кастомных
          стилей через className.
        </p>
      </div>
    ),
    color: Color.Brand,
    size: Size.Sm,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {sizes.map((size) => (
        <Banner key={size} size={size} color={Color.Brand}>
          <div>
            <strong>Размер: {size}</strong>
            <p className="text-sm mt-1">
              {size === Size.Xs &&
                "Компактный режим — минимальные отступы, подходит для второстепенных уведомлений"}
              {size === Size.Sm &&
                "Стандартный размер — оптимален для большинства случаев использования"}
            </p>
          </div>
        </Banner>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      {colors.map((color) => (
        <Banner key={color} color={color}>
          <div>
            <strong>Цветовая схема: {color}</strong>
            <p className="text-sm mt-1">
              {color === Color.Brand &&
                "Брендовый цвет — для стандартных информационных сообщений"}
              {color === Color.Action &&
                "Цвет действия — привлекает внимание к интерактивным элементам"}
              {color === Color.Danger &&
                "Цвет ошибки — для критических сообщений и ошибок валидации"}
              {color === Color.Positive &&
                "Цвет успеха — для подтверждения успешных операций"}
              {color === Color.Warning &&
                "Цвет предупреждения — для сообщений, требующих внимания пользователя"}
              {color === Color.Info &&
                "Информационный цвет — для нейтральных справочных сообщений"}
              {color === Color.Inverse &&
                "Инвертированный цвет — для тёмных тем и контрастных интерфейсов"}
            </p>
          </div>
        </Banner>
      ))}
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    children: (
      <div className="space-y-3">
        <div>
          <h3 className="font-bold text-base">Поддержка сложного контента</h3>
          <p className="text-sm mt-1">
            Баннер может содержать любые React-компоненты
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <Button color={Color.Info} size={Size.Sm}>
            Действие 1
          </Button>
          <Button color={Color.Action} size={Size.Sm}>
            Действие 2
          </Button>
        </div>
      </div>
    ),
    color: Color.Brand,
  },
};

export const CustomClassName: Story = {
  args: {
    children: (
      <div>
        <strong>Полная кастомизация через className</strong>
        <p className="text-sm mt-1">
          Проп className позволяет переопределить стандартные стили: добавить
          градиент, тень, рамку, скругления и анимацию.
        </p>
        <code className="text-xs block mt-2 bg-black/20 rounded px-2 py-1 font-mono">
          {`className = "border-4 border-pink-400 shadow-2xl rounded-2xl"`}
        </code>
      </div>
    ),
    color: Color.Brand,
    className: "border-4 border-pink-400 shadow-2xl rounded-2xl",
  },
};
