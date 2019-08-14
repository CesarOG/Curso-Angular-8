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
  constructor(private router: ActivatedRoute, private _ps: PeliculasService) {
    const id = this.router.snapshot.paramMap.get("id");
    this._ps.obtenerPelicula(id).subscribe(resp => {
      this.Pelicula = resp;
      console.log(this.Pelicula);
    });
  }

  ngOnInit() {
  }

}
