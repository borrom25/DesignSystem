import { useState } from "react";
import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import { ComponentPropsTable } from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../../package.json";
import { StepBarControls } from "./controls";
import { StepBarPreview } from "./preview";
import {
  STEP_BAR_PROPS,
  USE_STEP_BAR_PROPS,
  USE_STEP_BAR_RETURN,
} from "./props";
import { STEP_BAR_DEFAULT_STATE, type StepBarPlaygroundState } from "./types";
import {
  createStepBarUsageCode,
  createStepBarLoadingUsageCode,
  createStepDirectionUsageCode,
  createUseStepBarUsageCode,
} from "./usage";

export default function StepBarDocsPage() {
  const [state, setState] = useState<StepBarPlaygroundState>(
    STEP_BAR_DEFAULT_STATE
  );
  const packageName = packageJson.name;
  const usageCode = createStepBarUsageCode(packageName, state);
  const loadingUsageCode = createStepBarLoadingUsageCode(packageName);
  const directionUsageCode = createStepDirectionUsageCode(packageName);
  const hookUsageCode = createUseStepBarUsageCode(packageName);

  const updateState = (patch: Partial<StepBarPlaygroundState>) => {
    setState((prevState) => ({ ...prevState, ...patch }));
  };

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title="StepBar"
        preview={<StepBarPreview state={state} onStateChange={updateState} />}
        controls={<StepBarControls state={state} onStateChange={updateState} />}
      />

      <ComponentUsage
        code={usageCode}
        title="Базовый пример использования StepBar"
      />

      <ComponentUsage
        code={loadingUsageCode}
        title="Загрузка при переходе вперёд и submit"
      />

      <ComponentDescription text="StepBar используется для поэтапных сценариев: регистрация, формы мастеров и процессы подтверждения. Компонент поддерживает ручной выбор шага, переходы next/prev, состояния error/success и опциональную кнопку финального действия на последнем шаге." />

      <ComponentPropsTable items={STEP_BAR_PROPS} />

      <ComponentDescription
        title="Кастомные примеры (ниже)"
        text="Хуки для StepBar опциональные: если хватает стандартного компонента, их можно не использовать. Ниже два кастомных примера: встроенный рычаг onStepTransition для определения направления перехода (вперёд/назад) и useStepBar для полностью кастомного UI."
      />

      <ComponentUsage
        code={directionUsageCode}
        title="Кастомный пример: переход вперёд/назад через onStepTransition"
      />

      <ComponentUsage
        code={hookUsageCode}
        title="Пример использования хука useStepBar (кастомный UI)"
      />

      <ComponentPropsTable
        items={USE_STEP_BAR_PROPS}
        title="Кастомный пример: входные параметры useStepBar"
      />

      <ComponentDescription text="Возвращаемые значения useStepBar позволяют собрать собственный UI с тем же поведением: безопасные переходы между доступными шагами, скролл к активному пункту и позиционирование индикатора." />

      <ComponentPropsTable
        items={USE_STEP_BAR_RETURN}
        title="Кастомный пример: возвращаемые значения useStepBar"
      />
    </ComponentDocsPage>
  );
}
