import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  personas = new Array(500).fill(0);
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit() {
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

}
