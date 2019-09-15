import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { FileItem } from '../Models/file-item';
import undefined = require('firebase/empty-import');

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {

    const transferencia = this._getTransferencia(event);
    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);

    this._prevenirDetener(event);
    this.mouseSobre.emit(false);
  }

  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.datTransfer;
  }

  private _extraerArchivos(archivosLista: FileList) {
    // tslint:disable-next-line: forin
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemporal = archivosLista[propiedad];

      if (this._archivoPuedeSerCargado(archivoTemporal)) {
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
  }

  // Validaciones
  private _archivoPuedeSerCargado(archivo: File): boolean {
    if (!this._archivoExiste(archivo.name) && this._esImagen(archivo.type)) {
      return true;
    }
    return false;
  }

  private _prevenirDetener(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoExiste(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoImagen: string): boolean {
    return (tipoImagen === "" || tipoImagen === undefined) ? false : tipoImagen.startsWith("image");
  }
}
