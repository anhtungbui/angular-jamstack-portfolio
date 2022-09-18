import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
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
      technologies: [Technology.PHP, Technology.MYSQL],
      screenshot: 'assets/img/projects/larabook-screenshot.png',
      isSourceCodeAvailable: false,
      hasLiveDemo: false
    },
    {
      title: 'StockBay',
      description: 'A modern information hub for stock traders 📚',
      technologies: [Technology.JAVASCRIPT, Technology.REACT],
      screenshot: 'assets/img/projects/stockbay-screenshot.png',
      isSourceCodeAvailable: true,
      sourceCodeUrl: 'https://github.com/anhtungbui/React-StockBay',
      hasLiveDemo: true,
      liveDemoUrl: 'https://stockbay.anhtungbui.com/'
    }
  ];

  constructor() {
    this.projects$ = new BehaviorSubject(this.PROJECTS);
  }
}
