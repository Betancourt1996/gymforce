import { Component, OnDestroy } from '@angular/core';
import { MembresiasService } from 'app/services/membresias.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-compra',
  standalone: true,
  imports: [],
  templateUrl: './modal-compra.component.html',
  styleUrl: './modal-compra.component.scss'
})
export class ModalCompraComponent implements OnDestroy{

  data: any;

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    public membresiasService: MembresiasService
  ) {
    this.data = this.config.data;
  }

  close() {
    this.ref.close();
  }

  ngOnDestroy() { //deberia ser si el pago resulta exitoso
    this.membresiasService.setGym(null);
    this.membresiasService.setPlan(null);
    this.membresiasService.setPago(null);
    this.membresiasService.setConfirmarResumen(null);
    localStorage.removeItem("selectedGym");
    localStorage.removeItem("selectedPlan");
    localStorage.removeItem("selectedPago");
    localStorage.removeItem("confirmarResumen");
  }
  
}
