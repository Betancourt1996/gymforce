import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [],
  templateUrl: './contacto-form.component.html',
  styleUrl: './contacto-form.component.scss'
})
export class ContactoFormComponent implements OnInit {
  nameFile = '';
  file: any;
  constructor() { }
  ngOnInit(): void {    
  }
  addfile(event: any){  
    this.file= event.target.files[0];  
    this.nameFile = this.file.name;
  }

abrirFileExplorer() {
    let inputTipoFile = document.getElementById('inputfile');
    if (inputTipoFile){
      inputTipoFile.click();
    }
  };

  enviarForm(){
    console.log("enviar")
  }
}
