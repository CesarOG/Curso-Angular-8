import { SpotifyService } from "./../../services/spotify.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
        this.error = false;
      },
      errorService => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorService["error"].error["message"];
      }
    );
  }
}
