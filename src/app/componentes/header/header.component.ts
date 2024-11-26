import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  enlaces = [
    { path: '/', label: 'Home', exact: true },
    { path: '/sede', label: 'Sede' },
    { path: '/membresias', label: 'Membresias' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/beneficios', label: 'Beneficios' }
  ];
}
