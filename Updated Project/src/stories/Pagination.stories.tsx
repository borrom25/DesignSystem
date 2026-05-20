import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "@/components";
import { Size, Type } from "@/types";

const sizes = Object.values(Size);
const types = ["fill", "ghost", "outline"] as const;

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент Pagination для навигации по страницам с поддержкой различных размеров, типов и опциональным полем ввода для прямого перехода.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Текущая страница",
      table: {
        type: { summary: "number" },
      },
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Общее количество страниц",
      table: {
        type: { summary: "number" },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description: "Размер компонента",
      table: {
        type: { summary: "Size" },
        defaultValue: { summary: "sm" },
      },
    },
    type: {
      control: "select",
      options: types,
      description: "Тип кнопок (fill, ghost, outline)",
      table: {
        type: { summary: "TabType" },
        defaultValue: { summary: "fill" },
      },
    },
    showFirstLast: {
      control: "boolean",
      description: "Показать кнопки перехода на первую/последнюю страницу",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showPageNumbers: {
      control: "boolean",
      description: "Показать номера страниц",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showPageInput: {
      control: "boolean",
      description: "Показать поле ввода для прямого перехода",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    prevText: {
      control: "text",
      description: "Текст для кнопки 'назад'",
      table: {
        type: { summary: "string" },
      },
    },
    nextText: {
      control: "text",
      description: "Текст для кнопки 'вперед'",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключить пагинацию",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 3 },
      description: "Количество страниц вокруг текущей",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    inputDebounceDelay: {
      control: { type: "number", min: 0, max: 2000 },
      description: "Задержка debounce для поля ввода страницы (мс)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "500" },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;
const noop = () => {};

export const Playground: Story = {
  args: {
    currentPage: 1,
    totalPages: 100,
    onPageChange: noop,
    size: Size.Sm,
    type: Type.Fill,
    showFirstLast: true,
    showPageNumbers: true,
    showPageInput: false,
    disabled: false,
    siblingCount: 1,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Интерактивная пагинация. Используйте контролы ниже для настройки всех свойств.",
      },
    },
  },
};

export const WithPageInput: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    onPageChange: noop,
    size: Size.Sm,
    type: Type.Fill,
    showPageInput: true,
    inputDebounceDelay: 500,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пагинация с полем ввода для прямого перехода на страницу. Ввод применяется с задержкой (debounce) или по нажатию Enter.",
      },
    },
  },
};

export const WithTextButtons: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: noop,
    size: Size.Sm,
    type: Type.Fill,
    prevText: "Назад",
    nextText: "Вперед",
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Пагинация с текстовыми подписями на кнопках навигации.",
      },
    },
  },
};

export const SimplePagination: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    onPageChange: noop,
    size: Size.Sm,
    type: Type.Fill,
    showFirstLast: false,
    showPageNumbers: false,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Минималистичная пагинация только с кнопками предыдущей/следующей страницы.",
      },
    },
  },
};

export const AllSizes: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: noop,
  },
  render: () => {
    const [pages, setPages] = useState({ xs: 5, sm: 5, md: 5 });
    return (
      <div className="flex flex-col gap-4 items-start">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-4">
            <span className="text-secondary w-8">{size}:</span>
            <Pagination
              size={size}
              type={Type.Fill}
              currentPage={pages[size]}
              totalPages={10}
              onPageChange={(page) => setPages((p) => ({ ...p, [size]: page }))}
            />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Пагинация во всех доступных размерах: xs, sm, md.",
      },
    },
  },
};

export const AllTypes: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: noop,
  },
  render: () => {
    const [pages, setPages] = useState({ fill: 5, ghost: 5, outline: 5 });
    return (
      <div className="flex flex-col gap-4 items-start">
        {types.map((type) => (
          <div key={type} className="flex items-center gap-4">
            <span className="text-secondary w-16">{type}:</span>
            <Pagination
              size={Size.Sm}
              type={type}
              currentPage={pages[type]}
              totalPages={10}
              onPageChange={(page) => setPages((p) => ({ ...p, [type]: page }))}
            />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Пагинация с разными типами кнопок: fill, ghost, outline.",
      },
    },
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: noop,
    size: Size.Sm,
    type: Type.Fill,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пагинация с небольшим количеством страниц - все страницы отображаются без многоточия.",
      },
    },
  },
};
