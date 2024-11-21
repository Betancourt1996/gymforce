import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../../../../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.scss',
  
})
export class PostDetalleComponent {

  postId: number | null = null; 
  post: any = {};
  safeHtml: any;
  
  constructor(private route: ActivatedRoute, private postService: PostService, private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'));
    });    
    this.obtenerPostPorId();
  }
  
  obtenerPostPorId(){
    if(!this.postId) return;
    this.postService.getPostPorId(this.postId).subscribe(data => {
      this.post = data;
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(data.texto);
      console.log(this.post);
    });
  }
  }