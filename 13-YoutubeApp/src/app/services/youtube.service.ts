import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = "AIzaSyB-6zUsGA358kYUnZ2PenDzttNRjF374xs";
  private urlYoutube = "https://www.googleapis.com/youtube/v3";
  private playList = "UUuaPTYj15JSkETGnEseaFFg";

  private nextPageToken = "";

  constructor(public http: Http) { }

  getVideos() {
    let url = `${this.urlYoutube}/playlistItems`;
    let params = new URLSearchParams();

    params.set("part", "snippet");
    params.set("maxResults", "10");
    params.set("playlistId", this.playList);
    params.set("key", this.apiKey);

    if (this.nextPageToken) {
      params.set("pageToken", this.nextPageToken);
    }

    return this.http.get(url, { search: params })
      .pipe(
        map(rsp => {
          console.log(rsp.json());
          this.nextPageToken = rsp.json().nextPageToken;

          let videos: any[] = [];
          for (let video of rsp.json().items) {
            let _video = video.snippet;
            videos.push(_video);
          }
          return videos;
        })
      );
  }
}
