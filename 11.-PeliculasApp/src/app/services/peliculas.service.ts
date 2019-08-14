import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apikey: string = "cf83aaf6e913bb6dce79613a68d4fadf";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) { }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(
        map(res => {
          return res.json().results;
        })
      );
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(
        map(res => {
          return res.json();
        })
      )
  }

  obtenerPelicula(id: string) {
    let url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(
        map(res => {
          return res.json();
        })
      );
  }
}
