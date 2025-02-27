import { Component } from '@angular/core';
import { ProductData } from '../../product-data';
import { Input } from '@angular/core';
import { ButtonComponent } from '../../Button/button/button.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../Components/Products/product/product.component';



@Component({
  selector: 'app-headphone',
  imports: [CommonModule,ProductComponent],
  template:`  <div class="card-list p-3 mb-2 bg-light text-dark">

  <app-product *ngFor="let productdata of HeadPhoneDataList let i=index" [productdata]="productdata"   (removeItem)="RemoveItem(i)">
  </app-product>

  </div>`,
  styleUrl: './headphone.component.css'
})

export class HeadphoneComponent {
  RemoveItem(index:number):void{
    this.HeadPhoneDataList.splice(index,1);
  }
      HeadPhoneDataList:ProductData[]=[
      
          // {
          //   name: 'Apple Iphone 13',
          //   desription: 'Apple Iphone 13 128GB черный',
          //   rating: 'assets/Снимок экрана 2025-02-24 123252.png',
      
          //   photo: 'assets/Images/phone.1.jpeg',
          //   url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"
      
           
          // },
          // {
          //   name: 'Apple iphone 16 ',
          //   desription: 'Apple iphone 16 Pro Max 256Gb черный',
          //   rating: '4.0',
          //   photo: 'assets/Images/phone2.jpeg',
          //   url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000"
      
            
          // },
        
          // {
          //   name: 'Apple iphone 16',
          //   desription: 'Apple iphone 16 Pro Max 255Gb серебристый',
          //   rating: '4.2',
          //   photo: 'assets/Images/phone4.jpeg',
          //   url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"
      
            
          // },
          {
            name: 'Apple AirPods Pro 2 ',
            desription: 'Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
            rating: '3.9',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
            url:"https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000",
            cnt:3356,
            index:0
      
            
          },
          {
            name: 'Apple AirPods 4 ',
            desription: 'Apple AirPods 4 белый/Wireless Charging белый',
            rating: '4.8',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=preview-large',
            url:"https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000",
            cnt:344,
            index:1
      
          
          },
          {
            name: 'OEM P9 серебристый',
            desription: 'OEM P9 серебристый/Cancellation белый',
            rating: '4.1',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=preview-large',
            url:"https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000",
            cnt:2342,
            index:2
      
           
          },
          {
            name: 'HYDRA Minor черный',
            desription: 'HYDRA Minor черный/Lightning ',
            rating: '3.7',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h24/86475584700446.jpg?format=preview-large',
            url:"https://kaspi.kz/shop/p/hydra-minor-chernyi-120724113/?c=750000000",
            cnt:123,
            index:3
      
          
          },
          {
            name: 'Marshall Major IV черный',
            desription: 'Marshall Major IV черный',
            rating: '4.3',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=preview-large',
            url:"https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000",
            cnt:453,
            index:4
      
           
          },
          {
            name: 'Huawei Freebuds SE 2 ',
            desription: 'Huawei Freebuds SE 2 белый',
            rating: '4.6',
            photo: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1d/83684356161566.jpg?format=preview-large',
            url:"https://kaspi.kz/shop/p/huawei-freebuds-se-2-belyi-113250696/?c=750000000",
            cnt:3632,
            index:5
      
          }
        ];
        
}
