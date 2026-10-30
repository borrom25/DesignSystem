import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TABS_OVERFLOW_PROPS: readonly PropDefinition[] = [
  {
    name: "items",
    type: "TabsOverflowItem<T>[]",
    description:
      "Список вкладок: value, label, disabled, counter, leftSlot и rightSlot",
  },
  {
    name: "value / defaultValue",
    type: "T",
    description: "Управляемое или начальное выбранное значение",
  },
  {
    name: "onValueChange",
    type: "(value: T) => void",
    description: "Вызывается при выборе видимой или скрытой вкладки",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер вкладок",
    defaultValue: "md",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Отключает все вкладки",
    defaultValue: "false",
  },
  {
    name: "moreLabel",
    type: "string",
    description: "Текст кнопки, которая открывает скрытые вкладки",
    defaultValue: "Еще",
  },
  {
    name: "sideMenu",
    type: "boolean",
    description: "Передает sideMenu в Popover.Content для меню скрытых вкладок",
  },
  {
    name: "indicatorOffset",
    type: "number",
    description:
      "Смещение нижнего индикатора, если вкладки не внутри Header/HeaderInside. В хедере линия садится на нижнюю границу автоматически.",
    defaultValue: "0",
  },
  {
    name: "itemWrapper",
    type: "({ item, index, children }) => ReactNode",
    description:
      "Необязательная обертка вокруг видимой вкладки, например Draggable. children — готовая кнопка вкладки, ее не нужно перерисовывать. Обертка не должна добавлять ширину, padding и фон (используйте inline-flex w-fit). Пункты меню «Еще» и измерение ширин она не затрагивает.",
  },
  {
    name: "className",
    type: "string",
    description: "Класс корневого контейнера",
  },
];
