import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(pelicula: any): any {
    let url = "https://image.tmdb.org/t/p/w500";

    if (pelicula.backdrop_path) {
      url += pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      url += pelicula.poster_path;
    } else {
      url = "./assets/img/no-imagen.jpg";
    }
    return url;
    // return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
