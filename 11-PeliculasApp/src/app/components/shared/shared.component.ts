import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styles: []
})
export class SharedComponent implements OnInit {

  @Input() Movies: any;
  @Input() titulo: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  peliculaDetalle(id: string) {
    console.log(id);
    this.router.navigateByUrl(`/pelicula/${id}/home`);
  }
}
