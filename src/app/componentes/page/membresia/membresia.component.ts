import { Component, effect, OnDestroy, OnInit } from '@angular/core';
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
export class MembresiaComponent implements OnInit, OnDestroy{
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
        localStorage.setItem("selectedGym", this.membresiasService.selectedGym().valueOf())
        this.navegacionPorIndice(1);
      }
    });
    effect(() => {
      if (this.membresiasService.selectedPlan()) {
        console.log('Plan seleccionado: ',this.membresiasService.selectedPlan());
        localStorage.setItem("selectedPlan", this.membresiasService.selectedPlan().valueOf())
        this.navegacionPorIndice(2);
      }
    });
    effect(() => {
      if (this.membresiasService.selectedPago()) {
        console.log('Pago seleccionado: ',this.membresiasService.selectedPago());
        localStorage.setItem("selectedPago", this.membresiasService.selectedPago().valueOf())
        this.navegacionPorIndice(3);
      }
    });
    effect(() => {
      if (this.membresiasService.confirmarResumen()) {
        console.log('Resumen Confirmado: ', this.membresiasService.confirmarResumen());
        localStorage.setItem("confirmarResumen", this.membresiasService.confirmarResumen().valueOf())
        this.navegacionPorIndice(4);
      }
    });
  }

  ngOnDestroy() {
    this.membresiasService.setGym(null);
    this.membresiasService.setPlan(null);
    this.membresiasService.setPago(null);
    this.membresiasService.setConfirmarResumen(null);
    localStorage.removeItem("selectedGym");
    localStorage.removeItem("selectedPlan");
    localStorage.removeItem("selectedPago");
    localStorage.removeItem("confirmarResumen");
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
