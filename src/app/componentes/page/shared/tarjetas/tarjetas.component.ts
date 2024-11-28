import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GymnasiosService } from 'app/services/gymnasios.service';
import { MembresiasService } from 'app/services/membresias.service';
import { MessageService } from 'primeng/api';
import { TarjetasService } from 'app/services/tarjetas.service';


@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss'
})
export class TarjetasComponent {

  @Input() booComprarMembresia = false;
  
  constructor(
    private membresiasServices: MembresiasService,
    private tarjetasService: TarjetasService, 
    private messageService: MessageService,
  ) {}

  tarjetas: any[] = [];
  ngOnInit() {
    this.obtenerTodosTarjetas();
  }

  seleccionarFormaPago(intTarjetaId) {
    if(this.booComprarMembresia){
      this.membresiasServices.setPago(new Number(intTarjetaId));
    }
  }

  obtenerTodosTarjetas(){
    this.tarjetasService.getTodosTarjetas().subscribe({
      next: (data) => {
      this.tarjetas = data;
      console.log(this.tarjetas);
      },
      error: (error) => {
        console.log(error)
        this.muestraError("Error al comunicarse con el servidor.");
      }
    });
  }
  
  agregarTarjeta(){
    this.muestraMensaje("", "Click");
  }
  muestraError(error){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
  }
  muestraMensaje(titulo, mensaje) {
    this.messageService.add({ severity: 'secondary', summary: titulo, detail: mensaje });
  }
}
