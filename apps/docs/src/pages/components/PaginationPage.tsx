import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { Pagination } from "@/components";
import { Size, Type } from "@/types";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";

const PAGINATION_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const PAGINATION_TYPE_OPTIONS = [
  { value: Type.Fill, label: "Fill" },
  { value: Type.Ghost, label: "Ghost" },
  { value: Type.Outline, label: "Outline" },
] as const;

const PAGINATION_SIBLING_OPTIONS = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
] as const;

type PaginationPlaygroundState = {
  currentPage: number;
  totalPages: number;
  size: (typeof Size)[keyof typeof Size];
  type: typeof Type.Fill | typeof Type.Ghost | typeof Type.Outline;
  showFirstLast: boolean;
  showPageNumbers: boolean;
  showPageInput: boolean;
  disabled: boolean;
  forwardOnly: boolean;
  siblingCount: 0 | 1 | 2 | 3;
  prevText: string;
  nextText: string;
};

const PAGINATION_DEFAULT_STATE: PaginationPlaygroundState = {
  currentPage: 4,
  totalPages: 18,
  size: Size.Sm,
  type: Type.Fill,
  showFirstLast: true,
  showPageNumbers: true,
  showPageInput: false,
  disabled: false,
  forwardOnly: false,
  siblingCount: 1,
  prevText: "",
  nextText: "",
};

const PAGINATION_PROPS: readonly PropDefinition[] = [
  {
    name: "currentPage",
    type: "number",
    description: "Текущая активная страница (controlled).",
  },
  {
    name: "totalPages",
    type: "number",
    description: "Общее число страниц.",
  },
  {
    name: "onPageChange",
    type: "(page: number) => void",
    description: "Вызывается при смене страницы.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Размер кнопок пагинации.",
    defaultValue: '"sm"',
  },
  {
    name: "type",
    type: '"fill" | "ghost" | "outline"',
    description: "Визуальный стиль кнопок.",
    defaultValue: '"fill"',
  },
  {
    name: "showFirstLast / showPageNumbers / showPageInput",
    type: "boolean",
    description:
      "Управляют отображением кнопок первой/последней страницы, списка номеров и поля быстрого перехода.",
  },
  {
    name: "prevText / nextText",
    type: "string",
    description: "Текстовые подписи у кнопок назад/вперед.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Полностью блокирует навигацию.",
    defaultValue: "false",
  },
  {
    name: "forwardOnly",
    type: "boolean",
    description:
      "Режим «только вперёд»: скрывает кнопки назад/первой/последней, оставляет одинарную ›. Переход только через › (цифры недоступны); на последней странице › скрывается.",
    defaultValue: "false",
  },
  {
    name: "siblingCount",
    type: "number",
    description: "Сколько соседних страниц отображать рядом с текущей.",
    defaultValue: "1",
  },
  {
    name: "inputDebounceDelay",
    type: "number",
    description: "Задержка (мс) перед применением значения из input-перехода.",
    defaultValue: "500",
  },
];

function clampPage(value: number, totalPages: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.min(Math.max(1, Math.round(value)), totalPages);
}

function parsePositiveNumber(value: string, fallback: number) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function PaginationPreview(
  state: PaginationPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<PaginationPlaygroundState>) => void }
) {
  return (
    <Pagination
      currentPage={state.currentPage}
      totalPages={state.totalPages}
      onPageChange={(page) => updateState({ currentPage: page })}
      size={state.size}
      type={state.type}
      showFirstLast={state.showFirstLast}
      showPageNumbers={state.showPageNumbers}
      showPageInput={state.showPageInput}
      disabled={state.disabled}
      forwardOnly={state.forwardOnly}
      siblingCount={state.siblingCount}
      prevText={state.prevText || undefined}
      nextText={state.nextText || undefined}
    />
  );
}

function renderPaginationControls(
  state: PaginationPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<PaginationPlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Current page"
        value={String(state.currentPage)}
        onChange={(value) => {
          const parsed = parsePositiveNumber(value, state.currentPage);
          updateState({ currentPage: clampPage(parsed, state.totalPages) });
        }}
      />
      <PlaygroundTextControl
        label="Total pages"
        value={String(state.totalPages)}
        onChange={(value) => {
          const nextTotal = Math.max(
            parsePositiveNumber(value, state.totalPages),
            1
          );
          updateState({
            totalPages: nextTotal,
            currentPage: clampPage(state.currentPage, nextTotal),
          });
        }}
      />
      <PlaygroundSelectControl
        label="Size"
        options={PAGINATION_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value })}
      />
      <PlaygroundSelectControl
        label="Type"
        options={PAGINATION_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) =>
          updateState({ type: value as PaginationPlaygroundState["type"] })
        }
      />
      <PlaygroundSelectControl
        label="Sibling count"
        options={PAGINATION_SIBLING_OPTIONS}
        value={String(state.siblingCount)}
        onChange={(value) =>
          updateState({
            siblingCount: Number(
              value
            ) as PaginationPlaygroundState["siblingCount"],
          })
        }
      />
      <PlaygroundTextControl
        label="Prev text"
        value={state.prevText}
        onChange={(prevText) => updateState({ prevText })}
      />
      <PlaygroundTextControl
        label="Next text"
        value={state.nextText}
        onChange={(nextText) => updateState({ nextText })}
      />
      <PlaygroundSwitchControl
        label="Show first/last"
        checked={state.showFirstLast}
        onChange={(showFirstLast) => updateState({ showFirstLast })}
      />
      <PlaygroundSwitchControl
        label="Show page numbers"
        checked={state.showPageNumbers}
        onChange={(showPageNumbers) => updateState({ showPageNumbers })}
      />
      <PlaygroundSwitchControl
        label="Show page input"
        checked={state.showPageInput}
        onChange={(showPageInput) => updateState({ showPageInput })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(disabled) => updateState({ disabled })}
      />
      <PlaygroundSwitchControl
        label="Forward only"
        checked={state.forwardOnly}
        onChange={(forwardOnly) => updateState({ forwardOnly })}
      />
    </>
  );
}

function createPaginationUsageCode(
  packageName: string,
  state: PaginationPlaygroundState
) {
  const prevTextLine = state.prevText
    ? `\n      prevText="${state.prevText}"`
    : "";
  const nextTextLine = state.nextText
    ? `\n      nextText="${state.nextText}"`
    : "";

  return `import { useState } from "react";
import { Pagination } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [currentPage, setCurrentPage] = useState(${state.currentPage});

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={${state.totalPages}}
      onPageChange={setCurrentPage}
      size="${state.size}"
      type="${state.type}"${state.showFirstLast ? "\n      showFirstLast" : ""}${state.showPageNumbers ? "\n      showPageNumbers" : ""}${state.showPageInput ? "\n      showPageInput" : ""}${state.disabled ? "\n      disabled" : ""}${state.forwardOnly ? "\n      forwardOnly" : ""}
      siblingCount={${state.siblingCount}}${prevTextLine}${nextTextLine}
    />
  );
}`;
}

const paginationDocsConfig: ComponentDocsConfig<PaginationPlaygroundState> = {
  title: "Pagination",
  previewLayout: "centered",
  description:
    "Pagination управляет переходом между страницами списка и поддерживает компактный, расширенный и input-сценарии навигации.",
  props: PAGINATION_PROPS,
  initialState: PAGINATION_DEFAULT_STATE,
  createUsageCode: createPaginationUsageCode,
  renderPreview: PaginationPreview,
  renderControls: renderPaginationControls,
};

const PaginationPage = createComponentDocsPage(paginationDocsConfig);

export default PaginationPage;
