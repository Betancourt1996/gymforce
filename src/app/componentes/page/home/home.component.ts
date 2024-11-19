import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlanesComponent } from "../shared/planes/planes.component";
import { CarruselComponent } from "../shared/carrusel/carrusel.component";
import { GymsComponent } from "../shared/gyms/gyms.component";
import { CarruselLeyendaComponent } from "../shared/carrusel-leyenda/carrusel-leyenda.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PlanesComponent, CarruselComponent, GymsComponent, CarruselLeyendaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
