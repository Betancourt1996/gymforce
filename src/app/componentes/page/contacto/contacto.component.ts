import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { ContactoFormComponent } from "../shared/contacto-form/contacto-form.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FooterComponent, ContactoFormComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
