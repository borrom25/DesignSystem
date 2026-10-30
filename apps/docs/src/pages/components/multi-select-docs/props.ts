import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const MULTI_SELECT_PROPS: readonly PropDefinition[] = [
  {
    name: "options",
    type: "MultiSelectOption<T>[]",
    description:
      "Список доступных опций: value (string, number или null), label, icon и disabled",
  },
  {
    name: "value / defaultValue",
    type: "T[]",
    description:
      "Выбранные значения. Поддерживаются controlled и uncontrolled режимы",
  },
  {
    name: "onValueChange",
    type: '(value: T[] | "all") => void',
    description:
      'Вызывается при изменении выбора. При returnAll=true может вернуть "all"',
  },
  {
    name: "onClear",
    type: "() => void",
    description:
      "Кастомный обработчик очистки. В controlled-режиме должен сам сбросить value",
  },
  {
    name: "label / hint / hintError",
    type: "ReactNode | string",
    description: "Подписи и подсказки поля",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Текст, который отображается без выбранных значений",
    defaultValue: "Select items...",
  },
  {
    name: "selectedLabel",
    type: "string",
    description: "Текст рядом со счётчиком выбранных значений",
    defaultValue: "Выбрано строк:",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер компонента",
    defaultValue: "md",
  },
  {
    name: "search / searchValue / onSearchChange",
    type: "boolean / string / (value: string) => void",
    description: "Встроенный поиск по опциям (только без children)",
  },
  {
    name: "selectAll / selectAllLabel",
    type: "boolean / string",
    description: "Показывает пункт выбора всех опций в выпадающем списке",
  },
  {
    name: "returnAll",
    type: "boolean",
    description:
      'Если все опции выбраны, onValueChange получает "all" вместо полного массива',
    defaultValue: "false",
  },
  {
    name: "clearable",
    type: "boolean",
    description: "Разрешает очистку выбранных значений",
    defaultValue: "false",
  },
  {
    name: "disabled / error / required",
    type: "boolean",
    description: "Состояния недоступности, ошибки и обязательности поля",
  },
  {
    name: "open / defaultOpen / onOpenChange",
    type: "boolean / boolean / (open: boolean) => void",
    description: "Управление открытым состоянием выпадающего списка",
  },
  {
    name: "renderValue",
    type: "(selected: MultiSelectOption<T>[]) => ReactNode",
    description: "Кастомный рендер выбранного значения",
  },
  {
    name: "renderItem",
    type: "(option, state: { selected: boolean }) => ReactNode",
    description: "Кастомный рендер пункта списка",
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
    name: "isLoading / hasMore",
    type: "boolean",
    description: "Состояния ленивой подгрузки опций",
  },
  {
    name: "side / sideOffset / align",
    type: "top | bottom | left | right / number / start | center | end",
    description: "Позиционирование выпадающего списка",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Кастомная композиция через MultiSelectTrigger, MultiSelectValue, MultiSelectContent и MultiSelectItem",
  },
  {
    name: "className / triggerClassName / contentClassName / itemClassName",
    type: "string",
    description: "Классы для внешней обертки, триггера, списка и пунктов",
  },
];
