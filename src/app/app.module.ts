import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SpotifyService } from './service/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    NotfoundComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: '', component: SearchComponent},
      {path: 'artist/:id', component: ArtistComponent},
      {path: 'album/:id', component: AlbumComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
