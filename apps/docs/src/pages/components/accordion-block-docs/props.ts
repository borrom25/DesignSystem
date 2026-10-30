import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const ACCORDION_BLOCK_PROPS: PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Заголовок панели",
  },
  {
    name: "description",
    type: "ReactNode",
    description:
      "Описание под заголовком, выровнено с title. Всегда видно. Строка рендерится как абзац B2 и переносится на несколько строк",
  },
  {
    name: "progress",
    type: "number",
    description:
      "Прогресс 0–100. Полоска заполняется с анимацией, процент показывается в скруглённом label",
  },
  {
    name: "labelPosition",
    type: '"end" | "top"',
    description:
      "Позиция скруглённого label с процентом: справа от полоски или над ней",
    defaultValue: "end",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Контент, который плавно выезжает при раскрытии. Несколько детей — колонка с gap 8px",
  },
  {
    name: "headSlot",
    type: "ReactNode",
    description:
      "Слот сразу после заголовка: бейджи, действия и другие компоненты. Клик по слоту не переключает панель",
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
      "Пропсы для Text описания (`description`): `variant`, `weight`, `color`, `shade`. Работают, когда description — строка. Если передать `color` или `shade`, дефолтный hover отключается. Свой hover можно задать через `hoverClassName`.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Размер панели: padding (xs: 8px, sm: 14px, md: 20px)",
    defaultValue: "md",
  },
  {
    name: "variant",
    type: "basic, secondary",
    description:
      "Вариант оформления Block: фон и скругление. Рамку Block не рисует — её можно добавить через className",
    defaultValue: "basic",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Отключает раскрытие панели",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    description: "Начальное состояние раскрытия вложенного контента",
    defaultValue: "false",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительный класс корневого Block",
  },
];
