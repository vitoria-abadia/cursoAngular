import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmarModalComponent } from './confirmar-modal/confirmar-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor() {}

  private showAlert(
    message: string,
    type: AlertTypes,
    modalService: BsModalService,
    dismissTimeout?: number
  ) {
    const bsModalRef: BsModalRef = modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string, modalService: BsModalService) {
    this.showAlert(message, AlertTypes.DANGER, modalService);
  }

  showAlertSuccess(message: string, modalService: BsModalService) {
    this.showAlert(message, AlertTypes.SUCCESS, modalService, 3000);
  }

  showConfirm(
    title: string,
    msg: string,
    modalService: BsModalService,
    okTxt?: string,
    cancelTxt?: string
  ) {
    const bsModalRef: BsModalRef = modalService.show(ConfirmarModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    //return (<ConfirmarModalComponent>bsModalRef.content).confirmResult;
  }
}
