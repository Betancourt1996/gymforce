import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembresiasService {
  // Definir signals
  selectedGym = signal<any>(null);
  selectedPlan = signal<any>(null);
  selectedPago = signal<any>(null);
  confirmarResumen = signal<boolean>(false);

  // Métodos para actualizar los signals
  setGym(gym: any) { this.selectedGym.set(gym); }
  setPlan(plan: any) { this.selectedPlan.set(plan); }
  setPago(pago: any) { this.selectedPago.set(pago); }
  setConfirmarResumen(booConfi: boolean) { this.confirmarResumen.set(booConfi); }
}
