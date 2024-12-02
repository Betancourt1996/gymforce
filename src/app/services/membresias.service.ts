import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TarjetasService } from './tarjetas.service';

@Injectable({
  providedIn: 'root'
})
export class MembresiasService {
  // Definir signals
  selectedGym = signal<any>(null);
  selectedPlan = signal<any>(null);
  selectedPago = signal<any>(null);
  confirmarResumen = signal<any>(false);

  // Métodos para actualizar los signals
  setGym(gym: any) { this.selectedGym.set(gym); }
  setPlan(plan: any) { this.selectedPlan.set(plan); }
  setPago(pago: any) { this.selectedPago.set(pago); }
  setConfirmarResumen(confirmar: any) { this.confirmarResumen.set(confirmar); }


  constructor(
    private tarjetasSevices: TarjetasService,
  ){}

  private dataTarjeta = {
    medio: "Tarjeta",
    nombres: "Juan Carlos Carrillo V.",
    contacto: "098 875 7896",
    correo: "juanCarlos@gmai..com",
    plan: "PLAN BÁSICO",
    subtotal: "18.26",
    impuestos: "2.19",
    delivery: "0.00",
    totalPagar: "20.45"
  };

  getResumen(intIdTarjeta): Observable<any> {    
    const dataTarjeta = this.dataTarjeta;
    let tarjeta = "Visa xxxx98";
    const datos = {...dataTarjeta,tarjeta: tarjeta}
    return of(datos);
  }
}
