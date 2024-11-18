import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlanesComponent } from "../shared/planes/planes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PlanesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
