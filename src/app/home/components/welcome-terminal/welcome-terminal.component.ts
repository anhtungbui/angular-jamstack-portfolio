import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-welcome-terminal',
  templateUrl: './welcome-terminal.component.html',
  styleUrls: ['./welcome-terminal.component.scss']
})
export class WelcomeTerminalComponent {
  options: AnimationOptions = {
    path: '/assets/json/99312-developer-skills.json'
  };

  constructor() {}

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
