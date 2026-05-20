import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface MessageFileState {
  files: File[];
}

type FilesSetterType = FileList | File[] | null;

interface MessageFileActions {
  setFiles: (files: FilesSetterType) => void;
  removeAllFiles: () => void;
  removeFile: (index: number) => void;
}

type MessageFileStore = MessageFileState & MessageFileActions;

export const useMessageFileStore = create<MessageFileStore>()(
  immer((set) => ({
    files: [],

    setFiles: (files: FilesSetterType) => {
      set((state) => {
        state.files = files ? [...state.files, ...files] : [...state.files];
      });
    },

    removeAllFiles: () => {
      set((state) => {
        state.files = [];
      });
    },

    removeFile: (index: number) => {
      set((state) => {
        state.files = state.files.filter((_, i) => i !== index);
      });
    },
  }))
);
