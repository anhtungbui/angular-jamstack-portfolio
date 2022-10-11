import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from '../enums/technology.enum';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects$: BehaviorSubject<Project[]>;

  private readonly PROJECTS: Project[] = [
    {
      title: 'Larabook',
      description: 'A social network app inspired by Facebook built with PHP Laravel',
      technologies: [
        Technology.PHP,
        Technology.LARAVEL,
        Technology.LIVEWIRE,
        Technology.MYSQL,
        Technology.CSS
      ],
      screenshot: 'assets/img/projects/larabook-screenshot.png',
      isSourceCodeAvailable: true,
      sourceCodeUrl: 'https://github.com/anhtungbui/larabook',
      hasLiveDemo: false
    },
    {
      title: 'StockBay',
      description: 'A modern information hub for stock traders 📚',
      technologies: [Technology.JAVASCRIPT, Technology.REACT, Technology.SASS],
      screenshot: 'assets/img/projects/stockbay-screenshot.png',
      isSourceCodeAvailable: true,
      sourceCodeUrl: 'https://github.com/anhtungbui/React-StockBay',
      hasLiveDemo: true,
      liveDemoUrl: 'https://stockbay.netlify.com/'
    },
    {
      title: 'Jamstack Portfolio',
      description: 'A minimalist design portfolio built with modern Jamstack architecture',
      technologies: [
        Technology.TYPESCRIPT,
        Technology.ANGULAR,
        Technology.STATIC_SITE_GENERATOR,
        Technology.CYPRESS,
        Technology.SASS
      ],
      screenshot: 'assets/img/projects/jamstack-portfolio-screenshot.png',
      isSourceCodeAvailable: false,
      hasLiveDemo: false
    },
    {
      title: 'iSass Landing Page',
      description:
        "A 1:1 clone of Apple.com's landing page as of July 2020 for the sake of mastering the Sass language 🍎",
      technologies: [Technology.SASS],
      screenshot: 'assets/img/projects/isass-screenshot.png',
      isSourceCodeAvailable: true,
      sourceCodeUrl: 'https://github.com/anhtungbui/apple-iSass',
      hasLiveDemo: true,
      liveDemoUrl: 'https://apple-isass.netlify.app/'
    }
  ];

  constructor() {
    this.projects$ = new BehaviorSubject(this.PROJECTS);
  }
}
