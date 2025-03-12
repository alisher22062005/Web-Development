import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService,Album } from '../album-service.service';
// import { AlbumPhotoComponent } from '../album-photo/album-photo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album?: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService:  AlbumServiceService 
  ) {}

  // photo="Photo"

  ngOnInit(): void {
    // Get the album id from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch the album data based on the id
    this.albumsService.getAlbumById(id).subscribe((data) => {
      this.album = data;
    });
  }

  // Optional: Navigate back to the album list
  goBack(): void {
    this.router.navigate(['/Albums']);
  }

  getAlbum():Album | undefined{
    return this.album;
  }
}

