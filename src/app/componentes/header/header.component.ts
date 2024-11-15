import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule aquí

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
