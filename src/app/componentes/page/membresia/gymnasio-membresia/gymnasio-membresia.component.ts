import { Component, EventEmitter, Output } from '@angular/core';
import { FooterComponent } from "../../../footer/footer.component";
import { PlanesComponent } from "../../shared/planes/planes.component";
import { GymsComponent } from "../../shared/gyms/gyms.component";

@Component({
  selector: 'app-gymnasio-membresia',
  standalone: true,
  imports: [GymsComponent],
  templateUrl: './gymnasio-membresia.component.html',
  styleUrl: './gymnasio-membresia.component.scss'
})
export class GymnasioMembresiaComponent {
  

}
