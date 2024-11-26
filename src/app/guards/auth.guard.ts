import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private messageService: MessageService) {} // Inyecta MessageService
  canActivate(): boolean {
    let token = !!localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/auth/ingresar']);
      return false;
    }
  }
}
