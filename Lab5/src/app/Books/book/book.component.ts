import { Component } from '@angular/core';
import { ProductData } from '../../product-data';
import { Input } from '@angular/core';
import { ButtonComponent } from '../../Button/button/button.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../Components/Products/product/product.component';

@Component({
  selector: 'app-book',
  imports: [ProductComponent,CommonModule],
  template:`  <div class="card-list p-3 mb-2 bg-light text-dark">

 <app-product *ngFor="let productdata of BookDataList let i=index" [productdata]="productdata"   (removeItem)="RemoveItem(i)">
  </app-product>

  </div>`,
  styleUrl: './book.component.css'
})
export class BookComponent {
  RemoveItem(index:number):void{
    this.BookDataList.splice(index,1);
  }

  BookDataList:ProductData[]=[
      
    // {
    //   name: 'Apple Iphone 13',
    //   desription: 'Apple Iphone 13 128GB черный',
    //   rating: 'assets/Снимок экрана 2025-02-24 123252.png',

    //   photo: 'assets/Images/phone.1.jpeg',
    //   url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    //   index:10
     
    //  },
    // {
    //   name: 'Apple iphone 16 ',
    //   desription: 'Apple iphone 16 Pro Max 256Gb черный',
    //   rating: '4.0',
    //   photo: 'assets/Images/phone2.jpeg',
    //   url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
    //   index:9;

      
    // },
  
    // {
    //   name: 'Apple iphone 16',
    //   desription: 'Apple iphone 16 Pro Max 255Gb серебристый',
    //   rating: '4.2',
    //   photo: 'assets/Images/phone4.jpeg',
    //   url:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
    //   index:9

      
    // },
    {
      name: ' Атомные привычки',
      desription: 'Клир Д.: Атомные привычки',
      rating: '3.9',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=preview-large',
      url:"https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000",
      cnt:3627,
      index:1,

      
    },
    {
      name: ' Бейсен және болмыс',
      desription: 'Керімбай С., Құспан А.: Бейсен және болмыс',
      rating: '4.8',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h88/85767456817182.jpg?format=preview-large',
      url:"https://kaspi.kz/shop/p/ker-mbai-s-n-bi-anysh-zh-ne-ylymi-maidan-123730850/?c=750000000",
      cnt:2323,
      index:2,


    
    },
    {
      name: ' Спеши любить ',
      desription: 'Спаркс Ню: Спеши любить меня',
      rating: '4.1',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=preview-large',
      url:"https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000",
      cnt:337,
      index:3,


     
    },
    {
      name: ' Теңдессіз дұғалар',
      desription: 'Айтжанқызы М.: Теңдессіз дұғалар',
      rating: '3.7',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p66/23971679.jpeg?format=preview-large',
      url:"https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000",
      cnt:91,
      index:4,


    
    },
    {
      name: ' Сүйекші',
      desription: 'Исабеков Д.: Сүйекші 2015-2016',
      rating: '4.3',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hd7/63877660246046.jpg?format=preview-large',
      url:"https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000",
      cnt:563,
      index:5,


     
    },
    {
      name: ' Самый богатый человек',
      desription: 'Клейсон Д.: Самый богатый человек',
      rating: '4.6',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h29/66560068780062.jpg?format=preview-large',
      url:"https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
      cnt:342,
      index:6,

    }
  ];
  
}
