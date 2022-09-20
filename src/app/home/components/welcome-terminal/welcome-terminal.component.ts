import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-welcome-terminal',
  templateUrl: './welcome-terminal.component.html',
  styleUrls: ['./welcome-terminal.component.scss']
})
export class WelcomeTerminalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: [
        'Hi there and welcome :)^1000',
        'My name is Anh Tung',
        'I love making web apps',
        'Please check out my projects ^500'
      ],
      typeSpeed: 60,
      backSpeed: 100,
      backDelay: 500,
      fadeOut: true,
      // showCursor: false
      // cursorChar: '█',
      cursorChar: '_'
      // loop: true,
    };

    new Typed('.text-typed', options);
  }
}
