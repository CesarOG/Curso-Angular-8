import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params: any) => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }
  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((data: any) => {
      this.artist = data;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data: any) => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
