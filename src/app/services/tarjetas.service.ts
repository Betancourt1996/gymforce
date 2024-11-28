import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {
  // Datos estáticos quemados
  private data = [
    {
      id: 1,
      nombre: "VISA",
      numero: "*** ***** 8089",
      fechaExpiracion: "09/10",
      imgPath: 'images/tarjeta_visa.jpg',
    },
    {
      id: 2,
      nombre: "MASTERCARD",
      numero: "*** ***** **8790",
      fechaExpiracion: "09/10",
      imgPath: 'images/tarjeta_mastercard.jpg',
    },
    
  ];

  constructor() { }

  getTodosTarjetas(): Observable<any> {
    return of(this.data);
  }

  getTarjetaPorId(idTarjeta: number): Observable<any> {
    const foundGym = this.data.find(tarjeta => tarjeta.id === idTarjeta);
    return of(foundGym);
  }
}
