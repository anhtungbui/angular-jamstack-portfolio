import { Component } from '@angular/core';
import { Technology } from '../../enums/technology.enum';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects: Project[] = [
    {
      title: 'Larabook',
      description: 'A social network app inspired by Facebook built with PHP Laravel',
      technologies: [Technology.PHP, Technology.MYSQL],
      screenshot: 'assets/img/projects/larabook-screenshot.png'
    },
    {
      title: 'StockBay',
      description: 'A modern information hub for stock traders 📚',
      technologies: [Technology.JAVASCRIPT, Technology.REACT],
      screenshot: 'assets/img/projects/stockbay-screenshot.png'
    }
  ];

  constructor() {}
}
