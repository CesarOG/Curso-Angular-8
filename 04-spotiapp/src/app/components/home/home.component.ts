import { SpotifyService } from "./../../services/spotify.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items)
      this.nuevasCanciones = data.albums.items;
    });
  }
}
