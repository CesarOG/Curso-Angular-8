import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root"
})
export class DeseosService {
  listas: Lista[] = [];
  constructor() {
    this.loadLocalStorage();
  }
  addList(titulo: string) {
    const newList = new Lista(titulo);

    this.listas.push(newList);
    this.saveLocalStorage();
    return newList.id;
  }
  searchList(listId: string | number) {
    const id = Number(listId);
    return this.listas.find(lista => lista.id === id);
  }
  saveLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }
  loadLocalStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }
  removeList(lista: Lista) {
    this.listas = this.listas.filter(listData => listData.id !== lista.id);
    this.saveLocalStorage();
  } 
}
