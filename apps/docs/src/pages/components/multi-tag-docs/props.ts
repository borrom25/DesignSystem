import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const MULTI_TAG_PROPS: readonly PropDefinition[] = [
  {
    name: "options",
    type: "MultiTagOption<T>[]",
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
    name: "onChange",
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
    defaultValue: "Выберите...",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер компонента",
    defaultValue: "md",
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
      'Если все опции выбраны, onChange получает "all" вместо полного массива',
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
    name: "maxVisibleRows",
    type: "number",
    description: "Максимальное число видимых строк с тегами в триггере",
    defaultValue: "4",
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
    name: "children",
    type: "ReactNode",
    description:
      "Кастомная композиция через MultiTagTrigger, MultiTagValue, MultiTagContent и MultiTagItem",
  },
  {
    name: "className / triggerClassName / contentClassName",
    type: "string",
    description: "Классы для внешней обертки, триггера и списка",
  },
];
