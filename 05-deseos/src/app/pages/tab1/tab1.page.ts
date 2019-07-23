import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";


@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(
    public desosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregarPage() {
    const alert = await this.alertController.create({
      header: "Nueva Lista",
      inputs: [
        { name: "titulo", type: "text", placeholder: "Nombre de la lista" }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "danger",
          handler: () => {
            console.log("Cancelar");
          }
        },
        {
          text: "Guardar",
          cssClass: "success",
          handler: data => {
            const listaId = this.desosService.addList(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    alert.present();
  }


 
}
