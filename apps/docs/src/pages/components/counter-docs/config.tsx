import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderCounterControls } from "./controls";
import { CounterPreview } from "./preview";
import { COUNTER_PROPS } from "./props";
import { COUNTER_DEFAULT_STATE, type CounterPlaygroundState } from "./types";
import { createCounterUsageCode } from "./usage";

export const counterDocsConfig: ComponentDocsConfig<CounterPlaygroundState> = {
  title: "Counter",
  developers: [],
  description:
    "Counter отображает числовые значения в компактном формате с вариантами цвета и ограничением по максимальному числу.",
  props: COUNTER_PROPS,
  initialState: COUNTER_DEFAULT_STATE,
  createUsageCode: createCounterUsageCode,
  renderPreview: CounterPreview,
  renderControls: renderCounterControls,
};
