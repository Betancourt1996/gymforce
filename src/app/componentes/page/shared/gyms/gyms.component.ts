import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GymnasiosService } from 'app/services/gymnasios.service';
import { MembresiasService } from 'app/services/membresias.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gyms',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './gyms.component.html',
  styleUrl: './gyms.component.scss'
})
export class GymsComponent {
  @Input() booComprarMembresia = false;
  
  constructor(
    private membresiasServices: MembresiasService,
    private gymService: GymnasiosService, 
    private messageService: MessageService,
  ) {}

  gymnasios: any[] = [];
  ngOnInit() {
    this.obtenerTodosGymnasios();
  }

  seleccionarGym(intGymId) {
    this.membresiasServices.setGym(new Number(intGymId));
  }

  obtenerTodosGymnasios(){
    this.gymService.getTodosGymnasios().subscribe({
      next: (data) => {
      this.gymnasios = data;
      console.log(this.gymnasios);
      },
      error: (error) => {
        console.log(error)
        this.muestraError("Error al comunicarse con el servidor.");
      }
    });
  }
  
  muestraError(error){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
  }
  muestraMensaje(titulo, mensaje) {
    this.messageService.add({ severity: 'secondary', summary: titulo, detail: mensaje });
  }
}
