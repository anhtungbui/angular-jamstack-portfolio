import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  panels = [
    {
      active: true,
      name: 'My journey into the tech industry',
      disabled: false,
      content: `Back in the day when I was in high school, my first impression of programming (in Pascal with the boring blue screen) was that this would be a quite tedious job because I could not see anything visually interesting.
      Little did I know, 10 years later, I found out that I could use the same programming skills and logical thinking but just learn a modern programming language to make way more interesting applications for the Web.
      As the rise of online learning started booming in 2018, I could spend hours every day after work trying to make some simple websites. Web development gradually became my new passion...
      Then one day I decided to get more serious about it and joined Digital Career Institute (DCI) Düsseldorf in 2020 to become a certified Web developer. In here, being a Tutor, I have been helping DCI's students with coding and inspiring them to keep exploring the broad but magical world of programming.
      Web technology nowadays is overwhelming but I love learning it and be able to apply them to my projects.`
    },
    {
      active: false,
      disabled: false,
      name: 'My favourite programming languages',
      content: 'I love JavaScript/TypeScript'
    },
    {
      active: false,
      disabled: false,
      name: 'Contact me',
      content: 'anhtung.bui (at) gmail.com'
    }
  ];

  constructor() {}
}
