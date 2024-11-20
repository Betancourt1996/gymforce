import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { CarruselSedeComponent } from "../shared/carrusel-sede/carrusel-sede.component";

@Component({
  selector: 'app-sede',
  standalone: true,
  imports: [FooterComponent,  CarruselSedeComponent],
  templateUrl: './sede.component.html',
  styleUrl: './sede.component.scss'
})
export class SedeComponent {

}
