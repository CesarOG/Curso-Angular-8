import { ListaItem } from "./../../models/lista-item.model";
import { Component, OnInit } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { ActivatedRoute } from "@angular/router";
import { Lista } from "../../models/lista.model";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"]
})
export class AgregarPage {
  lista: Lista;
  itemDesc: string;

  constructor(
    private deseosService: DeseosService,
    private route: ActivatedRoute
  ) {
    const listId = this.route.snapshot.paramMap.get("listaId");
    this.obtenerLista(listId);
  }

  obtenerLista(listId: string | number) {
    this.lista = this.deseosService.searchList(listId);
  }
  agregarItem() {
    if (this.itemDesc.length === 0) {
      return false;
    }
    const newItem = new ListaItem(this.itemDesc);
    this.lista.items.push(newItem);
    this.deseosService.saveLocalStorage();
    this.itemDesc = "";
  }

  checkChange(item: ListaItem) {
    const pendientes = this.lista.items.filter(item => !item.completado).length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.saveLocalStorage();
  }
  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.deseosService.saveLocalStorage();
  }
}
