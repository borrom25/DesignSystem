import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const SELECT_PROPS: readonly PropDefinition[] = [
  {
    name: "options",
    type: "SelectOption<TValue>[]",
    description:
      "Список доступных опций: value (string, number или null), label, icon и disabled",
  },
  {
    name: "value",
    type: "TValue | null",
    description:
      "Управляемое значение. null — пустой селект или выбранная опция со value: null",
  },
  {
    name: "defaultValue",
    type: "TValue | null",
    description: "Начальное значение для неуправляемого режима",
  },
  {
    name: "onValueChange",
    type: "(value: TValue | null) => void",
    description:
      "Вызывается при выборе опции и при очистке, если не передан onClear",
  },
  {
    name: "onClear",
    type: "() => void",
    description:
      "Кастомный обработчик очистки. В controlled-режиме должен сам сбросить value в null",
  },
  {
    name: "label / hint / hintError",
    type: "ReactNode | string",
    description: "Подписи и подсказки поля",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Текст, который отображается без выбранного значения",
    defaultValue: "Select...",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер селекта",
    defaultValue: "md",
  },
  {
    name: "clearable",
    type: "boolean",
    description: "Разрешает очистку значения",
    defaultValue: "true",
  },
  {
    name: "disabled / error",
    type: "boolean",
    description: "Состояния недоступности и ошибки",
  },
  {
    name: "open / defaultOpen / onOpenChange",
    type: "boolean / boolean / (open: boolean) => void",
    description: "Управление открытым состоянием выпадающего списка",
  },
  {
    name: "renderValue",
    type: "(selected?: SelectOption<TValue>) => ReactNode",
    description: "Кастомный рендер выбранного значения",
  },
  {
    name: "renderItem",
    type: "(option, state: { selected: boolean }) => ReactNode",
    description: "Кастомный рендер пункта списка",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Кастомная композиция через SelectTrigger, SelectValue, SelectContent и SelectItem",
  },
  {
    name: "matchTriggerWidth / maxHeight",
    type: "boolean / number | available",
    description: "Ширина и максимальная высота выпадающего списка",
  },
  {
    name: "onScrollEnd / scrollEndOffset",
    type: "() => void / number",
    description: "Обработчик дозагрузки при скролле к концу списка",
  },
  {
    name: "side / sideOffset / align",
    type: "top | bottom | left | right / number / start | center | end",
    description: "Позиционирование выпадающего списка",
  },
  {
    name: "name / required",
    type: "string / boolean",
    description: "Параметры hidden input для использования в формах",
  },
  {
    name: "className / triggerClassName / contentClassName / itemClassName",
    type: "string",
    description: "Классы для внешней обертки, триггера, списка и пунктов",
  },
];
