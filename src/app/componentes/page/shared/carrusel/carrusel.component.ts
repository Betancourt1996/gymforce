import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}


@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CarouselModule, TagModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent implements OnInit {

  servicios: Product[] = [
    {
      id: '1000',      
      name: 'Stepboxing',      
      image: 'images/post01.jpg'
    },
    {
      id: '1001',      
      name: 'Entrenamiento',      
      image: 'images/002.jpg'
    },
    {
      id: '1002',      
      name: 'Cardio',      
      image: 'images/007.jpg'
    },
    {
      id: '1004',      
      name: 'Bailoterapia',      
      image: 'images/002.jpg',
    },
    {
      id: '1005',      
      name: 'Bailoterapia',      
      image: 'images/002.jpg'
    },
    {
      id: '1006',      
      name: 'Bailoterapia',      
      image: 'images/002.jpg'
    }
  ]; 

  responsiveOptions: any[] = [];
  paginaActiva: number = 2;
  constructor() {}

  ngOnInit() {


    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3, // Cambiado para forzar 3 elementos
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}
}