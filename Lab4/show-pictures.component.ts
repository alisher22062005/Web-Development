import { Component, Input } from '@angular/core';
import { Pictures } from '../pictures';
@Component({
  selector: 'app-show-pictures',
  imports: [],
  template:`
  
  <a href='{{picture.state}}' target='_blank'>
  <img class='place' [src]='picture.photo' alt='No photo'> 
  </a>
  <p>{{picture.name}}</p>
  
  

  `,

  styleUrls: ['./show-pictures.component.css']
})
export class ShowPicturesComponent {
  @Input() picture!:Pictures;
}
