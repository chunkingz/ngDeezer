import { Artist } from './../../../Artist';
import { SpotifyService } from './../../service/spotify.service';
import { Component } from '@angular/core';
import { IResult } from '../../interfaces/iresult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})

export class SearchComponent {
   searchStr: string;
   searchRes: IResult[];

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
  .subscribe(results => {
    this.searchRes = results;
});
}
}
