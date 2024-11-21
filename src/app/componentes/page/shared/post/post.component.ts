import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from 'app/services/post.service';

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
