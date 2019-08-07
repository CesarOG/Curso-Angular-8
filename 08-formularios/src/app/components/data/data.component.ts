import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { Observable } from 'rxjs';
@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent implements OnInit {
  forma: FormGroup;
  usuario: Object = {
    nombreCompleto: {
      nombre: "César",
      apellido: "Ortega"
    },
    correo: "ortegapb@gmail.com",
    pasaTiempos: ["Comer", "Trabajar", "Estudiar", "Dormir"]
  };

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", Validators.required)
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      userName: new FormControl("", Validators.required, this.existeUsuario),
      password1: new FormControl("", Validators.required),
      password2: new FormControl(),
      pasaTiempos: new FormArray([new FormControl("", Validators.required)])
    });

    // this.forma.setValue(this.usuario);
    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
    //Sirve para identificar el cambio de valor
    this.forma.controls["userName"].valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  ngOnInit() { }

  agregarPasatiempo() {
    (this.forma.controls["pasaTiempos"] as FormArray).push(
      new FormControl("", Validators.required)
    );
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;
    if (control.value !== forma.controls["password1"].value) {
      return {
        noIgual: true
      };
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "MCORTEGA") {
          return resolve({
            existe: true
          })
        } else {
          resolve(null)
        }
      }, 3000);
    })

    return promesa;
  }

  guardarProceso() {
    console.log(this.forma.value);

    this.forma.reset();
  }
}
