import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import {ActivatedRoute} from '@angular/router';
import { IArtist } from '../../interfaces/iartist';
import { IResult } from '../../interfaces/iresult';
import { IAlbum } from '../../interfaces/ialbum';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: IArtist;
  result: IResult;
  albums: IAlbum;
  loader: boolean;

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.loader = true;

        this._spotifyService.getArtist(id)
            .subscribe(artist => {
              this.artist = artist;
              this.loader = false;
            });
        this._spotifyService.getAlbum(id)
            .subscribe(albums => {
              this.albums = albums;
              this.loader = false;
            }, error => {
              this.loader = false;
              console.error(error);
            });
          });
  }

}
