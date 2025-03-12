import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;

}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

    // 1) READ: Get all albums
    getAlbums(): Observable<Album[]> {
      return this.http.get<Album[]>(this.baseUrl);
    }
  
    // 2) READ: Get one album by ID
    // getAlbum(id: number): Observable<Album> {
    //   return this.http.get<Album>(`${this.baseUrl}/${id}`);
    // }
  
    // 3) CREATE: Add a new album
    // createAlbum(album: Album): Observable<Album> {
    //   return this.http.post<Album>(this.baseUrl, album);
    // }
  
    // 4) UPDATE: Edit an existing album
    // updateAlbum(album: Album): Observable<Album> {
    //   return this.http.put<Album>(`${this.baseUrl}/${album.id}`, album);
    // }
  
    // 5) DELETE: Remove an album
    deleteAlbum(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
    getAlbumById(id: number): Observable<Album> {
      return this.http.get<Album>(`${this.baseUrl}/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
      return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    }
    

    // protected albumlist:Album[]=[
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "some rando  name",
    //     "photo":"Photo1"
       
    //   },
    //   {
    //     "userId": 1,
    //     "id": 2,
    //     "title": "sunt qui excepturi placeat culpa",
    //     "photo":"Photo2"

    //   },
    //   {
    //     "userId": 1,
    //     "id": 3,
    //     "title": "omnis laborum odio",
    //     "photo":"Photo3"

    //   },
    //   {
    //     "userId": 2,
    //     "id": 4,
    //     "title": "non esse culpa molestiae omnis sed optio",
    //     "photo":"Photo4"

    //   },
    //   {
    //     "userId": 2,
    //     "id": 5,
    //     "title": "eaque aut omnis a",
    //     "photo":"Photo5"

    //   },
    //   {
    //     "userId": 2,
    //     "id": 6,
    //     "title": "natus impedit quibusdam illo est",
    //     "photo":"Photo6"

    //   },
    //   {
    //     "userId": 3,
    //     "id": 7,
    //     "title": "quibusdam autem aliquid et et quia",
    //     "photo":"Photo7"

    //   },
    //   {
    //     "userId": 3,
    //     "id": 8,
    //     "title": "qui fuga est a eum",
    //     "photo":"Photo8"

    //   },
    //   {
    //     "userId": 3,
    //     "id": 9,
    //     "title": "saepe unde necessitatibus rem",
    //     "photo":"Photo9"

    //   }]
}
