import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  constructor(private router: Router) { }

  enviarForm(){
    console.log("enviar")
    this.router.navigate(['/']);
  }
}
