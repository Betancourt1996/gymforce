import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../../../../footer/footer.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from 'app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterModule],
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.scss',
  
})
export class PostDetalleComponent {

  postId: number | null = null; 
  post: any = {};
  safeHtml: any;
  ultimosPosts: any[] = [];

  constructor(private route: ActivatedRoute, 
    private postService: PostService, 
    private sanitizer: DomSanitizer, 
    private router: Router) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'));
      this.obtenerPostPorId();
      this.obtenerUltimosPosts();
    });    
  }
  
  obtenerPostPorId(){
    if(!this.postId) return;
    this.postService.getPostPorId(this.postId).subscribe(data => {
      this.post = data;
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(data.texto);
      console.log(this.post);
    });
  }

  obtenerUltimosPosts(){
    this.postService.getUltimosPost().subscribe(data => {
      this.ultimosPosts = data;
      console.log(this.ultimosPosts);
    });
  }
    
  }