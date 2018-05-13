import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

private searchUrl = 'https://api.deezer.com/user/2529';

  constructor(private http: Http) {
  }

  searchMusic() {

     return this.http.get(this.searchUrl).map(res => res.json());
    // return this.http.get(this.searchUrl);
    }
  }
