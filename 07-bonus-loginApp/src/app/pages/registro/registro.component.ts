import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../Models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.router.navigateByUrl("/home");
    }
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.recordarme) {
      localStorage.setItem("email", this.usuario.email);
    }

    Swal.fire({
      allowOutsideClick: false,
      type: "info",
      text: "Espere por favor..."
    });
    Swal.showLoading();

    this.auth.create(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl("/home");
      },
      err => {
        console.log(err.error.error.message);
        Swal.fire({
          type: "error",
          text: err.error.error.message
        });
      }
    );
  }
}
