import { Component, Input, ViewChild } from "@angular/core";
import { Lista } from "../../models/lista.model";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent {
  @Input() completado: boolean;
  @ViewChild(IonList) lista: IonList;
  constructor(
    public desosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}
  listaSeleccionada(lista: Lista) {
    if (this.completado) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista) {
    this.desosService.removeList(lista);
  }
  async editarLista(lista: Lista) {
    const alert = await this.alertController.create({
      header: "Editar Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
            this.lista.closeSlidingItems();
          }
        },
        {
          text: "Guardar",
          handler: data => {
            lista.titulo = data.titulo;
            this.desosService.saveLocalStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }
}
