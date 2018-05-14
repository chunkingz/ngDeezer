import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

// private searchUrl = 'https://api.deezer.com/user/2529';
private searchUrl: string;
  constructor(private http: Http) {
  }

  searchMusic(str: string, type = 'artist') {
    this.searchUrl = 'https://api.deezer.com/search?q=' + str + '&offset=0&limit=20&type=' + type;
     return this.http.get(this.searchUrl).map(res => res.json());
    // return this.http.get(this.searchUrl);
    }
  }
