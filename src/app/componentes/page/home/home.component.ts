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
    
  ) {}
  
  ngOnInit() {
    this.obtenerUltimosPosts();
  }

  obtenerUltimosPosts(){
    this.postService.getUltimosPost().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
