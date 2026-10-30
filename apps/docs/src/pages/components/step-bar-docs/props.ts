import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const STEP_BAR_PROPS: PropDefinition[] = [
  {
    name: "items",
    type: "StepBarItem<T>[]",
    description: "Список шагов для отображения и навигации",
  },
  {
    name: "active",
    type: "T",
    description: "Идентификатор активного шага в controlled-режиме",
  },
  {
    name: "defaultActive",
    type: "T",
    description: "Начальный шаг в uncontrolled-режиме",
  },
  {
    name: "onChangeStep",
    type: "(step: T) => void",
    description: "Колбэк изменения шага (опционален в uncontrolled-режиме)",
  },
  {
    name: "onStepTransition",
    type: "({ previousStep, nextStep, direction }) => void",
    description:
      "Колбэк перехода между шагами с метаданными направления (forward/backward/same)",
  },
  {
    name: "onClickSuccessButton",
    type: "() => void",
    description: "Обработчик кнопки завершения на последнем шаге",
  },
  {
    name: "successButtonText",
    type: "string",
    description: "Текст кнопки завершения",
    defaultValue: "Готово",
  },
  {
    name: "loadingPrev",
    type: "boolean",
    description:
      "Состояние загрузки кнопки назад: спиннер внутри кнопки, вся навигация заблокирована",
    defaultValue: "false",
  },
  {
    name: "loadingNext",
    type: "boolean",
    description:
      "Состояние загрузки кнопки вперёд: спиннер внутри кнопки, вся навигация заблокирована",
    defaultValue: "false",
  },
  {
    name: "loadingSuccess",
    type: "boolean",
    description:
      "Состояние загрузки кнопки завершения: спиннер внутри кнопки, вся навигация заблокирована",
    defaultValue: "false",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные классы для корневого контейнера",
  },
  {
    name: "StepBarItem.id",
    type: "string | number",
    description: "Уникальный идентификатор шага",
  },
  {
    name: "StepBarItem.label",
    type: "ReactNode",
    description: "Отображаемое имя шага",
  },
  {
    name: "StepBarItem.disabled",
    type: "boolean",
    description: "Блокирует выбор шага и исключает его из next/prev",
    defaultValue: "false",
  },
  {
    name: "StepBarItem.leftIcon / rightIcon",
    type: "LucideIcon",
    description: "Иконка слева и справа от названия шага",
  },
  {
    name: "StepBarItem.type",
    type: "successful | error",
    description: "Визуальный статус шага (успех или ошибка)",
  },
];

export const USE_STEP_BAR_PROPS: PropDefinition[] = [
  {
    name: "items",
    type: "StepBarItem<T>[]",
    description: "Те же шаги, что используются в StepBar",
  },
  {
    name: "active",
    type: "T",
    description: "Текущий активный шаг в controlled-режиме",
  },
  {
    name: "defaultActive",
    type: "T",
    description: "Начальный шаг, если active не передан",
  },
  {
    name: "onChangeStep",
    type: "(step: T) => void",
    description: "Вызывается при смене шага (опционально)",
  },
];

export const USE_STEP_BAR_RETURN: PropDefinition[] = [
  {
    name: "active",
    type: "T | undefined",
    description: "Текущий активный шаг (из controlled или internal state)",
  },
  {
    name: "stepsRef",
    type: "RefObject<HTMLDivElement>",
    description: "Ref контейнера шагов для скролла к активному элементу",
  },
  {
    name: "indicatorStyle",
    type: "{ width; transform; opacity }",
    description: "Инлайн-стили индикатора активного шага",
  },
  {
    name: "isFirstStep / isLastStep",
    type: "boolean",
    description: "Флаги для блокировки кнопок навигации",
  },
  {
    name: "setStepRef",
    type: "(index, element) => void",
    description: "Регистрация refs кнопок шагов по индексу",
  },
  {
    name: "onStepClick",
    type: "(step: T) => void",
    description: "Обработчик клика по шагу",
  },
  {
    name: "goPrev / goNext",
    type: "() => void",
    description: "Переход между доступными шагами",
  },
];
