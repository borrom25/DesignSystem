import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderInputPasswordControls } from "./controls";
import { InputPasswordPreview } from "./preview";
import { INPUT_PASSWORD_PROPS } from "./props";
import {
  INPUT_PASSWORD_DEFAULT_STATE,
  type InputPasswordPlaygroundState,
} from "./types";
import { createInputPasswordUsageCode } from "./usage";

export const inputPasswordDocsConfig: ComponentDocsConfig<InputPasswordPlaygroundState> =
  {
    title: "InputPassword",
    description:
      "InputPassword расширяет базовый Input кнопкой показа и скрытия значения. Компонент подходит для форм авторизации, регистрации и смены пароля.",
    props: INPUT_PASSWORD_PROPS,
    initialState: INPUT_PASSWORD_DEFAULT_STATE,
    createUsageCode: createInputPasswordUsageCode,
    renderPreview: InputPasswordPreview,
    renderControls: renderInputPasswordControls,
  };
