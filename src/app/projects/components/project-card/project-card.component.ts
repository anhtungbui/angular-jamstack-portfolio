import { Component, Input } from '@angular/core';
import { windowCount } from 'rxjs';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project?: Project;

  constructor() {}

  onRedirect(url: string) {
    window.open(url, '_blank');
  }
}
