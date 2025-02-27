import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {ProductComponent} from  './Components/Products/product/product.component'; 
import { ProductData } from './product-data'; 
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './Button/button/button.component';
import { RouterOutlet } from '@angular/router';
import { LaptopsComponent } from './Laptops/laptop/laptop.component';
import { HeadphoneComponent } from './HeadPhones/headphone/headphone.component';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-root',
   standalone:true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  template:`
  <div class="headline"> 
    <img class="kaspi-location" src="assets/kaspi.svg">
    <span class="menu"> </span>
  </div>
 
<div class="items">
  <a routerLink="/Laptops"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg></a>

  <a routerLink="/Phones"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg></a>

   <a routerLink="/HeadPhones"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
</svg></a>

   <a routerLink="/Books"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg></a>

  </div>

  <div>
  <router-outlet></router-outlet>
  </div>

 ` ,
//  <div>
//  <router-outlet></router-outlet>
//  </div>
  
  styleUrls: ['./app.component.css']
  // <app-product *ngFor="let productdata of ProductDataList" [productdata]="productdata">
  // </app-product>

//   <span>
//   <select class="form-select" aria-label="Default select example">
//   <option selected>Choose the type of Product</option>
//   <option value="1"><a routerLink='/Laptops'>Laptops</a>
//   </option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
//   </select>
// </span>

// <div class="headline"> 
// <img class="kaspi-location" src="assets/kaspi.svg">
// <span class="menu"> </span>
// </div>

// <nav>
// <a routerLink="/Phones">Phone </a>
// <a routerLink="/Laptops">Laptops</a>
// </nav>

// <div>
// <router-outlet/>
// </div>

// <div class="card-list p-3 mb-2 bg-light text-dark">

// <app-product *ngFor="let productdata of ProductDataList" [productdata]="productdata">
// </app-product>

// </div>`,
})
export class AppComponent {
  // ProductDataList:ProductData[]=[

  //   {
  //     name: 'Apple Iphone 13',
  //     desription: 'Apple Iphone 13 128GB черный',
  //     rating: 'assets/Снимок экрана 2025-02-24 123252.png',

  //     photo: 'assets/Images/phone.1.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"

     
  //   },
  //   {
  //     name: 'Apple iphone 16 ',
  //     desription: 'Apple iphone 16 Pro Max 256Gb черный',
  //     rating: '4.0',
  //     photo: 'assets/Images/phone2.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"

      
  //   },
  //   // {
  //   //   name: 'Product 3',
  //   //   desription: 'Description for Product 3',
  //   //   rating: '3.8',
  //   //   photo: 'assets/Images/phone3.jpeg',
  //   //   availableUnits: 15,
  //   //   wifi: true,
  //   //   laundry: true,
  //   // },
  //   {
  //     name: 'Apple iphone 16',
  //     desription: 'Apple iphone 16 Pro Max 255Gb серебристый',
  //     rating: '4.2',
  //     photo: 'assets/Images/phone4.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

      
  //   },
  //   {
  //     name: 'Apple iphone 13',
  //     desription: 'Apple iphone 13 128Gb белый',
  //     rating: '3.9',
  //     photo: 'assets/Images/phone5.jpg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000"

      
  //   },
  //   {
  //     name: 'Apple iphone 16',
  //     desription: 'Apple iphone 16 Pro 256Gb серебристый',
  //     rating: '4.8',
  //     photo: 'assets/Images/phone6.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

    
  //   },
  //   {
  //     name: 'Apple iPhone 13',
  //     desription: 'Apple iPhone 13 128Gb зеленый',
  //     rating: '4.1',
  //     photo: 'assets/Images/phone7.jpg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"

     
  //   },
  //   {
  //     name: 'Samsung Galaxy A55',
  //     desription: 'Samsung Galaxy A55 5G 8ГБ/126ГБ темно-синий',
  //     rating: '3.7',
  //     photo: 'assets/Images/phone8.jpeg',
  //     url:"https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000"

    
  //   },
  //   {
  //     name: 'Samsung Galaxy A06',
  //     desription: 'Samsung Galaxy A06 6ГБ/128ГБ черный',
  //     rating: '4.3',
  //     photo: 'assets/Images/phone9.jpg',
  //     url:"https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000"

     
  //   },
  //   {
  //     name: 'Realme Note 50',
  //     desription: 'Realme Note 50 3 ГБ/64 ГБ черный',
  //     rating: '4.6',
  //     photo: 'assets/Images/phone10.jpg',
  //     url:"https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000"

  //   }
  // ];


  // LaptopDataList:ProductData[]=[

  //   {
  //     name: 'Apple Iphone 13',
  //     desription: 'Apple Iphone 13 128GB черный',
  //     rating: 'assets/Снимок экрана 2025-02-24 123252.png',

  //     photo: 'assets/Images/phone.1.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"

     
  //   },
  //   {
  //     name: 'Apple iphone 16 ',
  //     desription: 'Apple iphone 16 Pro Max 256Gb черный',
  //     rating: '4.0',
  //     photo: 'assets/Images/phone2.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"

      
  //   },
  //   // {
  //   //   name: 'Product 3',
  //   //   desription: 'Description for Product 3',
  //   //   rating: '3.8',
  //   //   photo: 'assets/Images/phone3.jpeg',
  //   //   availableUnits: 15,
  //   //   wifi: true,
  //   //   laundry: true,
  //   // },
  //   {
  //     name: 'Apple iphone 16',
  //     desription: 'Apple iphone 16 Pro Max 255Gb серебристый',
  //     rating: '4.2',
  //     photo: 'assets/Images/phone4.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

      
  //   },
  //   {
  //     name: 'Apple iphone 13',
  //     desription: 'Apple iphone 13 128Gb белый',
  //     rating: '3.9',
  //     photo: 'assets/Images/phone5.jpg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000"

      
  //   },
  //   {
  //     name: 'Apple iphone 16',
  //     desription: 'Apple iphone 16 Pro 256Gb серебристый',
  //     rating: '4.8',
  //     photo: 'assets/Images/phone6.jpeg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"

    
  //   },
  //   {
  //     name: 'Apple iPhone 13',
  //     desription: 'Apple iPhone 13 128Gb зеленый',
  //     rating: '4.1',
  //     photo: 'assets/Images/phone7.jpg',
  //     url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"

     
  //   },
  //   {
  //     name: 'Samsung Galaxy A55',
  //     desription: 'Samsung Galaxy A55 5G 8ГБ/126ГБ темно-синий',
  //     rating: '3.7',
  //     photo: 'assets/Images/phone8.jpeg',
  //     url:"https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000"

    
  //   },
  //   {
  //     name: 'Samsung Galaxy A06',
  //     desription: 'Samsung Galaxy A06 6ГБ/128ГБ черный',
  //     rating: '4.3',
  //     photo: 'assets/Images/phone9.jpg',
  //     url:"https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000"

     
  //   },
  //   // {
  //   //   name: 'Realme Note 50',
  //   //   desription: 'Realme Note 50 3 ГБ/64 ГБ черный',
  //   //   rating: '4.6',
  //   //   photo: 'assets/Images/phone10.jpg',
  //   //   url:"https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000"

  //   // }
  // ];
}


// <div class="card-list">

//   <app-product *ngFor="let productdata of ProductDataList" [productdata]="productdata">
//   </app-product>

//   </div>`,