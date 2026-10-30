import type { ReactNode } from "react";

export interface QuickStartStep {
  title: string;
  description: ReactNode;
  code?: string;
  content?: ReactNode;
}

export const QUICK_START_STEPS: QuickStartStep[] = [
  {
    title: "1. Установка библиотеки",
    description: "Документация рассчитана на borrom-ds-test@0.0.72. После завершения публикации установите эту версию:",
    code: `npm install borrom-ds-test@0.0.72
# или
yarn add borrom-ds-test@0.0.72
# или
pnpm add borrom-ds-test@0.0.72`,
    content: <p>Выпуск 0.0.72 ещё в обработке. Плейграунд показывает локальные исходники; доступность пакета в npm зависит от завершения публикации.</p>,
  },
  {
    title: "2. Подключение стилей",
    description: "Один раз импортируйте CSS в точке входа приложения:",
    code: `import "borrom-ds-test/styles.css";`,
  },
  {
    title: "3. Подключение UIKitProvider",
    description: "Провайдер подключает тему, размеры экрана, язык, модальные окна и уведомления.",
    code: `import { createRoot } from "react-dom/client";
import { UIKitProvider, Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

createRoot(document.getElementById("root")!).render(
  <UIKitProvider>
    <Button>Начать</Button>
  </UIKitProvider>
);`,
    content: <p>Параметры <code>withThemeProvider</code>, <code>withScreenProvider</code> и <code>withLanguageProvider</code> по умолчанию включены.</p>,
  },
  {
    title: "4. Документация и Figma",
    description: "Props и примеры находятся на страницах компонентов. Документы для Figma и Code Connect хранятся рядом с реализацией в GitHub.",
    content: <a href="https://github.com/borrom25/DesignSystem/tree/main/src/components" target="_blank" rel="noreferrer">Открыть компоненты в GitHub</a>,
  },
  {
    title: "5. Обновление библиотеки",
    description: "Перед переходом на 0.0.72 прочитайте инструкцию миграции в GitHub. Выполните команды после завершения публикации.",
    code: `npm install borrom-ds-test@0.0.72
# или
yarn add borrom-ds-test@0.0.72
# или
pnpm add borrom-ds-test@0.0.72`,
    content: <a href="https://github.com/borrom25/DesignSystem/blob/main/docs/migration-gitlab-c277eef5.md" target="_blank" rel="noreferrer">Инструкция миграции в GitHub</a>,
  },
  {
    title: "6. Совместимость стилей",
    description: "Проверьте глобальные reset-стили, правила для button/input и !important: они могут переопределять токены, отступы и цвета библиотеки.",
  },
];
