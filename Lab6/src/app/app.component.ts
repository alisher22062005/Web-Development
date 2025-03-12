import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AlbumServiceService } from './album-service.service';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LAB6';

  constructor(public albums:AlbumServiceService){}
}
