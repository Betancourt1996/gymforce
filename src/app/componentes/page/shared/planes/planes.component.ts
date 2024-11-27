import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembresiasService } from 'app/services/membresias.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export class PlanesComponent {
  @Input() booComprarMembresia = false;
  
  constructor(
    private membresiasServices: MembresiasService    
  ) {}
  
  seleccionarPlan(intPlanId) {
    this.membresiasServices.setPlan(new Number(intPlanId));
  }
}
