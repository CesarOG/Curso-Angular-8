import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  Peliculas: any[] = [];

  constructor(public _ps: PeliculasService) {

    this._ps.getPopulares().subscribe((resp: any[]) => {
      this.Peliculas = resp;
      console.log(this.Peliculas);
    });

  }

}
