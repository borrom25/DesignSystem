export type TablePreviewMode = "default" | "empty" | "loading";

export type TablePlaygroundState = {
  mode: TablePreviewMode;
  striped: boolean;
  bordered: boolean;
  compact: boolean;
  stickyHeader: boolean;
  showToolbar: boolean;
  rowSelection: boolean;
};

export const TABLE_DEFAULT_STATE: TablePlaygroundState = {
  mode: "default",
  striped: true,
  bordered: true,
  compact: false,
  stickyHeader: true,
  showToolbar: true,
  rowSelection: false,
};
