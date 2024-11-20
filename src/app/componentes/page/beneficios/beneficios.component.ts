import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ContactoFormComponent } from '../shared/contacto-form/contacto-form.component';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [FooterComponent, ContactoFormComponent],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss'
})
export class BeneficiosComponent {

}
