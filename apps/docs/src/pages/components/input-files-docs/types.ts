import { Size } from "@/types";

function createDemoFile(name: string, type: string, contents: string) {
  return new File([contents], name, { type });
}

export type InputFilesPlaygroundState = {
  size: Size;
  disabled: boolean;
  error: boolean;
  multiple: boolean;
  viewMode: boolean;
  loading: boolean;
  files: File[] | null;
};

export const INPUT_FILES_DEFAULT_STATE: InputFilesPlaygroundState = {
  size: Size.Md,
  disabled: false,
  error: false,
  multiple: false,
  viewMode: false,
  loading: false,
  files: [createDemoFile("contract.pdf", "application/pdf", "Contract draft")],
};
