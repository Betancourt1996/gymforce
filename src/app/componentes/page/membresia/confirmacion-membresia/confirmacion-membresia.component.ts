import { Component, OnInit } from '@angular/core';
import { MembresiasService } from 'app/services/membresias.service';
import { LoadingComponent } from "../../shared/loading/loading.component";
import { CommonModule } from '@angular/common';
import { ModalService } from 'app/services/modal.service';
import { ModalCompraComponent } from './modal-compra/modal-compra.component';

@Component({
  selector: 'app-confirmacion-membresia',
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  templateUrl: './confirmacion-membresia.component.html',
  styleUrl: './confirmacion-membresia.component.scss'
})
export class ConfirmacionMembresiaComponent implements OnInit{
  dataResumen: any = {}
  loading: boolean = false;
  constructor(
    private membresiasServices: MembresiasService,
    private modalService: ModalService
  ){}
  ngOnInit() {
   
  }
  modificar(){}
  confirmar(){
    this.modalService.openModal(ModalCompraComponent, {
      title: 'Hola Mundo',
      message: 'Este es un modal dinámico con PrimeNG en un proyecto standalone.',
      
    },"",'50%');
  }
}
