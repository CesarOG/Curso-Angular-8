import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../Models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileItem[] = [];

  constructor(public _cargarImagenes: CargaImagenesService) { }

  ngOnInit() {
  }
  cargarImagenes() {
    this._cargarImagenes.cargarImagenesFirebase(this.archivos);
  }
  limpiarArchivos() {
    this.archivos = [];
  }
}
