import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../../../../footer/footer.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from 'app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

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
    private router: Router,
    private messageService: MessageService,
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'));
      this.obtenerPostPorId();
      this.obtenerUltimosPosts();
    });    
  }
  
  obtenerPostPorId(){
    if(!this.postId) return;
    this.postService.getPostPorId(this.postId).subscribe({
      next: (res) => {
      this.post = res;
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(res.texto);
      console.log(this.post);
      },
      error: (error) => {
        console.log(error)
        this.muestraError("Error al comunicarse con el servidor.");
      }
    });
  }

  obtenerUltimosPosts(){
    this.postService.getUltimosPost().subscribe({
      next: (data) => {
      this.ultimosPosts = data;
      console.log(this.ultimosPosts);
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