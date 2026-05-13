// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1595-5950
// source=src/components/Pagination/Pagination.tsx
// component=Pagination
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Clear: "clear",
  Generic: "generic",
  "Button only": "buttonOnly",
});

const endPage = instance.getBoolean("endPage");
const gapIntoPage = instance.getBoolean("gapIntoPage");
const leftButtons = instance.getBoolean("leftButtons");
const pages = instance.getBoolean("pages");
const rightButtons = instance.getBoolean("rightButtons");

const rawNextText = instance.getString("textNext");
const rawPreviousText = instance.getString("textPrevious");

const nextText = (rawNextText || "Next page").trim();
const previousText = (rawPreviousText || "Previous page").trim();

const isButtonOnly = state === "buttonOnly";
const isGeneric = state === "generic";

const totalPages = endPage ? 50 : 6;
const currentPage = isButtonOnly ? Math.min(2, totalPages) : 1;

const showFirstLast = isButtonOnly ? false : leftButtons && rightButtons;
const showPageNumbers = isButtonOnly ? false : pages;
const showPageInput = isButtonOnly ? false : gapIntoPage;

// Temporary mapping: Figma has separate leftButtons/rightButtons toggles.
// Runtime API does not support hiding entire left or right groups independently.
const prevTextValue = leftButtons ? previousText : "";
const nextTextValue = rightButtons ? nextText : "";

// Temporary mapping: "Generic" in Figma includes a wrapper surface.
// Runtime API has no dedicated wrapper variant, so we map it via className.
const wrapperClassName = isGeneric
  ? "rounded-(--radius-scale-xl) border border-line bg-generic px-(--size-space-sm) py-(--size-space-2xs)"
  : "";

export default {
  example: figma.tsx`
    <Pagination
      className="${wrapperClassName}"
      currentPage={${currentPage}}
      totalPages={${totalPages}}
      onPageChange={() => {}}
      showFirstLast={${showFirstLast}}
      showPageNumbers={${showPageNumbers}}
      showPageInput={${showPageInput}}
      prevText="${prevTextValue}"
      nextText="${nextTextValue}"
      pageInputPlaceholder="Page #"
      size="sm"
      type="fill"
    />
  `,
  imports: ['import { Pagination } from "borrom-ds-test"'],
  id: "pagination",
  metadata: {
    nestable: true,
    props: {
      state,
      endPage,
      gapIntoPage,
      leftButtons,
      pages,
      rightButtons,
      hasTemporarySideButtonsMapping: true,
      hasTemporaryGenericWrapperMapping: true,
      hasTemporaryEndPageMapping: true,
    },
  },
};
