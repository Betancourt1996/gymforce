import { Component, OnInit } from '@angular/core';
import { MembresiasService } from 'app/services/membresias.service';
import { LoadingComponent } from "../../shared/loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-membresia',
  standalone: true,
  imports: [LoadingComponent, CommonModule],
  templateUrl: './resumen-membresia.component.html',
  styleUrl: './resumen-membresia.component.scss'
})
export class ResumenMembresiaComponent implements OnInit{
  dataResumen: any = {}
  loading: boolean = false;
  constructor(private membresiasServices: MembresiasService){}
  ngOnInit() {
    this.loading = true;
    this.membresiasServices.getResumen(1).subscribe({
      next: (data)=>{
        console.log(data)
        this.dataResumen = data;
        this.loading = false;
      },
      error: (err)=>{
        console.log(err)
        this.loading = false;
      },
    })
  }
  continuar(){
    this.membresiasServices.setConfirmarResumen(new Boolean(true));
  }
}
