import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects$: Observable<Project[]> = this.projectService.projects$;

  constructor(private projectService: ProjectService) {}
}
