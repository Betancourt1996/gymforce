import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  booContrasenaVisible: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      username: new FormControl('', {nonNullable: true, validators: Validators.required}),    
      password: new FormControl('', {nonNullable: true, validators: Validators.required}),
      remember: new FormControl(false, {nonNullable: true}),
    });
  }
  enviarForm(){
    console.log(this.formulario.getRawValue())
    //this.router.navigate(['/']);
  }
}
