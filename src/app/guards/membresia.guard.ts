import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

// Interfaz para componentes que requieren este guard
export interface CanExitMembresiaRoute {
  canExit: () => boolean | Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class MembresiaGuard implements CanDeactivate<CanExitMembresiaRoute>, CanActivate {

  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService, 
    private router: Router
  ) {}

  _noNull(variable) {
    if (variable == null || variable == undefined || variable == "" || variable == " ") return false
    else return true
  }

  canActivate(): boolean {
    
    let currentPath = this.router.url;
    let activeIndex = null;
    if (currentPath==='/membresias/gymnasio'){
      activeIndex = 0;
    } else if (currentPath==='/membresias/planes'){
      activeIndex = 1;  
    } else if (currentPath==='/membresias/pagos'){
      activeIndex = 2;    
    } else if (currentPath==='/membresias/resumen'){
      activeIndex = 3;
    } else if (currentPath==='/membresias/confirmacion'){
      activeIndex = 4;
    }
    if (activeIndex==null) {
      this.router.navigate(['/']);
      return false;
    }
    if (activeIndex==0) {
      return true;
    }
    let selectedGym = localStorage.getItem("selectedGym");
    let selectedPlan = localStorage.getItem("selectedPlan");
    let selectedPago = localStorage.getItem("selectedPago");
    let confirmarResumen = localStorage.getItem("confirmarResumen");
    if (activeIndex==1 && this._noNull(selectedGym)) {
      return true;
    }
    if (activeIndex==2 && this._noNull(selectedGym) && this._noNull(selectedPlan)) {
      return true;
    }
    if (activeIndex==3 && this._noNull(selectedGym) && this._noNull(selectedPlan) && this._noNull(selectedPago)) {
      return true;
    }
    if (activeIndex==4 && this._noNull(selectedGym) && this._noNull(selectedPlan) && this._noNull(selectedPago) && this._noNull(confirmarResumen)) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
 
  canDeactivate(component: CanExitMembresiaRoute): Promise<boolean> {
    
    const selectedGym = localStorage.getItem("selectedGym");
    const selectedPlan = localStorage.getItem("selectedPlan");
    const selectedPago = localStorage.getItem("selectedPago");
    const confirmarResumen = localStorage.getItem("confirmarResumen");
    if (this._noNull(selectedGym) || this._noNull(selectedPlan) || this._noNull(selectedPago) || this._noNull(confirmarResumen)) {
      // Envuelve la lógica en una promesa
      return new Promise((resolve) => {
        this.confirmationService.confirm({
          message: '¿Estás seguro de que deseas abandonar la compra?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          acceptLabel: 'Sí, salir',
          rejectLabel: 'Cancelar',
          acceptIcon: "pi pi-check",
          rejectIcon: "pi pi-times",
          rejectButtonStyleClass: "p-button-text",
          accept: () => {
            //this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has aceptado salir.' });
            resolve(true);  // Permite la navegación
          },
          reject: () => {
            resolve(false);  // Bloquea la navegación
          }
        });
      });
    }
    return new Promise((resolve) => {
      resolve(true);  // Permite la navegación
    });
  
  }
}
