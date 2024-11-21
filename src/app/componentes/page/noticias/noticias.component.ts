import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { PostComponent } from "../shared/post/post.component";
import { PostService } from 'app/services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FooterComponent, PostComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

  posts: any[] = [];

  constructor(private postService: PostService) {}
  
  ngOnInit() {
    this.obtenerTodosPosts();
  }
  
  obtenerTodosPosts(){
    this.postService.getTodosPost().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  }
  