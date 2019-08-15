import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apikey: string = "cf83aaf6e913bb6dce79613a68d4fadf";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  Peliculas: any[] = [];
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
  getPopularesNinos() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&include_adult=true&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(
        map(res => {
          return res.json().results;
        })
      );
  }
  getEstrenos() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

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
          this.Peliculas = res.json().results;
          return res.json().results;
        })
      );
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
