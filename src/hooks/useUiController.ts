import { alertController } from "@/components/Alert/model";
import { modalController } from "@/components/Modal/model/modal-store";
import type {
  ProgrammaticAlertOptions,
  ProgrammaticAlertType,
} from "@/components/Alert/model";
import type { ProgrammaticModalOptions } from "@/components/Modal/model";
import type { ReactNode } from "react";

export interface UiController {
  modal: {
    show<TResult = unknown>(
      contentOrOptions: ReactNode | ProgrammaticModalOptions<TResult>,
      options?: Omit<ProgrammaticModalOptions<TResult>, "content">
    ): string;
    close<TResult = unknown>(result?: TResult): void;
    closeById<TResult = unknown>(modalUid: string, result?: TResult): void;
  };
  alert: {
    show(
      messageOrOptions: ReactNode | ProgrammaticAlertOptions,
      type?: ProgrammaticAlertType
    ): string;
    close(id?: string): void;
  };
  showModal<TResult = unknown>(
    contentOrOptions: ReactNode | ProgrammaticModalOptions<TResult>,
    options?: Omit<ProgrammaticModalOptions<TResult>, "content">
  ): string;
  closeModal<TResult = unknown>(result?: TResult): void;
  closeModalById<TResult = unknown>(modalUid: string, result?: TResult): void;
  showAlert(
    messageOrOptions: ReactNode | ProgrammaticAlertOptions,
    type?: ProgrammaticAlertType
  ): string;
  closeAlert(id?: string): void;
}

export const uiController: UiController = {
  modal: modalController,
  alert: alertController,
  showModal: modalController.show,
  closeModal: modalController.close,
  closeModalById: modalController.closeById,
  showAlert: alertController.show,
  closeAlert: alertController.close,
};

export function useUiController(): UiController {
  return uiController;
}
