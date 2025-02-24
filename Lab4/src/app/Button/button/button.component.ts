import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:true,
  imports: [],
  template:`<button type="button"  class="btn btn-outline-success" (click)="share()">WhatsApp </button>
           <span class="location-gap" > <button type="button" class="btn btn-outline-primary" (click)="share()">Telegram </button> </span>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() productUrl!: string;

  share(): void {
    const message = `Check out this product: ${this.productUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const shareUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(shareUrl, '_blank'); // Opens the share URL in a new tab or window
  }
}
