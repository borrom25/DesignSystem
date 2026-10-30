import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const ACTION_POPOVER_PROPS: readonly PropDefinition[] = [
  {
    name: "selectedLabel",
    type: "ReactNode",
    description:
      "Текст или контент слева: обычно счётчик выбранных элементов. Если не передан или пустая строка — не рендерится и не занимает отступ",
    defaultValue: "undefined",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Слот действий справа от selectedLabel (кнопки, меню и т.п.)",
    defaultValue: "undefined",
  },
  {
    name: "onClose",
    type: "() => void",
    description:
      "Обработчик клика по кнопке закрытия. Если не передан — кнопка закрытия не отображается",
    defaultValue: "undefined",
  },
  {
    name: "closeAriaLabel",
    type: "string",
    description:
      "ARIA-лейбл кнопки закрытия. Используется только при наличии onClose",
    defaultValue: "undefined",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные классы корневого контейнера",
    defaultValue: "undefined",
  },
];
