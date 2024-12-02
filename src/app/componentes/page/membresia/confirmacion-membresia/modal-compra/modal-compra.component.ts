import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-compra',
  standalone: true,
  imports: [],
  templateUrl: './modal-compra.component.html',
  styleUrl: './modal-compra.component.scss'
})
export class ModalCompraComponent {

  data: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.data = this.config.data;
  }

  close() {
    this.ref.close();
  }
}
