import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService,Album,Photo} from '../album-service.service';
// import { AlbumPhotoComponent } from '../album-p
// ihoto/album-photo.component';


@Component({
  selector: 'app-album-photo',
  imports: [CommonModule],
  templateUrl: './album-photo.component.html',
  styleUrl: './album-photo.component.css'
})
export class AlbumPhotoComponent {
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumsService:  AlbumServiceService 
    ) {}

photoUrl?:Album

photos: Photo[] = [];



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(id).subscribe((data) => {
      this.photos = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/Home']);
  }

 

  // getAlbumFromDetail():void{
  //    this.photo=getAlbum();
  // }
}
