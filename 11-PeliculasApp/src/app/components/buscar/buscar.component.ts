import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  buscar: string = "";

  constructor(public _ps: PeliculasService, private router: Router, private actiRoute: ActivatedRoute) {

    this.actiRoute.params.subscribe(parametros => {
      console.log(parametros);
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })

  }
  buscarPelicula() {
    this._ps.buscarPelicula(this.buscar).subscribe();
  }
  peliculaDetalle(id: string) {
    this.router.navigateByUrl(`/pelicula/${id}/buscar/${this.buscar}`);
  }

}
