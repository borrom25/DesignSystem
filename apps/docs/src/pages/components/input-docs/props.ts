import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const INPUT_PROPS: readonly PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "string | number | readonly string[]",
    description: "Управляемое или начальное значение поля",
  },
  {
    name: "onChange",
    type: "ChangeEventHandler<HTMLInputElement>",
    description: "Вызывается при изменении значения",
  },
  {
    name: "label / hint / hintError",
    type: "ReactNode | string",
    description: "Подпись, обычная подсказка и текст ошибки",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер поля",
    defaultValue: "md",
  },
  {
    name: "variant",
    type: "default, clear",
    description: "Визуальный вариант поля",
    defaultValue: "default",
  },
  {
    name: "error / disabled / required",
    type: "boolean",
    description: "Состояния ошибки, недоступности и обязательности поля",
  },
  {
    name: "iconLeft / iconRight",
    type: "LucideIcon",
    description: "Иконки слева и справа от нативного input",
  },
  {
    name: "prefix / suffix",
    type: "ReactNode",
    description: "Текстовые или кастомные слоты до и после значения",
  },
  {
    name: "count / maxCount",
    type: "number",
    description: "Счетчик символов и максимальная длина значения",
  },
  {
    name: "clearable / onClear",
    type: "boolean / () => void",
    description: "Показывает кнопку очистки и позволяет переопределить очистку",
    defaultValue: "true",
  },
  {
    name: "className / inputClassName",
    type: "string",
    description: "Классы для обертки и нативного input",
  },
];
