import { Component } from '@angular/core';
import { AlbumServiceService,Album } from '../album-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';
@Component({
  selector: 'app-albums',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent {
  albums: Album[] = [];

  constructor(private albumsService: AlbumServiceService,
     private router: Router) {}

  ngOnInit(): void {
    // Fetch the list of albums on load
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    // Call the service to delete the album
    this.albumsService.deleteAlbum(id).subscribe(() => {
      // Update the local array to remove the deleted album
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
