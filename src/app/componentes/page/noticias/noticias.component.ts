import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { PostComponent } from "../shared/post/post.component";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FooterComponent, PostComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

}
