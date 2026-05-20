export const tableBaseStyles = {
  wrapper:
    "relative w-full min-h-0 h-full max-h-[calc(100vh-var(--generic-spacing-19)-var(--generic-spacing-7,16px)-var(--generic-spacing-7,16px))] flex flex-col overflow-hidden [border-radius:var(--br-2xl-radius,14px)] bg-generic [border-top:1px_solid_var(--line-basic-generic,#F6F7F8)] [border-bottom:1px_solid_var(--line-basic-generic,#F6F7F8)] [border-left:1px_solid_var(--line-basic-generic,#F6F7F8)]",
  container:
    "relative w-full flex flex-1 min-h-0 flex-col overflow-auto rounded-[inherit]",
  containerVirtualized:
    "h-full overflow-auto overscroll-contain will-change-scroll",
  containerEmpty: "overflow-hidden",

  table:
    "w-full border-collapse text-sm rounded-[inherit] [&_th]:align-middle [&_td]:align-middle",
  tableStriped: "[&_tbody_tr:nth-child(even)]:bg-generic-light",
  tableBordered: "border border-line",
  tableCompact: "[&_th]:p-2 [&_td]:p-2",

  header: "bg-generic",
  headerSticky: "sticky top-0 z-[15] bg-generic",
  headerRow: "",
  headerCell:
    "relative [min-height:56px] [height:56px] [padding:var(--generic-spacing-0,0)_var(--generic-spacing-7,16px)] text-left font-medium [color:var(--text-basic-primary,#19191A)] [font-size:var(--typography-body-b2-fontSize,14px)] [line-height:18px] border-b border-r border-[var(--line-basic-generic,#F6F7F8)]",
  headerCellStickyLeft:
    "sticky left-[-1px] z-20 border-r-0 bg-generic [box-shadow:inset_-1px_0_0_0_var(--line-basic-generic,#F6F7F8)]",
  headerCellStickyRight:
    "sticky right-[-1px] z-20 border-r-0 bg-generic [box-shadow:inset_1px_0_0_0_var(--line-basic-generic,#F6F7F8)]",
  headerCellBeforeStickyRight: "border-r-0",
  headerCellSelection:
    "whitespace-nowrap text-center !p-0 !w-[40px] !min-w-[40px] !max-w-[40px] !min-h-[56px] !h-[56px]",
  headerCellSortable: "select-none",
  headerCellSorted: "text-primary",
  headerCellContent: "flex items-center gap-2",
  headerCellIcons: "ml-auto flex shrink-0 items-center gap-1",
  headerCellSelectionContent: "justify-center",
  headerCellResizer:
    "absolute top-0 right-0 h-full w-2 cursor-col-resize touch-none select-none border-0 bg-transparent p-0 after:absolute after:right-[3px] after:top-1/2 after:h-[20px] after:w-[2px] after:-translate-y-1/2 after:rounded-scale-md after:bg-generic-medium",

  body: "",
  contentFill: "flex-1 min-h-0",
  emptyViewport: "flex flex-1 items-center justify-center overflow-hidden",
  row: "transition-colors",
  rowHoverable: "hover:[&>td]:bg-[var(--line-basic-generic,#F6F7F8)]",
  rowInteractive: "cursor-pointer",
  rowSelected: "[&>td]:bg-brand/5",

  cell: "[min-height:56px] [height:56px] [padding:var(--generic-spacing-4,10px)_var(--generic-spacing-7,16px)] [color:var(--text-basic-complementary,#525357)]  [font-size:var(--typography-body-b2-fontSize,14px)] [line-height:18px] font-medium border-b border-r border-[var(--line-basic-generic,#F6F7F8)]",
  cellStickyLeft:
    "sticky left-[-1px] z-10 border-r-0 bg-generic [box-shadow:inset_-1px_0_0_0_var(--line-basic-generic,#F6F7F8)]",
  cellStickyRight:
    "sticky right-[-1px] z-10 border-r-0 bg-generic [box-shadow:inset_1px_0_0_0_var(--line-basic-generic,#F6F7F8)]",
  cellBeforeStickyRight: "border-r-0",
  cellSelection:
    "whitespace-nowrap text-center !p-0 !w-[40px] !min-w-[40px] !max-w-[40px] !min-h-[56px] !h-[56px]",
  cellBordered: "border-x border-line first:border-l-0 last:border-r-0",
  selectionControl:
    "mx-auto inline-flex size-[40px] items-center justify-center p-0",
  expandControl:
    "inline-flex size-[40px] items-center justify-center p-0 [padding-left:calc(var(--data-table-row-depth,0)*6px)]",
  expandButton:
    "inline-flex h-auto min-h-0 w-auto min-w-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-secondary hover:text-primary disabled:cursor-default disabled:text-inverse-text-light",
  expandIcon:
    "origin-center rotate-0 transition-transform duration-200 ease-out",
  expandIconExpanded: "rotate-90",
  expandIconAllExpanded: "rotate-180",
  expandButtonPlaceholder: "block size-4 shrink-0",
  actionsControl:
    "mx-auto inline-flex size-[40px] items-center justify-center p-0 ",

  sortIcon: "ml-2 inline-block size-4 text-secondary",
  sortIconActive: "text-primary",
  sortButton:
    "!h-auto !w-auto !min-h-0 !min-w-0 !p-0 !bg-transparent !text-secondary hover:!text-secondary",
  sortButtonDefault: "[&_svg>path]:stroke-basic-complementary",
  sortButtonAsc:
    "[&_svg>path]:stroke-basic-complementary [&_svg>path:first-child]:stroke-inverse-light",
  sortButtonDesc:
    "[&_svg>path]:stroke-basic-complementary [&_svg>path:last-child]:stroke-inverse-light",
  sortButtonActive: "!text-primary hover:!text-primary",

  filterButtonWrapper: "relative inline-flex",
  filterButton:
    "!h-auto !w-auto !min-h-0 !min-w-0 !p-0 !bg-transparent !text-inverse-text-light hover:!text-inverse-text-light",
  filterButtonActive: "!text-primary hover:!text-primary",
  filterButtonIndicator:
    "pointer-events-none absolute -top-1 -right-1 z-1 size-2.5",
  filterPopoverSurface: "p-0",

  empty:
    "flex min-h-[240px] w-full items-center justify-center px-4 py-12 text-center text-secondary",
  loading: "flex items-center justify-center py-12",

  loadingMore:
    "sticky left-0 w-full flex items-center justify-center py-4 border-t border-line bg-generic",
  loadingSpinner: "size-5 animate-spin text-secondary",

  toolbarRoot:
    "flex self-stretch flex-col [border-bottom:1px_solid_var(--line-basic-generic,#F6F7F8)]",
  toolbarTopSlot:
    "w-full [padding:var(--generic-spacing-5,12px)_var(--generic-spacing-7,16px)] [border-bottom:1px_solid_var(--line-basic-generic,#F6F7F8)]",
  toolbarMainRow:
    "flex flex-wrap items-center gap-[var(--generic-spacing-7,16px)] [padding:var(--generic-spacing-5,12px)_var(--generic-spacing-7,16px)]",
  toolbarSearch: "w-64 max-w-full",
  toolbarCounter: "flex items-center gap-2",
  toolbarCounterLabel: "font-medium text-secondary",
  toolbarCounterValue: "font-medium text-primary",
  toolbarActions: "ml-auto",
  toolbarMiddleSlot: "flex flex-1",
  toolbarBottomSlot:
    "w-full [padding:var(--generic-spacing-5,12px)_var(--generic-spacing-7,16px)] [border-top:1px_solid_var(--line-basic-generic,#F6F7F8)]",
  toolbar: "mb-4",
  footer: "mt-4",

  popoverActionWrapper:
    "pointer-events-none absolute bottom-[calc(var(--spacing-13)+var(--spacing-9))] left-1/2 z-30 max-w-[calc(100%-var(--spacing-14))] -translate-x-1/2",
  popoverAction:
    "pointer-events-auto flex h-(--spacing-19) max-w-full items-center gap-(--spacing-7) px-(--spacing-7) py-(--spacing-4) rounded-scale-3xl border border-line bg-generic shadow-popover",
  popoverActionContent: "flex min-w-0 items-center gap-(--spacing-7)",
  popoverActionSelectedLabel:
    "shrink-0 whitespace-nowrap font-roboto-flex text-primary text-body-b1 font-medium leading-body-b1 tracking-body-b1",
  popoverActionSlot: "flex min-w-0 items-center",
  popoverActionClose: "shrink-0",
} as const;

type TableSize = "sm" | "md" | "lg";
type TableSizeStyle = { headerCell: string; cell: string };

export const tableSizeStyles: Record<TableSize, TableSizeStyle> = {
  sm: {
    headerCell: "px-3 py-2 text-xs",
    cell: "px-3 py-2 text-xs",
  },
  md: {
    headerCell: "px-4 py-3 text-sm",
    cell: "px-4 py-3 text-sm",
  },
  lg: {
    headerCell: "px-5 py-4 text-base",
    cell: "px-5 py-4 text-base",
  },
};
