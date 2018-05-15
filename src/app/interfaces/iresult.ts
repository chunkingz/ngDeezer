import { IArtist } from './iartist';
import { IAlbum } from './ialbum';

export interface IResult {
  album: IAlbum;
  artist: IArtist;
  duration: number;
  id: number;
  title: string;
}
