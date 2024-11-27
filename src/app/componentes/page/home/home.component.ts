import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanesComponent } from "../shared/planes/planes.component";
import { CarruselComponent } from "../shared/carrusel/carrusel.component";
import { GymsComponent } from "../shared/gyms/gyms.component";
import { CarruselLeyendaComponent } from "../shared/carrusel-leyenda/carrusel-leyenda.component";
import { PostComponent } from "../shared/post/post.component";
import { FooterComponent } from "../../footer/footer.component";
import { PostService } from 'app/services/post.service';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    PlanesComponent, 
    CarruselComponent, 
    GymsComponent, 
    CarruselLeyendaComponent, 
    PostComponent, 
    FooterComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postService: PostService,
    private messageService: MessageService,
  ) {}
  
  ngOnInit() {
    this.obtenerUltimosPosts();
  }

  obtenerUltimosPosts(){
    this.postService.getUltimosPost().subscribe({
      next: (data) => {
      this.posts = data;
      console.log(this.posts);
      },
      error: (error) => {
        console.log(error)
        this.muestraError("Error al comunicarse con el servidor.");
      }
    });
  }

  muestraError(error){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
  }
  muestraMensaje(titulo, mensaje) {
    this.messageService.add({ severity: 'secondary', summary: titulo, detail: mensaje });
  }
}
