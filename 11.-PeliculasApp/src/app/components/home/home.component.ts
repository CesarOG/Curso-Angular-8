import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  PeliculasPopulares: any;
  PeliculasPopularesNinos: any;
  PeliculasEstreno: any;

  constructor(public _ps: PeliculasService) {

    this._ps.getPopulares().subscribe((resp: any[]) => this.PeliculasPopulares = resp);

    this._ps.getPopularesNinos().subscribe((resp: any[]) => this.PeliculasPopularesNinos = resp);

    this._ps.getEstrenos().subscribe((resp: any[]) => this.PeliculasEstreno = resp);

  }

}
