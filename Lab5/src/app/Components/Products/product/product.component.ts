import { Component } from '@angular/core';
import { ProductData } from '../../../product-data';
import { Input } from '@angular/core';
import { ButtonComponent } from '../../../Button/button/button.component';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [ButtonComponent],
  standalone:true,
  template:`


        <div class="card" style="width: 15rem;">

        <a href="{{productdata.url}}" target="_blank">
  <img [src]="productdata.photo" class="card-img-top"   alt="...">
        </a>

  <div class="card-body">
    <h5 class="card-title">{{productdata.name}}</h5>
    <p class="card-text">{{productdata.desription}}</p>
    <p> <img class="rating" src= 'assets/heart.png' (click)="LikedItem()">{{productdata.cnt}}  <span><button type="button" class="btn btn-outline-danger" (click)="RemoveItem()">Remove</button></span> </p> 
    <app-button [productUrl]="productdata.url" > </app-button>
  </div>

</div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input () productdata!:ProductData;
  @Output() removeItem= new EventEmitter<number>();

  LikedItem():void{
    this.productdata.cnt++;
  }
  RemoveItem():void{
    this.removeItem.emit();
  }
  

  

  


  
  
}

