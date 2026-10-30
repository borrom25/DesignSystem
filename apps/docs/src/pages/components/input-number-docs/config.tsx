import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderInputNumberControls } from "./controls";
import { InputNumberPreview } from "./preview";
import { INPUT_NUMBER_PROPS } from "./props";
import {
  INPUT_NUMBER_DEFAULT_STATE,
  type InputNumberPlaygroundState,
} from "./types";
import { createInputNumberUsageCode } from "./usage";

export const inputNumberDocsConfig: ComponentDocsConfig<InputNumberPlaygroundState> =
  {
    title: "InputNumber",
    description:
      "InputNumber подходит для ввода чисел с контролируемым значением, диапазоном и stepper-кнопками. Компонент унаследовал label и hint-паттерн от базового Input.",
    props: INPUT_NUMBER_PROPS,
    initialState: INPUT_NUMBER_DEFAULT_STATE,
    createUsageCode: createInputNumberUsageCode,
    renderPreview: InputNumberPreview,
    renderControls: renderInputNumberControls,
  };
