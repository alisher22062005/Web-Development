import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {ProductComponent} from  './Components/Products/product/product.component'; 
import { ProductData } from './product-data'; 
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './Button/button/button.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ProductComponent,CommonModule],
  template:`
  <div class="headline"> 
    <img class="kaspi-location" src="assets/kaspi.svg">
    <span class="menu"> </span>
  </div>

  <div class="card-list p-3 mb-2 bg-light text-dark">

  <app-product *ngFor="let productdata of ProductDataList" [productdata]="productdata">
  </app-product>

  </div>`,

  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ProductDataList:ProductData[]=[

    {
      name: 'Apple Iphone 13',
      desription: 'Apple Iphone 13 128GB черный',
      rating: 'assets/Снимок экрана 2025-02-24 123252.png',

      photo: 'assets/Images/phone.1.jpeg',
      url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"

     
    },
    {
      name: 'Apple iphone 16 ',
      desription: 'Apple iphone 16 Pro Max 256Gb черный',
      rating: '4.0',
      photo: 'assets/Images/phone2.jpeg',
      url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"

      
    },
    // {
    //   name: 'Product 3',
    //   desription: 'Description for Product 3',
    //   rating: '3.8',
    //   photo: 'assets/Images/phone3.jpeg',
    //   availableUnits: 15,
    //   wifi: true,
    //   laundry: true,
    // },
    {
      name: 'Apple iphone 16',
      desription: 'Apple iphone 16 Pro Max 255Gb серебристый',
      rating: '4.2',
      photo: 'assets/Images/phone4.jpeg',
      url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

      
    },
    {
      name: 'Apple iphone 13',
      desription: 'Apple iphone 13 128Gb белый',
      rating: '3.9',
      photo: 'assets/Images/phone5.jpg',
      url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000"

      
    },
    {
      name: 'Apple iphone 16',
      desription: 'Apple iphone 16 Pro 256Gb серебристый',
      rating: '4.8',
      photo: 'assets/Images/phone6.jpeg',
      url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

    
    },
    {
      name: 'Apple iPhone 13',
      desription: 'Apple iPhone 13 128Gb зеленый',
      rating: '4.1',
      photo: 'assets/Images/phone7.jpg',
      url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"

     
    },
    {
      name: 'Samsung Galaxy A55',
      desription: 'Samsung Galaxy A55 5G 8ГБ/126ГБ темно-синий',
      rating: '3.7',
      photo: 'assets/Images/phone8.jpeg',
      url:"https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000"

    
    },
    {
      name: 'Samsung Galaxy A06',
      desription: 'Samsung Galaxy A06 6ГБ/128ГБ черный',
      rating: '4.3',
      photo: 'assets/Images/phone9.jpg',
      url:"https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000"

     
    },
    {
      name: 'Realme Note 50',
      desription: 'Realme Note 50 3 ГБ/64 ГБ черный',
      rating: '4.6',
      photo: 'assets/Images/phone10.jpg',
      url:"https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000"

    }
  ];
}


// <div class="card-list">

//   <app-product *ngFor="let productdata of ProductDataList" [productdata]="productdata">
//   </app-product>

//   </div>`,