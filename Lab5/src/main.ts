import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PhoneComponent } from './app/Phones/phone/phone.component';
import { LaptopsComponent } from './app/Laptops/laptop/laptop.component';
import { HeadphoneComponent } from './app/HeadPhones/headphone/headphone.component';
import { BookComponent } from './app/Books/book/book.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'Phones', component: PhoneComponent },
      { path: 'Laptops', component: LaptopsComponent },
      { path: 'HeadPhones', component: HeadphoneComponent },
      { path: 'Books', component: BookComponent }


    ])
  ]
});