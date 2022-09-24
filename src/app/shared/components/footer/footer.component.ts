import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  options: AnimationOptions = {
    path: '/assets/json/94599-contact-us.json'
  };

  constructor() {}

  onAnimate(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }
}
