import { Component } from "@angular/core";
import { promise } from "protractor";
import { resolve } from "path";
import { reject } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre = "César";

  nombre2 = "césar mArcelo OrteGa goDOy";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llego la Data!!!"), 3500);
  });

  fecha = new Date();

  video = "Gyru1jizy0M";

  activo: boolean = false;
}
