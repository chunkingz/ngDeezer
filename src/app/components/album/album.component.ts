import { ITrack } from './../../interfaces/itrack';
import { IArtist } from '../../interfaces/iartist';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../service/spotify.service';
import {ActivatedRoute} from '@angular/router';
import { IAlbum } from '../../interfaces/ialbum';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {

  id: string;
  album: IAlbum;
  artist: IArtist;
  tracks: ITrack[] = [];
  loader: boolean;
  objectkeys = Object.keys;

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

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

            this._spotifyService.getTracks(id)
            .subscribe(tracks => {
              this.tracks = tracks;
              this.loader = false;
            });

        this._spotifyService.getAlbum(id)
            .subscribe(album => {
              this.album = album;
              this.loader = false;
            }, error => {
              this.loader = false;
              console.error(error);
            });
          });
  }

}
