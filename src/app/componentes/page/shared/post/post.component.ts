import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() pathImg = '';
@Input() fecha = '';
@Input() tituloPost = '';
@Input() postId: number | null= null;

}
