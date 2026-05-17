# Отчет по реализации: Figma node `21552:24046` (экран "Паспорт")

## 1. Контекст и цель

- Источник макета: Figma file `PcODaqVLQR3kp7fKl0Ic7f`, node `21552:24046`.
- Цель: реализовать экран с максимальной визуальной точностью, используя runtime-компоненты `borrom-ds-test`, токены проекта и структуру Figma-нод.
- Ограничение: PNG/screenshot используется только как визуальная проверка результата, но не как источник размеров, spacing или цветов.

## 2. Что было сделано

- Инициализирован и поднят проект на шаблоне без git-инициализации.
- Установлен и подключен пакет `borrom-ds-test` (`runtime + styles.css`).
- Экран реализован в `src/App.tsx` через DS-компоненты:
  - `AppLayout`
  - `HeaderInside`
  - `Button`
  - `Avatar`
  - `Card`
  - `Label`
  - `InputImg`
  - `Input`
  - `TextArea`
  - `Radio`
- Подключены иконки из `lucide-react`: `Bell`, `Upload`, `Check`, `Calendar`.
- Подключены ассеты из Figma-контекста: `avatar.png`, `passport-main.png`, `passport-registration.png`.
- Стили подключены в нужном порядке:
  1. `fonts.css`
  2. `tokens/index.css`
  3. `global.css`
  4. `borrom-ds-test/styles.css`

## 3. Проверки и статус

- `npm run lint`: проходит.
- `npm run build`: проходит.
- Версии React были согласованы с DS:
  - `react@19.2.6`
  - `react-dom@19.2.6`
  - `@types/react@19.2.14`
  - `@types/react-dom@19.2.3`
- Dev-server был запущен на `http://localhost:5173/`.

## 4. Проблемы

### 4.1 Белый экран на старте

Симптом: открывался пустой белый экран.

Причина: несовместимость runtime React. `borrom-ds-test@0.0.70` фактически ожидал React 19, а проект был создан на React 18.

Что помогло:

- обновить `react`, `react-dom` и `@types/*` до ветки 19;
- очистить Vite prebundle cache: `node_modules/.vite`;
- пересобрать и перезапустить проект.

### 4.2 Расхождение со Storybook / Figma по визуалу

Симптомы:

- header визуально разваливался;
- avatar был не на месте;
- radio выглядел не как в макете;
- отличались пропорции карточек и текстовых блоков.

Причины:

- первый page-level layout был приблизительным, а не снятым по точной геометрии Figma-нод;
- `HeaderInside` использовался не в intended-композиции слотов/action-блока;
- `Radio` сначала был в field-режиме через `label`, а макет требовал inline-композицию radio + text;
- `InputImg` по умолчанию квадратный, а в макете upload-зона прямоугольная;
- тема могла расходиться с визуальным ожиданием макета.

### 4.3 Ограничения доступа к внутренним нодам инстанса

Некоторые внутренние node id из metadata инстанса не открывались отдельным `get_design_context`.

Рабочий подход:

- root `get_design_context` для Code Connect сигналов;
- `get_metadata` для геометрии и иерархии;
- ручная page-level композиция поверх DS-компонентов.

## 5. Root cause

Storybook показывает компонент в изолированном сценарии. Экран в приложении - это композиция компонентов, темы, контейнеров, слотов и auto-layout.

Главная причина расхождений была не в "плохих" компонентах DS, а в:

- неверной slot composition;
- неточной геометрии page-level layout;
- различии default-size поведения DS и размеров конкретной Figma-ноды;
- потере `fill/hug` логики при сборке страницы.

## 6. Temporary mappings / assumptions

- `Temporary mapping`: фиксированные frame-ширины/высоты на page-level, потому что отдельные layout-токены для этих размеров не представлены как семантические переменные.
- `Temporary mapping`: принудительная геометрия upload-зоны внутри `InputImg`, потому что preset DS не совпадает с пропорцией конкретной Figma-ноды.
- `Assumption`: поле даты собрано на `Input + Calendar`, так как отдельного date-компонента в root Code Connect не было.

## 7. Компоненты

| Figma компонент | Источник | Runtime import | Статус |
| --- | --- | --- | --- |
| App / Desktop | Code Connect + docs | `AppLayout` | Использован |
| Header / insidePage | Code Connect + docs | `HeaderInside` | Использован |
| Button / Main | Code Connect + docs | `Button` | Использован |
| Avatar | Code Connect + docs | `Avatar` | Использован |
| Label | Code Connect + docs | `Label` | Использован |
| InputImage | Code Connect + docs | `InputImg` | Использован |
| Radio-button | Code Connect + docs | `Radio` | Использован |
| Card | metadata/runtime | `Card` | Использован |
| Input fields | metadata/runtime | `Input` | Использован |
| Text areas | metadata/runtime | `TextArea` | Использован |

## 8. Правила, которые нужно было перенести в шаблон

- Перед реализацией проверять доступность npm-пакета `borrom-ds-test`.
- Не менять import path на git/file/link workaround без решения пользователя.
- Проверять совместимость React / React DOM / types с DS.
- После изменения React или DS очищать `node_modules/.vite`.
- Подключать CSS в правильном порядке: fonts -> tokens -> global -> DS styles.
- До верстки фиксировать тему экрана.
- Снимать ключевую геометрию из Figma metadata, а не из PNG.
- Сохранять `fill/hug`, constraints и auto-layout.
- Проверять intended slot composition DS-компонентов.
- Делать отдельный parity-pass локального экрана против Figma screenshot.
- Фиксировать все временные расхождения как `Temporary mapping` / `Assumption`.
- Проверять отчеты и инструкции на нормальный UTF-8 без mojibake.

## 9. Что обновлено в шаблоне

- `PROJECT_RULES.md`: добавлен preflight по npm, React, Vite cache, CSS order, Figma geometry, slot composition, parity-pass и encoding.
- `AGENTS.md`: добавлены короткие обязательные правила для агента.
- `package.template.json`: React-зависимости обновлены до ветки 19 и добавлен `encoding:check`.
- `scripts/check-text-encoding.js`: добавлена проверка текстовых файлов на mojibake.
- Исправлена кодировка шаблонных инструкций и workflow-документов.
