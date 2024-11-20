import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { PlanesComponent } from "../shared/planes/planes.component";

@Component({
  selector: 'app-membresia',
  standalone: true,
  imports: [FooterComponent, PlanesComponent],
  templateUrl: './membresia.component.html',
  styleUrl: './membresia.component.scss'
})
export class MembresiaComponent {

}
