import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymnasiosService {
  // Datos estáticos quemados
  private data = [
    {
      id: 1,
      nombre: "URDESA",
      imgPath: 'images/gym01.png',
    },
    {
      id: 2,
      nombre: "VÍA LA COSTA",
      imgPath: 'images/gym02.png',
    },
  ];

  constructor() { }

  getTodosGymnasios(): Observable<any> {
    return of(this.data);
  }

  getGymPorId(idGym: number): Observable<any> {
    const foundGym = this.data.find(gym => gym.id === idGym);
    return of(foundGym);
  }
}
