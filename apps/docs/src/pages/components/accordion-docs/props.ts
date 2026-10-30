import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const ACCORDION_PROPS: PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Заголовок панели",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Контент, который раскрывается внутри панели",
  },
  {
    name: "subtitle",
    type: "ReactNode",
    description: "Дополнительное описание под заголовком",
  },
  {
    name: "titleProps",
    type: "AccordionTextProps",
    description:
      "Пропсы для Text заголовка: `variant`, `weight`, `color`, `shade`. Если передать `color` или `shade`, дефолтный hover отключается. Свой hover можно задать через `hoverClassName`.",
  },
  {
    name: "subtitleProps",
    type: "AccordionTextProps",
    description:
      "Пропсы для Text подзаголовка: `variant`, `weight`, `color`, `shade`. Если передать `color` или `shade`, дефолтный hover отключается. Свой hover можно задать через `hoverClassName`.",
  },
  {
    name: "headSlot",
    type: "ReactElement",
    description: "Дополнительный элемент справа в заголовке",
  },
  {
    name: "iconLeft",
    type: "LucideIcon",
    description: "Иконка слева от заголовка",
  },
  {
    name: "position",
    type: "start, mid, end",
    description: "Позиция панели в группе, влияет на скругления и разделитель",
    defaultValue: "start",
  },
  {
    name: "chevronPosition",
    type: "left, right",
    description: "Положение шеврона относительно заголовка",
    defaultValue: "right",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Отключает раскрытие панели и элементы в headSlot",
  },
  {
    name: "className",
    type: "string",
    description: "Класс внутреннего контейнера панели",
  },
];
