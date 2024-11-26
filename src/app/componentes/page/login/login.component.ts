import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { LoadingComponent } from "../shared/loading/loading.component";
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink, 
    ReactiveFormsModule, 
    LoadingComponent, 
    CommonModule, 
    ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loading = false;
  formulario!: FormGroup;
  booContrasenaVisible: boolean = false;
  constructor(
    private router: Router, 
    private authService: AuthService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      username: new FormControl('', {nonNullable: true, validators: Validators.required}),    
      password: new FormControl('', {nonNullable: true, validators: Validators.required}),
      remember: new FormControl(false, {nonNullable: true}),
    });
  }

  enviarForm(){    
    const dataFormulario = this.formulario.getRawValue();
    const { username, password } = dataFormulario;
    const loginData = { username, password };  
    this.loading = true;
    this.authService.postLogin(loginData).subscribe({
      next: (res) => {
        console.log(res)
        const userJson = JSON.stringify(res["user"]);
        localStorage.setItem("token", res["token"])
        localStorage.setItem("user", userJson)
        this.router.navigate(['/']);
        this.loading = false;        
      },
      error: (error) => {
        console.log(error)
        this.loading = false;
        this.muestraError("Error al iniciar sesión, verifique su usuario y contraseña");
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

