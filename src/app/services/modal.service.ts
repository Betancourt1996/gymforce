import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialogService: DialogService) {}

  openModal(component: any, data: any = {}, header: string = 'Modal', width: string = '50%'): DynamicDialogRef {
    return this.dialogService.open(component, {
      data: data,
      header: header,
      width: width,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      dismissableMask: true
    });
  }
}
