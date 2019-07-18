import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAql-FQLvo_Ys1bZ5r6i_FfLZjYzGuG7ZEsskIR_Sz63eltVAwOcQSSZICA-51HEI97l-vgK3Pt6h8znFM"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases?limit=20`).pipe(
      map(data => data["albums"].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
