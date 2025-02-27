import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:true,
  imports: [],
  template:`<button type="button"  class="btn btn-outline-success" (click)="shareWhatsApp()">WhatsApp </button>
           <span class="location-gap" > <button type="button" class="btn btn-outline-primary" (click)="shareTelegram()">Telegram </button> </span>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() productUrl!: string;

  
  shareWhatsApp(): void{
    const encodedUrl = encodeURIComponent(this.productUrl);
    const WhatsAppUrl = `https://wa.me/?text==${encodedUrl}`;
   
    window.open(WhatsAppUrl, '_blank'); 
    }

    shareTelegram(): void {
      const encodedUrl = encodeURIComponent(this.productUrl);
      const telegramUrl = `https://t.me/share/url?url=${encodedUrl}`;
  
      window.open(telegramUrl, '_blank'); 
    }

    LikedItem(cnt:number):number{
      return cnt++;
    }
  
}


// shareOnTelegram(link: string) {
//   const username = "@sh_alishe1";
//   const message = encodeURIComponent(`Check this product: ${link}`);

//   window.open(`https://t.me/${username}?text=${message}`, '_blank');
// }

// share{

// }
// share(){
// const message = `Check out this product: ${this.productUrl}`;
// const encodedMessage = encodeURIComponent(message);
// const shareUrl = `https://wa.me/?text=${encodedMessage}`;

// window.open(shareUrl, '_blank'); // Opens the share URL in a new tab or window
// }