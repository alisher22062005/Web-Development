import { Component } from '@angular/core';
import { ProductData } from '../../../product-data';
import { Input } from '@angular/core';
import { ButtonComponent } from '../../../Button/button/button.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [ButtonComponent],
  standalone:true,
  template:`

        <div class="card" style="width: 15rem;">
        <a href="https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000" target="_blank">
  <img [src]="productdata.photo" class="card-img-top" alt="...">
        </a>

  <div class="card-body">
    <h5 class="card-title">{{productdata.name}}</h5>
    <p class="card-text">{{productdata.desription}}</p>
    <p> <img class="rating" src= 'assets/Снимок экрана 2025-02-24 123252.png'></p>
    <app-button [productUrl]="productdata.url" > </app-button>
  </div>

</div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input () productdata!:ProductData;

  // UrlList:string[]=[

  //   "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
  //   "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
  //   "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
  //   "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
  //   "https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000",
  //   "https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000",
  //   "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
  //   "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
  //   "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
  //   "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",

  // ];
  
  
}

