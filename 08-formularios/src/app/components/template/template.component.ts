import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: []
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais:"",
    sexo:"Hombre",
    acepta:false
  };
  paises:object=[{codigo:"PE",nombre:"Perú"},{codigo:"BR",nombre:"Brasil"}];
  sexos:string[]=["Hombre","Mujer"]
  constructor() {}

  guardar(forma: NgForm) {
    console.log(forma);
    console.log(this.usuario);
  }
}
