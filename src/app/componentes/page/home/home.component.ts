import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlanesComponent } from "../shared/planes/planes.component";
import { CarruselComponent } from "../shared/carrusel/carrusel.component";
import { GymsComponent } from "../shared/gyms/gyms.component";
import { CarruselLeyendaComponent } from "../shared/carrusel-leyenda/carrusel-leyenda.component";
import { PostComponent } from "../shared/post/post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PlanesComponent, CarruselComponent, GymsComponent, CarruselLeyendaComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
