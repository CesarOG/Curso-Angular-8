import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activo: boolean = true): string {
    if (!activo) {
      let salida = "";
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) { salida += "*"; }

      return salida;
    }
    return value;
  }
}
