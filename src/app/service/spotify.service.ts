import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../interfaces/iresult';
import { Observable } from 'rxjs/Observable';
import { IArtist } from '../interfaces/iartist';
import { IAlbum } from '../interfaces/ialbum';
import { ITrack } from '../interfaces/itrack';

@Injectable()
export class SpotifyService {

// private searchUrl = 'https://api.deezer.com/user/2529';
private artistUrl: string;
private albumsUrl: string;
private albumUrl: string;
private tracksUrl: string;

  constructor(private http: HttpClient) {
  }

  searchMusic(str: string, type = 'artist'): Observable<IResult[]> {
    const searchUrl = `https://api.deezer.com/search?q=${str}&offset=0&limit=10&type=${type}`;
     return this.http.get(searchUrl).map((res: any) => <IResult[]>res.data);
    }

    getArtist(id: string): Observable<IArtist> {
      this.artistUrl = `https://api.deezer.com/artist/${id}`;
       return this.http.get(this.artistUrl).map(res => <IArtist> res);
      }

    getAlbums(artistId: string): Observable<IAlbum[]> {
      this.albumsUrl = `https://api.deezer.com/artist/${artistId}/albums`;
      return this.http.get(this.albumsUrl)
      .map((res: any) => <IAlbum[]> res.data);
      }

    getAlbum(albumId: string): Observable<IAlbum> {
      this.albumUrl = `https://api.deezer.com/album/${albumId}`;
      return this.http.get(this.albumUrl)
      .map((res: any) => <IAlbum> res);
      }

    getTracks(albumId: string): Observable<ITrack[]> {
      this.tracksUrl = `https://api.deezer.com/album/${albumId}/tracks`;
      return this.http.get(this.tracksUrl)
      .map((res: any) => <ITrack[]> res.data);
      }
  }
