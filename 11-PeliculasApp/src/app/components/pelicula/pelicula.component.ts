import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  Pelicula: any = {};
  pagAnterior: string = "";
  search: string = "";

  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {
    this.router.params.subscribe(param => {
      this.pagAnterior = param["pag"];
      this.search = param["search"];

      this._ps.obtenerPelicula(param["id"]).subscribe(resp => {
        this.Pelicula = resp;
      });
    });
  }

  ngOnInit() {
  }

}
