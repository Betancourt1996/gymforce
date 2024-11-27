import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MembresiasService } from 'app/services/membresias.service';

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
  
  constructor(private membresiasServices: MembresiasService) {}
  
  seleccionarGym(intGymId) {
    this.membresiasServices.setGym(new Number(intGymId));

    
  }
}
