import { Component, effect, OnInit } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { PlanesComponent } from "../shared/planes/planes.component";
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MembresiasService } from 'app/services/membresias.service';

@Component({
  selector: 'app-membresia',
  standalone: true,
  imports: [
    FooterComponent, 
    RouterOutlet, 
    StepsModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './membresia.component.html',
  styleUrl: './membresia.component.scss'
})
export class MembresiaComponent implements OnInit{
  activeIndex: number = 0;
  currentPath: any;
  selectedGym: any;
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private membresiasService: MembresiasService
  ) {
    effect(() => {
      if (this.membresiasService.selectedGym()) {
        console.log('Gym seleccionado: ', this.membresiasService.selectedGym());
        this.navegacionPorIndice(1);
      }
    });
    effect(() => {
      if (this.membresiasService.selectedPlan()) {
        console.log('Plan seleccionado: ',this.membresiasService.selectedPlan());
        this.navegacionPorIndice(2);
      }
    });
    effect(() => {
      if (this.membresiasService.selectedPago()) {
        console.log('Pago seleccionado: ',this.membresiasService.selectedPago());
        this.navegacionPorIndice(3);
      }
    });
    effect(() => {
      if (this.membresiasService.confirmarResumen()) {
        console.log('Resumen Confirmado: ', this.membresiasService.confirmarResumen());
        this.navegacionPorIndice(4);
      }
    });
  }
  
  ngOnInit() { 
    this.currentPath = this.router.url;
    this.seleccionarIndexDelStepper();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
        this.seleccionarIndexDelStepper();
      }
    });
  }

  seleccionarIndexDelStepper(){
    if (this.currentPath==='/membresias/gymnasio'){
      this.activeIndex = 0;
    } else if (this.currentPath==='/membresias/planes'){
      this.activeIndex = 1;  
    } else if (this.currentPath==='/membresias/pagos'){
      this.activeIndex = 2;    
    } else if (this.currentPath==='/membresias/resumen'){
      this.activeIndex = 3;
    } else if (this.currentPath==='/membresias/confirmacion'){
      this.activeIndex = 4;
    } else{
      this.activeIndex = 0;
    }
  }
  // Definimos las etapas del Stepper
  items = [
    { 
      //label: 'Gimnasio',      
      ruta: '/membresias/gymnasio',
    },
    { 
      //label: 'Membresía',
      ruta: '/membresias/planes',
      
    },
    { 
      //label: 'Pago',
      ruta: '/membresias/pagos',
    },
    { 
      //label: 'Resumen',
      ruta: '/membresias/resumen',
    },
    { 
      //label: 'Confirmar',
      ruta: '/membresias/confirmacion',
    }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navegacionPorIndice(indice: number) {
    this.navigateTo(this.items[indice].ruta);
  }

  nextStep() {
    this.navegacionPorIndice(this.activeIndex + 1);
  }

  previousStep() {
    this.navegacionPorIndice(this.activeIndex - 1);
  }
}
