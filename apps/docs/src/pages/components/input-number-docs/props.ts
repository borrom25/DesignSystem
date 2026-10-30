import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const INPUT_NUMBER_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "number | undefined",
    description: "Контролируемое числовое значение поля.",
  },
  {
    name: "onChange",
    type: "(value: number | undefined) => void",
    description: "Вызывается при вводе, очистке и изменении через stepper.",
  },
  {
    name: "min / max / step",
    type: "number",
    description: "Ограничивают диапазон и шаг изменения значения.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Размер поля ввода и stepper-кнопок.",
    defaultValue: '"md"',
  },
  {
    name: "error / disabled / clearable",
    type: "boolean",
    description:
      "Управляют визуальным состоянием поля, блокировкой и наличием кнопки очистки.",
  },
  {
    name: "label / hint / hintError / required",
    type: "field props",
    description: "Свойства из базового поля для подписи, подсказки и ошибок.",
  },
  {
    name: "inputClassName / className / onClear",
    type: "string / () => void",
    description:
      "Тонкая настройка внешнего вида input и обработчик очистки значения.",
  },
];
