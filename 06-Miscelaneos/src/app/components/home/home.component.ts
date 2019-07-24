import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'green'">Lorem ipsum dolor sit amet.</p>
    <app-ng-switch></app-ng-switch>
  `
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
