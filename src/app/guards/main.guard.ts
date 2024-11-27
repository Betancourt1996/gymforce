import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {

  constructor(
    private router: Router, 
    private messageService: MessageService,
    private authService: AuthService) {}
  canActivate(): boolean {
    let logeado = this.authService.isLoggedIn()
    if (logeado) {
      return true;
    } else {
      this.messageService.add({
        severity: 'error',
        detail: 'Debe iniciar sesión para continuar.'
      });
      return false;
    }
  }
}
