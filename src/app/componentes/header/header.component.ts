import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLogged = false
  sticky: boolean = false;
  headerOffsetTop: number = 0;

  constructor(
    private router: Router, 
    private authService: AuthService) { 
      this.isLogged = this.authService.isLoggedIn();
    }

  ngOnInit(): void {
    const header = document.getElementById('myHeader');
    if (header) {
      this.headerOffsetTop = header.offsetTop;
    }
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('myHeader');
    if (window.scrollY > this.headerOffsetTop) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  }

}
