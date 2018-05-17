import { Observable } from 'rxjs/Observable';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import {ActivatedRoute} from '@angular/router';
import { IArtist } from '../../interfaces/iartist';
import { IResult } from '../../interfaces/iresult';
import { IAlbum } from '../../interfaces/ialbum';
import 'rxjs/add/observable/forkJoin';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: IArtist;
  result: IResult;
  albums: IAlbum[] = [];
  album: IAlbum;
  loader: boolean;

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.loader = true;

        Observable.forkJoin([this._spotifyService.getArtist(id), this._spotifyService.getAlbums(id)])
        .subscribe(results => {
          this.artist = results[0];
          this.albums = results[1];
          this.loader = false;
        }, error => {
          console.log(error);
          this.loader = false;
        });
  });
}

}
