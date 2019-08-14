import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(img: string): any {
    let url = "https://image.tmdb.org/t/p/w500";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + img);
  }

}
