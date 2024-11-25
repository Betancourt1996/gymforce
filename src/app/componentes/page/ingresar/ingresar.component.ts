import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.scss'
})
export class IngresarComponent {
  constructor(private router: Router) { }
  
  enviarForm(){
    console.log("enviar")
    this.router.navigate(['/']);
  }
}
