import { Component, OnInit } from '@angular/core';
import { MembresiasService } from 'app/services/membresias.service';
import { LoadingComponent } from "../../shared/loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacion-membresia',
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  templateUrl: './confirmacion-membresia.component.html',
  styleUrl: './confirmacion-membresia.component.scss'
})
export class ConfirmacionMembresiaComponent implements OnInit{
  dataResumen: any = {}
  loading: boolean = false;
  constructor(private membresiasServices: MembresiasService){}
  ngOnInit() {
   
  }
  modificar(){}
  confirmar(){
    
  }
}
