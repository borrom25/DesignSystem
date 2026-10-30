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
    description: "При подключении и обновлении всегда используйте последнюю опубликованную версию по тегу npm latest:",
    code: `npm install borrom-ds-test@latest
# или
yarn add borrom-ds-test@latest
# или
pnpm add borrom-ds-test@latest`,
    content: <p>Плейграунд описывает API выпуска 0.0.72, который ещё в обработке. До завершения публикации latest может указывать на предыдущую версию. Сохраняйте lockfile проекта.</p>,
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
    content: <a href="https://github.com/borrom25/DesignSystem/blob/main/docs/using-design-system.md" target="_blank" rel="noreferrer">Инструкция по строгому использованию ДС в проекте</a>,
  },
  {
    title: "5. Обновление библиотеки",
    description: "Прочитайте миграции, обновите ДС до latest и проверьте установленную версию. Сохраните обновлённый lockfile.",
    code: `npm install borrom-ds-test@latest
# или
yarn add borrom-ds-test@latest
# или
pnpm add borrom-ds-test@latest`,
    content: <a href="https://github.com/borrom25/DesignSystem/blob/main/docs/migration-gitlab-c277eef5.md" target="_blank" rel="noreferrer">Инструкция миграции в GitHub</a>,
  },
  {
    title: "6. Совместимость стилей",
    description: "Проверьте глобальные reset-стили, правила для button/input и !important: они могут переопределять токены, отступы и цвета библиотеки.",
  },
];
