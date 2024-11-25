import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Add this line
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formulario!: FormGroup;
  labelFechaNacimiento = "Fecha De Nacimiento";
  booContrasenaVisible_1: boolean = false;
  booContrasenaVisible_2: boolean = false;
  @ViewChild('inptFecha') inptFecha!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombres: new FormControl('', {nonNullable: true, validators: Validators.required}),
      apellidos: new FormControl('', {nonNullable: true, validators: Validators.required}),
      cedula: new FormControl('', {nonNullable: true, validators: Validators.required}),
      telefono: new FormControl('', {nonNullable: true, validators: Validators.required}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      fecha_nacimiento: new FormControl('', {nonNullable: true, validators: Validators.required}),
      tipo: new FormControl('', {nonNullable: true, validators: Validators.required}),
      direccion: new FormControl('', {nonNullable: true, validators: Validators.required}),
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
  enviarForm() {
    console.log(this.formulario.getRawValue());
    //this.router.navigate(['/']);
  }
}
