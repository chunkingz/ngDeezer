import { SpotifyService } from './../../service/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  // searchStr: string;

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic()
  .subscribe(res => {
    console.log(res);
});
}
}
