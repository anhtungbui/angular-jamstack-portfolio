import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  options: AnimationOptions = {
    path: '/assets/json/99312-developer-skills.json'
  };

  constructor() {}

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
