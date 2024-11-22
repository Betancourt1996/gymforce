import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
@Input() ocultarRedes = false;

onUpClick(event: Event): void {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
