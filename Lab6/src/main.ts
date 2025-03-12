import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { provideHttpClient } from '@angular/common/http';
import { AlbumsComponent } from './app/albums/albums.component';
import { AlbumDetailComponent } from './app/album-detail/album-detail.component';
import { AlbumPhotoComponent } from './app/album-photo/album-photo.component';

// export interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      
      {path: 'Home', component: HomeComponent },
      {path: 'About', component: AboutComponent },
      {path:'Albums',component:AlbumsComponent},
      { path: 'albums/:id', component: AlbumDetailComponent },
      {path: 'albums/:id/photo',component:AlbumPhotoComponent}

     
      


    ]),
    provideHttpClient()
  ]
});