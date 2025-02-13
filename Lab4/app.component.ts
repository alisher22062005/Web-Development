import { Component } from '@angular/core';
import { Pictures } from './pictures';
import { CommonModule } from '@angular/common';
import { ShowPicturesComponent } from './show-pictures/show-pictures.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
  <h1>Explore the Latest Smartphones & Devices</h1>
  <p>Find the best deals on top brands, including iPhone, Samsung, Xiaomi, and more.</p>
</div>

  <div class='block-location'>
  <app-show-pictures  *ngFor=' let picture of picturesList' [picture]='picture'>  </app-show-pictures>

  </div>

  `,

  styleUrls: ['./app.component.css'], // Fixed styleUrls (plural)
  standalone: true, // Required for using "imports"
  imports:[CommonModule,ShowPicturesComponent],
})
// <app-home  *ngFor="let picture of picturesList" [picture]="picture"></app-home>
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  picturesList:Pictures[]=[
    {
      id: 0,
      name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      city: 'Chicago',
      state: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Apple iPhone 13 128Gb черный',
      city: '234$',
      state: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
      availableUnits: 0,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'Nokia 110 DS 2019 черный',
      city: 'Juneau',
      state: 'https://kaspi.kz/shop/p/nokia-110-ds-2019-chernyi-8801106/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h58/hf8/63839292096542.jpg?format=preview-large',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'Nokia 105 DS 2017 синий',
      city: 'Nokia 105 DS 2017 синий',
      state: 'https://kaspi.kz/shop/p/nokia-105-ds-2017-sinii-8800491/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/hb6/63759667331102.jpg?format=preview-large',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      city: 'Gary',
      state: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=preview-large',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Apple iPhone 13 128Gb синий',
      city: 'Oakland',
      state: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=preview-large',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
      city: 'Oakland',
      state: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
      city: 'Oakland',
      state: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Realme Note 50 3 ГБ/64 ГБ черный',
      city: 'Oakland',
      state: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },

    {
      id: 9,
      name: 'Samsung Galaxy A06 6 ГБ/128 ГБ черный',
      city: 'Oakland',
      state: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h00/87088029925406.jpg?format=preview-large',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },

  

   
   
  ];
  
}
