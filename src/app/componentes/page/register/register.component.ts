import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-register',
  providers: [MessageService],
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    LoadingComponent, 
    CommonModule, 
    ToastModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading = false;
  formulario!: FormGroup;
  labelFechaNacimiento = "Fecha De Nacimiento";
  booContrasenaVisible_1: boolean = false;
  booContrasenaVisible_2: boolean = false;
  @ViewChild('inptFecha') inptFecha!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombres: new FormControl('', {nonNullable: true, validators: Validators.required}),
      apellidos: new FormControl('', {nonNullable: true, validators: Validators.required}),
      cedula: new FormControl('', {nonNullable: true, validators: Validators.required}),
      telefono: new FormControl('', {nonNullable: true, validators: Validators.required}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      fecha_nacimiento: new FormControl('', {nonNullable: true, validators: Validators.required}),
      sexo: new FormControl('', {nonNullable: true, validators: Validators.required}),
      password_1: new FormControl('', {nonNullable: true, validators: Validators.required}),
      password_2: new FormControl('', {nonNullable: true, validators: Validators.required}),
    });
  }
  
  triggerInput() {
    this.inptFecha.nativeElement.showPicker();
  }

  cambiarVisibilidad_1(){
    this.booContrasenaVisible_1 = !this.booContrasenaVisible_1;
  }

  cambiarVisibilidad_2(){
    this.booContrasenaVisible_2 = !this.booContrasenaVisible_2;
  }
  enviarForm(){    
    const dataFormulario = this.formulario.getRawValue();
    const { nombres, apellidos, cedula, telefono, email, fecha_nacimiento, sexo, password_1, password_2 } = dataFormulario;

    const data = { 
      password: password_1,
      password2: password_2,
      imagen: "",
      email: email,
      created_from: 'WEB',
      detalles: {
        codigo: 1,
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        sexo: sexo,
        fecha_nacimiento: fecha_nacimiento
      }
    };  
    this.loading = true;
    this.authService.postRegister(data).subscribe({
      next: (res) => {
        console.log(res)
        this.loading = false;        
      },
      error: (error) => {
        console.log(error)
        this.loading = false;
        this.muestraError("Error al registrarse, verifique los datos");
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
