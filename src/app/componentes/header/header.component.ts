import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogged = false
  constructor(
    private router: Router, 
    private authService: AuthService) { 
      this.isLogged = this.authService.isLoggedIn();
    }
  enlaces = [
    { path: '/', label: 'Home', exact: true },
    { path: '/sede', label: 'Sede' },
    { path: '/membresias', label: 'Membresias' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/beneficios', label: 'Beneficios' }
  ];
  enlacesAuth = [
    { path: '/auth/perfil', label: 'Perfil' },
  ];

  loggout(){
    this.authService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
