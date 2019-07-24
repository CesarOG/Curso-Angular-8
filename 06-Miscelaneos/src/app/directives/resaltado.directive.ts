import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appResaltado]"
})
export class ResaltadoDirective {
  @Input("appResaltado") newColor: string;
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") mouseEntro() {
    this.cambiarColor(this.newColor || "stealblue");
  }
  @HostListener("mouseleave") mouseSalio() {
    this.cambiarColor(null);
  }
  cambiarColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
